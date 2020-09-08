import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ViewHistoryService {

  packagepurchase_url  : string = "http://localhost:3000/";
  constructor(private http : HttpClient) { }

  getAllPackagePurchase(){
      return this.http.get(this.packagepurchase_url + "packagepurchase");
  }
 
  getAllPackagePurchaseCount(pk_name:string,month:number){
    return this.http.get(this.packagepurchase_url + "packagePurchaseCount/" + pk_name + "/" + month);
}
}
