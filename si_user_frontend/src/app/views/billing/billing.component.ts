import { Component, OnInit } from "@angular/core";
import { PackageService } from "src/app/services/package.service";
import { ActivatedRoute, Params, Router } from "@angular/router";
import { packageservice_class } from "../classes/packageservice_c";
import { MatTableDataSource } from "@angular/material";
import { PackagepurchaseService } from "src/app/services/packagepurchase.service";
import { packagepurchase_class } from "../classes/packagepurchase_c";
import { formatDate } from "@angular/common";

declare var Razorpay: any;

@Component({
  selector: "app-billing",
  templateUrl: "./billing.component.html",
  styleUrls: ["./billing.component.css"],
})
export class BillingComponent implements OnInit {
  pk_id: number;
  order_id: string = "";
  error: string = "";
  pp_id;
  temp: string;
  pk_name: string;
  pk_price: number;
  pk_discount: number;
  total: number;
  totdiscount: number;
  arr: packageservice_class[] = [];
  pk_duration: number;
  p_mobile: string;
  Todaydate = new Date();
  end_date = new Date();
  edate: string;
  t: Date;
  constructor(
    private _route: Router,
    private _packagepurchaseserv: PackagepurchaseService,
    private _packageserv: PackageService,
    private _acroute: ActivatedRoute
  ) {}

  ngOnInit() {
    this.p_mobile = localStorage.getItem("p_mobile");
    this._acroute.params.subscribe((x: Params) => {
      this.pk_id = x["pk_id"];
      this._packageserv
        .getPackageServiceById(this.pk_id)
        .subscribe((data: packageservice_class[]) => {
          this.pk_name = data[0].pk_name;
          this.pk_price = data[0].pk_price;
          this.pk_discount = data[0].pk_discount;
          this.pk_duration = data[0].pk_duration;
          this.arr = data;

          this.total = Math.round(
            this.pk_price - (this.pk_price * this.pk_discount) / 100
          );

          this.totdiscount = (this.pk_price * this.pk_discount) / 100;
        });
    });
  }

  onclickplaceorder(total, pkgName: string) {
    this._packagepurchaseserv.makePayment({ finalAmt: total }).subscribe(
      (data: any) => {
        this.order_id = data.id;

        var options = {
          key: "rzp_test_jG7kHH2emV2Ihi", // Enter the Key ID generated from the Dashboard
          amount: total * 100, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
          currency: "INR",
          name: "Atlantix Solutions",
          description: "Payment for " + pkgName,
          order_id: data.id, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
          handler: (response) => {
            // verify the signature that is return by razorpay for authenticity
            this._packagepurchaseserv
              .varifySignature({
                order_id: this.order_id,
                razorpay_signature: response.razorpay_signature,
                razorpay_payment_id: response.razorpay_payment_id,
              })
              .subscribe(
                (data: any) => {
                  if (data.result === 1) {
                    // Payment SuccessFull and signature is matched
                    this.end_date = new Date(
                      this.Todaydate.setMonth(
                        this.end_date.getMonth() + this.pk_duration + 1
                      )
                    );
                    this.temp =
                      this.end_date.getFullYear() +
                      "-" +
                      this.end_date.getMonth() +
                      "-" +
                      this.end_date.getDate();
                    this.edate = formatDate(this.temp, "yyyy-MM-dd", "en_US");
                    this.t = new Date(this.edate);
                    this._packagepurchaseserv
                      .addInPackagePurchase(
                        new packagepurchase_class(
                          this.pp_id,
                          this.p_mobile,
                          this.Todaydate,
                          this.total,
                          this.pk_id,
                          this.edate
                        )
                      )
                      .subscribe((data: packagepurchase_class) => {
                        window.location.href="/";
                      });
                  }
                },
                (error) => {
                  this.error = "Error Occured !!!";
                }
              );
          },
          theme: {
            color: "#1e68f2",
          },
        };

        var rzp1 = new Razorpay(options);
        rzp1.open();
      },
      (error) => {
        this.error = "Error Occured !!!";
      }
    );
  }
}
