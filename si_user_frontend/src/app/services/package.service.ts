import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PackageService {

  package_url:string="http://localhost:3000/package/";
  packageservice_url:string="http://localhost:3000/packageservice/";
  topthreepackageurl:string="http://localhost:3000/sellingcnt/";
  packagecnturl:string="http://localhost:3000/packagecnt/";
  historydetailurl:string="http://localhost:3000/historydetail/";
  constructor(private http:HttpClient) { }

  getAllPackage()
  {
    return this.http.get(this.package_url);
  }
  getPackageServiceById(id:number)
  {
    return this.http.get(this.packageservice_url+id);
  }
  getHistoryDetailById(id:number)
  {
return this.http.get(this.historydetailurl+id);
  }
  topSellingPackagewithCount()
  {
    return this.http.get(this.topthreepackageurl);
  }
  getPackageCount()
  {
    return this.http.get(this.packagecnturl);
  }

}
