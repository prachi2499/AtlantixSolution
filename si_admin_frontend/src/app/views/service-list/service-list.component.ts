import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router, NavigationExtras } from "@angular/router";
import { ManageServicesService } from "../../services/manage-services.service";
@Component({
  selector: "app-service-list",
  templateUrl: "./service-list.component.html",
  styleUrls: ["./service-list.component.css"],
})
export class ServiceListComponent implements OnInit {
  sc_id: number;
  services: any[];
  sub: any;
  serviceName: string;
  serviceDesc: string;
  s_id: number;
  err: string;
  addserviceName: string;
  addserviceDesc: string;
  serviceNames: any[];
  constructor(
    private router: ActivatedRoute,
    private route: Router,
    private manageSer: ManageServicesService
  ) {}

  ngOnInit() {
    this.router.queryParams.subscribe((params) => {
      this.sc_id = params["s_c_i_d"];
    });
    this.manageSer.getServiceOfCat(this.sc_id).subscribe((res: any) => {
      this.services = res;
    });
  }

  getServiceDetails(data) {
    this.s_id = data;
    this.manageSer.getServiceDetails(data).subscribe((res) => {
      this.serviceName = res[0].s_name;
      this.serviceDesc = res[0].s_description;
    });
  }

  updateService(data) {
    const data1 = {
      s_id: this.s_id,
      s_name: this.serviceName,
      s_description: this.serviceDesc,
      sc_id: this.sc_id,
    };
    this.manageSer.updateService(data1).subscribe((res) => {
      this.route.routeReuseStrategy.shouldReuseRoute = function () {
        return false;
      };
      this.route.onSameUrlNavigation = "reload";
      this.route.navigate(["/dashboard/manageServices/serviceList"], {
        queryParams: { s_c_i_d: this.sc_id },
      });
      location.reload();
    });
  }

  getServiceDetails2(data) {
    this.s_id = data;
  }

  deleteService() {
    this.manageSer.deleteService(this.s_id).subscribe((res) => {
      this.route.routeReuseStrategy.shouldReuseRoute = function () {
        return false;
      };
      this.route.onSameUrlNavigation = "reload";
      this.route.navigate(["/dashboard/manageServices/serviceList"], {
        queryParams: { s_c_i_d: this.sc_id },
      });
      location.reload();
    });
  }

  addService(data) {
    const data1 = {
      s_name: data.addservicename,
      s_description: data.Description,
      sc_id: this.sc_id,
      s_status: 0,
    };

    this.manageSer
      .getServiceByName(data.addservicename)
      .subscribe((res: []) => {
        this.serviceNames = res;
        if (this.serviceNames.length == 1) {
          this.err = "This Service is already there in table!!";
        } else {
          this.manageSer.addService(data1).subscribe((res) => {
            this.route.routeReuseStrategy.shouldReuseRoute = function () {
              return false;
            };
            this.route.onSameUrlNavigation = "reload";
            this.route.navigate(["/dashboard/manageServices/serviceList"], {
              queryParams: { s_c_i_d: this.sc_id },
            });
            location.reload();
          });
        }
      });
  }
  goTo(data){
    let navigationExtras: NavigationExtras = {
      queryParams: {
        s_i_d: data
      },
    };
    this.route.navigate(
      ["dashboard/manageServices/serviceImages"],
      navigationExtras
    );
  }
}
