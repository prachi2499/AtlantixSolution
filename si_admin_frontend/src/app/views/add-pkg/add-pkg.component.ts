import { Component, OnInit } from "@angular/core";
import { ManagePkgsService } from "../../services/manage-pkgs.service";
import { ManageServicesService } from "../../services/manage-services.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-add-pkg",
  templateUrl: "./add-pkg.component.html",
  styleUrls: ["./add-pkg.component.css"],
})
export class AddPkgComponent implements OnInit {
  pkgName: string = "";
  pkgDuration: number;
  pkgDescription: string = "";
  pkgAmount: number;
  pkgDiscount: number;
  serviceList: any;
  essentialServices: any;
  selectedServices: [];

  constructor(
    private managePkg: ManagePkgsService,
    private router: Router,
    private manageService: ManageServicesService
  ) {}

  addPkg() {
    const data = {
      pk_name: this.pkgName,
      pk_description: this.pkgDescription,
      pk_price: this.pkgAmount,
      pk_discount: this.pkgDiscount,
      pk_duration: this.pkgDuration,
      pk_includedser: this.essentialServices,
      pk_status: 0,
    };
    this.managePkg.addPkg(data).subscribe(
      (data) => {
        //  console.log(data);
        this.router.navigate(["/dashboard/managePackages"]);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  ngOnInit() {
    // get All Services
    /*this.manageService.getServiceList().subscribe(
      (data) => {
        this.serviceList = data;
        //console.log(this.serviceList);
      },
      (error) => {
        console.log(error);
      }
    );*/
  }
}
