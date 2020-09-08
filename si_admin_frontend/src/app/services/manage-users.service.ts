import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable({
  providedIn: "root",
})
export class ManageUsersService {
  baseURL: string = "http://localhost:3000/";

  constructor(private http: HttpClient) {}

  getUsersList() {
    return this.http.get(this.baseURL + "persondetailsofUsers");
  }

  removeUser(no: number) {
    return this.http.put(this.baseURL + "persondetaildelete/" + no, null);
  }

  provideService(item) {
    let body = JSON.stringify(item);
    let head1 = new HttpHeaders().set("Content-Type", "application/json");
    return this.http.post(this.baseURL + "ordermaintain/", body, {
      headers: head1,
    });
  }
  getEssentialServiceCount(no) {
    return this.http.get(this.baseURL + "totalEssentialServiceCount/" + no);
  }

  appointEmployee(no) {
    return this.http.put(this.baseURL + "appointemployee/" + no, null);
  }

  getEmpbyServiceID(ID: number) {
    return this.http.get(this.baseURL + "employeebyservice/" + ID);
  }

  getUser(no: number) {
    return this.http.get(this.baseURL + "persondetail/" + no);
  }
  getPackagePurchaseByMobile(p_mobile: number) {
    return this.http.get(this.baseURL + "pkpurchasehistory/" + p_mobile);
  }

  getPackageHistory(p_mobile: number) {
    return this.http.get(this.baseURL + "history/" + p_mobile);
  }

  getPackageServiceById(pk_id: number) {
    return this.http.get(this.baseURL + "packageservice/" + pk_id);
  }

  getServiceStatus(pk_id: number, p_mobile: number,pp_id:number) {
    return this.http.get(
      this.baseURL + "servicestatus/" + pk_id + "/" + p_mobile + "/" + pp_id
    );
  }
  getServiceNotInOrderMaintaintbl(pk_id, p_mobile, pk_id1,pp_id) {
    return this.http.get(
      this.baseURL + "servicenotorder/" + pk_id + "/" + p_mobile + "/" + pk_id1 + "/" + pp_id
    );
  }

  getPackageServices(item) {
    let body = JSON.stringify(item);
    let head1 = new HttpHeaders().set("Content-Type", "application/json");
    return this.http.put(this.baseURL + "servicebypkidANDscid/", body, {
      headers: head1,
    });
  }
}
