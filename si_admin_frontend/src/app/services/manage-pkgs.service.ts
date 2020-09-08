import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable({
  providedIn: "root",
})
export class ManagePkgsService {
  baseURL: string = "http://localhost:3000/";
  servicebyname_url : string = "http://localhost:3000/ServiceByName/";

  constructor(private http: HttpClient) {}

  getPkgList() {
    return this.http.get(this.baseURL + "package");
  }

  removeEmployeeService(data1){
    const body = JSON.stringify(data1);
    let head1 = new HttpHeaders().set("Content-Type", "application/json");
    return this.http.put(this.baseURL + "packageservice/" + data1.pk_id + "/" +data1.s_id, body, {
      headers: head1,
    });
  }
  getServiceDetailsByName(data){
    return this.http.get(this.servicebyname_url+data);
   }

  addPackageService(data)
  {
    return this.http.post(this.baseURL + "packageservice/" , data);
  }

  getPackageServices(data)
  {
    return this.http.get(this.baseURL + "servicebypkid/" + data);
  }

  getPackageRemainingServices(data)
  {
    return this.http.get(this.baseURL + "RemainingServiceInPackage/" + data);
  }

  deletePkg(id: number, item: any) {
    const body = JSON.stringify(item);
    let head1 = new HttpHeaders().set("Content-Type", "application/json");
    return this.http.put(this.baseURL + "deletepackage/" + id, body, {
      headers: head1,
    });
  }

  addPkg(item: any) {
    const body = JSON.stringify(item);
    let head1 = new HttpHeaders().set("Content-Type", "application/json");
    return this.http.post(this.baseURL + "package", body, {
      headers: head1,
    });
  }

  udpatePkg(item: any,id:number) {
    const body = JSON.stringify(item);
    let head1 = new HttpHeaders().set("Content-Type", "application/json");
    return this.http.put(this.baseURL + "package/" + id, body, {
      headers: head1,
    });
  }

  getOnePkg(id: number) {
    return this.http.get(this.baseURL + "package/" + id);
  }
}
