import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { ManageEmpService } from "../../services/manage-emp.service";
import { FormControl } from "@angular/forms";
import { TooltipPosition } from "@angular/material/tooltip";

@Component({
  selector: "app-update-emp",
  templateUrl: "./update-emp.component.html",
  styleUrls: ["./update-emp.component.css"],
})
export class UpdateEmpComponent implements OnInit {
  totalservices: any[];
  sub: any;
  details: any;
  empName: any;
  empContactNo: any;
  empAadhaarNo: any;
  empAddress: any;
  empPincode: any;
  err: any;
  mobile: any;
  services: any = [];
  i: any;
  result: any;
  j: any;
  assignedService: any;
  service: any;
  s_id: any;
  img:any;
  constructor(
    private route: ActivatedRoute,
    private manageEmp: ManageEmpService,
    private router: Router
  ) {}

  ngOnInit() {
    this.sub = this.route.queryParams.subscribe((params) => {
      this.mobile = params["mobile"];

      if (this.mobile) {
        this.manageEmp
          .getEmpServiceDetails(this.mobile)
          .subscribe((res: []) => {
            this.details = res;

            for (this.i = 0; this.i < this.details.length; this.i++) {
              this.services[this.i] = this.details[this.i].s_name;
            }
          });

        this.manageEmp.getEmpDetails(this.mobile).subscribe((res) => {
          this.details = res;
          this.empName = this.details[0].e_name;
          this.empContactNo = this.details[0].e_mobile;
          this.empAadhaarNo = this.details[0].aadharcard_no;
          this.empAddress = this.details[0].e_address;
          this.empPincode = this.details[0].e_pincode;
          this.img = this.details[0].e_image;
          console.log(this.img);
        });
      }
    });

    this.manageEmp.getService(this.mobile).subscribe((res) => {
      this.result = res;
    });
  }

  editDetails(data) {
    const details = {
      e_mobile: this.mobile,
      aadharcard_no: data.empaadhaarno,
      e_address: data.empaddress,
      e_name: data.empname,
      e_pincode: data.emppincode,
    };
    this.manageEmp.editDetails(details).subscribe((result) => {
      this.err = "Your details are updated successfully!!";
    });
  }

  addService(data) {
    if (data === undefined) {
      this.err = "Choose any one service first!!";
    } else {
      this.manageEmp.getServiceDetailsByName(data).subscribe((res) => {
        this.s_id = res[0].s_id;

        const data1 = {
          e_mobile: this.mobile,
          s_id: this.s_id,
        };
        this.manageEmp.addEmployeeService(data1).subscribe((res: []) => {});

        this.err = "Service is added Successfully";
      });
    }
  }

  goBack() {
    this.router.navigate(["/dashboard/manageEmployees"]);
  }

  removeService(data) {
    if (data === undefined) {
      this.err = "Choose any one service first!!";
    } else {
      this.manageEmp.getServiceDetailsByName(data).subscribe((res) => {
        this.s_id = res[0].s_id;
        const data1 = {
          e_mobile: this.mobile,
          s_id: this.s_id,
        };
        this.manageEmp.removeEmployeeService(data1).subscribe((res) => {});
        this.err = "Service is removed Successfully";
      });
    }
  }
}
