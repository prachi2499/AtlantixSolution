import { Component, OnInit } from "@angular/core";
import { ManagePkgsService } from "../../services/manage-pkgs.service";
import { ManageServicesService } from "../../services/manage-services.service";
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-update-pkg",
  templateUrl: "./update-pkg.component.html",
  styleUrls: ["./update-pkg.component.css"],
})
export class UpdatePkgComponent implements OnInit {
  pkgDetails: any;
  pkgName: string = "";
  pkgDuration: number;
  pkgDescription: string = "";
  pkgAmount: number;
  pkgDiscount: number;
  essentialServices: any;
  serviceList: any;
  selectedServices: any[];
  details: any;
  i: number;
  remainingServices: any[];
  s_id: number;
  err: string;

  constructor(
    private managePkg: ManagePkgsService,
    private router: Router,
    private activatedrouter: ActivatedRoute
  ) {}

  updatePkg() {
    const data = {
      pk_name: this.pkgName,
      pk_description: this.pkgDescription,
      pk_price: this.pkgAmount,
      pk_discount: this.pkgDiscount,
      pk_duration: this.pkgDuration,
      pk_includedser: this.essentialServices,
      pk_status: 0,
    };

    this.managePkg
      .udpatePkg(data, this.activatedrouter.snapshot.params.id)
      .subscribe(
        (data) => {
          this.router.navigate(["/dashboard/managePackages"]);
        },
        (error) => {
          console.log(error);
        }
      );
  }

  ngOnInit() {
    this.managePkg.getOnePkg(this.activatedrouter.snapshot.params.id).subscribe(
      (data) => {
        this.pkgDetails = data;
        this.pkgAmount = this.pkgDetails[0].pk_price;
        this.pkgName = this.pkgDetails[0].pk_name;
        this.pkgDescription = this.pkgDetails[0].pk_description;
        this.pkgDiscount = this.pkgDetails[0].pk_discount;
        this.pkgDuration = this.pkgDetails[0].pk_duration;
        this.essentialServices = this.pkgDetails[0].pk_includedser;
      },
      (error) => {
        console.log(error);
      }
    );

    this.managePkg
      .getPackageServices(this.activatedrouter.snapshot.params.id)
      .subscribe(
        (data: []) => {
          this.selectedServices = data;
        },
        (error) => {
          console.log(error);
        }
      );

    this.managePkg
      .getPackageRemainingServices(this.activatedrouter.snapshot.params.id)
      .subscribe(
        (data: []) => {
          this.remainingServices = data;
        },
        (error) => {
          console.log(error);
        }
      );
  }

  addService(data) {
    if (data === undefined) {
      this.err = "Choose any one service first!!";
    } else {
      console.log(data);
      this.managePkg.getServiceDetailsByName(data).subscribe((res) => {
        this.s_id = res[0].s_id;

        const data1 = {
          pk_id: this.activatedrouter.snapshot.params.id,
          s_id: this.s_id,
        };
        this.managePkg.addPackageService(data1).subscribe((res) => {});

        this.err = "Service is added Successfully";
      });
    }
  }

  removeService(data) {
    if (data === undefined) {
      this.err = "Choose any one service first!!";
    } else {
      this.managePkg.getServiceDetailsByName(data).subscribe((res) => {
        this.s_id = res[0].s_id;
        const data1 = {
          pk_id: this.activatedrouter.snapshot.params.id,
          s_id: this.s_id,
        };
        this.managePkg.removeEmployeeService(data1).subscribe((res) => {});
        this.err = "Service is removed Successfully";
      });
    }
  }

  goBack() {
    this.router.navigate(["/dashboard/managePackages"]);
  }
}
