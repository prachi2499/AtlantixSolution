import { Component, OnInit, ViewChild } from "@angular/core";
import { Router, NavigationExtras } from "@angular/router";
import { ManageUsersService } from "../../services/manage-users.service";
import { user_class } from "../../classes/user_c";
import { ManageServicesService } from "../../services/manage-services.service";
import { serviceCategory_class } from "../../classes/serviceCategory_c";
import { services_class } from "../../classes/services_c";
import { ManageEmpService } from "../../services/manage-emp.service";
import { DashboardService } from "../../services/dashboard.service";
//For DataTable
import { MatPaginator } from "@angular/material/paginator";
import { MatSort } from "@angular/material/sort";
import { MatTableDataSource } from "@angular/material/table";
import { employee_class } from "src/app/classes/employee_c";
import { package_class } from "src/app/classes/package_c";
import { ManagePkgsService } from "../../services/manage-pkgs.service";

@Component({
  selector: "app-manage-users",
  templateUrl: "./manage-users.component.html",
  styleUrls: ["./manage-users.component.css"],
})
export class ManageUsersComponent implements OnInit {
  error: string = "";
  err: string = "";
  e_mobile: number;
  sc_name: string = "";
  pkgError: string = "";
  pkgSuccess: string = "";
  p_mobile: number = 0;
  p_name: string = "";
  finalPPID: number = 0;
  p_address: string = "";
  p_pincode: number = 0;
  pkgID: number = 0;
  userList: user_class[] = [];
  employeeList: employee_class[] = [];
  servicesList: services_class[] = [];
  serviceCatList: serviceCategory_class[] = [];
  serviceID;
  empFlag: number = 0;
  empMobile;
  userNo;
  pkg: package_class;
  finalError: string = "";

  displayedColumns: string[] = ["p_name", "p_mobile", "action"];
  dataSource = new MatTableDataSource();

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  constructor(
    private route: Router,
    private manageUsers: ManageUsersService,
    private manageService: ManageServicesService,
    private managePkg: ManagePkgsService,
    private dashboardService: DashboardService,
    private manageEmp: ManageEmpService
  ) {}

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  getDetailsForDeletion(no: number) {
    this.p_mobile = no;
  }

  getDetails(no: number) {
    this.empFlag = 0;
    this.empMobile = "";
    this.employeeList = [];
    this.servicesList = [];
    this.serviceID = "";
    this.userNo = no;
    this.finalError = "";
    this.manageUsers.getUser(no).subscribe(
      (data: user_class[]) => {
        this.p_mobile = no;
        this.p_name = data[0].p_name;
        this.p_address = data[0].p_address;
        this.p_pincode = data[0].p_pincode;
      },
      (error) => {
        this.error = "Error Occured !!!";
      }
    );

    // Following Function is used for checking existing package and its expiry if the package is expired we will
    // set its status to 1 from 0.
    this.manageUsers.getPackagePurchaseByMobile(no).subscribe(
      (data: any) => {
        if (data.length === 0) {
          this.pkgError = "No Package Has been Purchased by this user yet";
          this.pkgSuccess = "";
        } else {
          let currdate = new Date();
          for (let i = 0; i < data.length; i++) {
            let pp_date = new Date(data[i].pp_date);
            let pp_endDate = new Date(data[i].pp_endDate);
            if (pp_date <= currdate && currdate <= pp_endDate) {
              this.pkgSuccess = "Current Package Name : " + data[i].pk_name;
              this.pkgError = "";
              this.finalPPID = data[i].pp_id;
              this.pkgID = data[i].pk_id;
              break;
            } else {
              this.pkgError = "Last package of this user has expired.";
              this.pkgSuccess = "";
            }
          }
        }
      },
      (error) => {
        this.error = "Error Occured !!!";
      }
    );
  }

