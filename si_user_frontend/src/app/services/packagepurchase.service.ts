import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { packagepurchase_class } from "../views/classes/packagepurchase_c";

@Injectable({
  providedIn: "root",
})
export class PackagepurchaseService {
  private base_url: string = "http://localhost:3000/";

  private packahepurchasehistory_url: string =
    "http://localhost:3000/pkpurchasehistory/";
  private packahepurchase_url: string =
    "http://localhost:3000/packagepurchase/";
  private servicestatusurl: string = "http://localhost:3000/servicestatus/";
  constructor(private _http: HttpClient) {}
  getPackagePurchaseByMobile(p_mobile) {
    return this._http.get(this.packahepurchasehistory_url + p_mobile);
  }
  addInPackagePurchase(item: packagepurchase_class) {
    let body = JSON.stringify(item);
    let h = new HttpHeaders().set("Content-Type", "application/json");
    return this._http.post(this.packahepurchase_url, body, { headers: h });
  }
  getServiceStatus(pk_id, p_mobile,pp_id) {
    return this._http.get(this.servicestatusurl + pk_id + "/" + p_mobile+ "/" + pp_id);
  }

  makePayment(item) {
    let body = JSON.stringify(item);
    let h = new HttpHeaders().set("Content-Type", "application/json");
    return this._http.post(this.base_url + "makePayment", body, { headers: h });
  }

  varifySignature(item) {
    let body = JSON.stringify(item);
    let h = new HttpHeaders().set("Content-Type", "application/json");
    return this._http.post(this.base_url + "makePayment/varifySignature", body, { headers: h });
  }
}
