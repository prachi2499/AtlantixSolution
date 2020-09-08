import { Component, OnInit } from "@angular/core";
import { ManagePkgsService } from "../../services/manage-pkgs.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-manage-pkgs",
  templateUrl: "./manage-pkgs.component.html",
  styleUrls: ["./manage-pkgs.component.css"],
})
export class ManagePkgsComponent implements OnInit {
  pkgList: any;
  totalPkgs: number = 0;

  constructor(private router: Router, private managePkgs: ManagePkgsService) {}

  deletePkg(id:number) {
    const data1:object = {};
    this.managePkgs.deletePkg(id,data1).subscribe(
      (data) => {
        window.location.reload(); 
      },
      (error) => {
        console.log(error);
      }
    );
  }

  ngOnInit() {
    this.managePkgs.getPkgList().subscribe(
      (data) => {
        this.pkgList = data;
        this.totalPkgs = this.pkgList.length;
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