  provideService() {
    const data1 = {
      pp_id: this.finalPPID,
      e_mobile: this.empMobile,
      om_status: 1,
      s_id: this.serviceID,
    };

    this.manageUsers.provideService(data1).subscribe(
      (data) => {
        this.manageUsers.appointEmployee(this.empMobile).subscribe(
          (data) => {
            this.manageEmp.getEmpDetailsById(this.empMobile).subscribe(
              (res: any) => {
                console.log(res[0].e_name);

                this.manageService.getServiceByID(this.serviceID).subscribe(
                  (data: any) => {
           
                    const details = {
                      mobile_no:this.userNo,
                      msg: "Dear, Customer your request for " + data[0].s_name + " service is registered successfully soon our employee name " +  res[0].e_name + " will come to your place."
                    };
                    this.dashboardService
                      .sendSMS(details)
                      .subscribe((res) => {});
                    window.location.reload();
                  },
                  (error) => {
                    this.error = "Error Occured !!!";
                  }
                );
              },
              (error) => {
                this.error = "Error Occured !!!";
              }
            );
          },
          (error) => {
            this.error = "Error Occured !!!";
          }
        );
      },
      (error) => {
        this.error = "Error Occured !!!";
      }
    );
  }

  serviceNameSelected() {
    this.empFlag = 0;
    if (this.serviceID == "") {
      this.empFlag = 0;
    } else {
      if (this.sc_name === "Free" || this.sc_name === "Expertise") {
        this.empFlag = 1;

        this.manageUsers.getEmpbyServiceID(this.serviceID).subscribe(
          (data: employee_class[]) => {
            this.employeeList = data;
          },
          (error) => {
            this.error = "Error Occured !!!";
          }
        );
      } else {
        this.managePkg.getOnePkg(this.pkgID).subscribe(
          (data: package_class[]) => {
            this.pkg = data[0];

            // the Follwing function is used to get the total count of the essential services used by customer
            this.manageUsers.getEssentialServiceCount(this.finalPPID).subscribe(
              (data: any) => {
                let count = data.length;

                if (count < this.pkg.pk_includedser) {
                  this.empFlag = 1;

                  this.manageUsers.getEmpbyServiceID(this.serviceID).subscribe(
                    (data: employee_class[]) => {
                      this.employeeList = data;
                    },
                    (error) => {
                      this.error = "Error Occured !!!";
                    }
                  );
                } else {
                  this.empFlag = 0;

                  this.finalError =
                    "This User have used all the Essential Services!!!";
                }
              },
              (error) => {
                this.error = "Error Occured !!!";
              }
            );
          },
          (error) => {
            this.error = "Error Occured !!!";
          }
        );
      }
    }
  }

  empNameSelected(no: number) {
    this.e_mobile = no;
  }

  removeUser() {
    this.manageUsers.removeUser(this.p_mobile).subscribe(
      (data) => {
        window.location.reload();
      },
      (error) => {
        this.error = "Error Occured !!!";
      }
    );
  }

  viewServices(id: number, sc_name1: string, pkgid: number) {
    this.sc_name = sc_name1;
    this.empFlag = 0;
    this.empMobile = "";

    const data = {
      sc_id: id,
      pkgID: this.pkgID,
    };
    this.manageUsers.getPackageServices(data).subscribe(
      (data: services_class[]) => {
        this.servicesList = data;
      },
      (error) => {
        this.error = "Error Occured !!!";
      }
    );
  }

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;

    this.manageUsers.getUsersList().subscribe(
      (data: user_class[]) => {
        if (data.length > 0) {
          this.userList = data;
          this.dataSource.data = this.userList;
        } else {
          this.err = "No Records Found!!";
        }
      },
      (error) => {
        this.error = "Error Occured !!!";
      }
    );

    this.manageService.getServiceCatList().subscribe(
      (data: serviceCategory_class[]) => {
        this.serviceCatList = data;
      },
      (error) => {
        this.error = "Error Occured !!!";
      }
    );
  }
}
