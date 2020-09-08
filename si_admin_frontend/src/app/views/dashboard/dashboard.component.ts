import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { DashboardService } from "../../services/dashboard.service";
import { employee_class } from "../../classes/employee_c";
import { packagePurchase_class } from "../../classes/packagePurchase_c";
import { ordermaintain_class } from "../../classes/ordermaintain_c";

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.css"],
})
export class DashboardComponent implements OnInit {
  totalUsers: number = 0;
  totalEmployees: number = 0;
  totalEmployeeList: employee_class[] = [];
  totalPkgSold: number = 0;
  totalPkgSoldList: packagePurchase_class[] = [];
  pendingServicesList: ordermaintain_class[] = [];
  totalServices: number = 0;

  error: string = "";
  err: string = "";

  constructor(
    private route: Router,
    private dashboardService: DashboardService
  ) {}

  failService(id:number,mobile:number,s_name:string,e_name:string,p_name:string,e_mobile:number)
  {
    this.dashboardService.failService(id).subscribe(
      (data) => {
        this.dashboardService.availableEmployee(e_mobile)
        .subscribe((res) => {

        })
        const data1 = {
          mobile_no:mobile,
          msg:"Dear, " + p_name + " we apologize you for not completing " + s_name + " service due to some inconvenience."
        }
        this.dashboardService.sendSMS(data1)
        .subscribe((res) => {
        })

        window.location.reload();
      },
      (error) => {
        this.error = "Error Occured!!!";
      }
    );
  }

  completeService(id:number,mobile:number,s_name:string,e_name:string,p_name:string,e_mobile:number)
  {
    this.dashboardService.completeService(id).subscribe(
      (data) => {
        this.dashboardService.availableEmployee(e_mobile)
        .subscribe((res) => {

        })
        const data1 = {
          mobile_no:mobile,
          msg:"Dear, " + p_name + " the " + s_name + " service is done by one of our employee " + e_name + "."
        }
        this.dashboardService.sendSMS(data1)
        .subscribe((res) => {
        })

        window.location.reload();
      },
      (error) => {
        this.error = "Error Occured!!!";
      }
    );
  }

  ngOnInit() {
    this.dashboardService.getTotalNoOfUsers().subscribe(
      (data) => {
        this.totalUsers = data[0].cnt;
      },
      (error) => {
        this.error = "Error Occured!!!";
      }
    );
    this.dashboardService.getTotalNoOfServices().subscribe(
      (data) => {
        this.totalServices = data[0].scount;
      },
      (error) => {
        this.error = "Error Occured!!!";
      }
    );
    this.dashboardService.getTotalNoOfEmployees().subscribe(
      (data: employee_class[]) => {
        this.totalEmployeeList = data;
        this.totalEmployees = this.totalEmployeeList.length;
      },
      (error) => {
        this.error = "Error Occured!!!";
      }
    );
    this.dashboardService.getTotalNoOfPkgSold().subscribe(
      (data: packagePurchase_class[]) => {
        this.totalPkgSoldList = data;
        this.totalPkgSold = this.totalPkgSoldList.length;
      },
      (error) => {
        this.error = "Error Occured!!!";
      }
    );
    this.dashboardService.getAllPendingOrdersFromOrderMaintaintbl().subscribe(
      (data: ordermaintain_class[]) => {
        if(data.length > 0){
          this.pendingServicesList = data;
        }
        else{
          this.err = "No Records Found!!";
        }

      },
      (error) => {
        this.error = "Error Occured!!!";
      }
    );
  }
}
