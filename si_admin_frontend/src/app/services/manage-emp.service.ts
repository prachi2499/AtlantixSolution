import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ManageEmpService {
  baseURL : string = "http://localhost:3000/";
  empservice_url : string = "http://localhost:3000/employeeservice/";
  servicebyname_url : string = "http://localhost:3000/ServiceByName/";
  removeservice_url : string = "http://localhost:3000/employeeservicebysidemobile/";
  service_url : string = "http://localhost:3000/empremainingser/";
  emp_url : string ="http://localhost:3000/employee/";
  constructor(private http : HttpClient) { }

  getEmpList()
  {
    return this.http.get(this.baseURL + "employee");
  }

  getEmpDetailsById(data){
    return this.http.get(this.baseURL + "employee/" + data);
  }

   getEmpServiceDetails(data)
   {
     return this.http.get(this.empservice_url + data);
   }

   getEmpDetails(data)
   {
    return this.http.get(this.emp_url + data);
   }

   addDetails(data:FormData){
    return this.http.post(this.baseURL + "employee" , data);
   }

   getService(data){
    return this.http.get(this.service_url + data);
   }

   addEmployeeService(data){
     return this.http.post(this.empservice_url,data);
   }

   getServiceDetailsByName(data){
    return this.http.get(this.servicebyname_url+data);
   }

   removeEmployeeService(data){
    let body = JSON.stringify(data);
    let head1 = new HttpHeaders().set('Content-Type','application/json');
    return this.http.put(this.removeservice_url + data.e_mobile + "/" +data.s_id ,body,{headers:head1});
   }

   editDetails(data){
    let body = JSON.stringify(data);
    let head1 = new HttpHeaders().set('Content-Type','application/json');
    return this.http.put(this.baseURL + "employee/" + data.e_mobile,body,{headers:head1});
  }

  deleteEmp(data){
    let body = JSON.stringify(data);
    let head1 = new HttpHeaders().set('Content-Type','application/json');
    return this.http.put(this.baseURL + "deleteemployee/" + data,{headers:head1});
  }
}
