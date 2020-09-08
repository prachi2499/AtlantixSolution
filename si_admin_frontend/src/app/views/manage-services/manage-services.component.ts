import { Component, OnInit } from "@angular/core";
import { Router,NavigationExtras } from "@angular/router";
import { ManageServicesService } from "../../services/manage-services.service";

@Component({
  selector: "app-manage-services",
  templateUrl: "./manage-services.component.html",
  styleUrls: ["./manage-services.component.css"],
})
export class ManageServicesComponent implements OnInit {
  serviceCatList: any;
  error: string = "";
  totalServiceCat: number;
  categoryName: string = "";

  constructor(
    private router: Router,
    private manageServices: ManageServicesService
  ) {}

  ngOnInit() {
    this.manageServices.getServiceCatList().subscribe(
      (data) => {
        this.serviceCatList = data;
        this.totalServiceCat = this.serviceCatList.length;
      },
      (error) => {
        this.error = "Error Occured!!!";
      }
    );
  }
}
