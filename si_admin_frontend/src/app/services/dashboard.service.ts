import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable({
  providedIn: "root",
})
export class DashboardService {
  base_url: string = "http://localhost:3000/";
  constructor(private http: HttpClient) {}

  getTotalNoOfUsers() {
    return this.http.get(this.base_url + "cntusers");
  }

  getAllPendingOrdersFromOrderMaintaintbl() {
    return this.http.get(this.base_url + "ordermaintain");
  }

  getTotalNoOfEmployees() {
    return this.http.get(this.base_url + "employee");
  }

  getTotalNoOfServices() {
    return this.http.get(this.base_url + "servicecnt");
  }

  getTotalNoOfPkgSold() {
    return this.http.get(this.base_url + "packagepurchase");
  }
  completeService(id: number) {
    return this.http.put(this.base_url + "serviceCompelete/" + id, null);
  }

  availableEmployee(id:number){
    return this.http.put(this.base_url + "availableemployee/" + id, null);
  }

  failService(id: number) {
    return this.http.put(this.base_url + "serviceFailed/" + id, null);
  }
  serviceCompelete;
  getAllPendingServices() {
    return this.http.get(this.base_url + "ordermaintain");
  }

  sendSMS(data){
    return this.http.post(this.base_url + "sms/",data);
  }
}
