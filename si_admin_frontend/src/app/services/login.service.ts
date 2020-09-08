import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class LoginService {
  persondetail_url : string = 'http://localhost:3000/adminlogin';
  private personurl:string="http://localhost:3000/persondetail/";
  constructor(private http : HttpClient) { }

  getData(data)
  {
    return this.http.post(this.persondetail_url,data);
  }
  changepassword(item)
     {
      let body=JSON.stringify(item);
      let h=new HttpHeaders().set('Content-Type','application/json');
       return this.http.put(this.personurl,body,{headers:h});
     }

     sendSMS(data){
      return this.http.post("http://localhost:3000/sms/",data);
    }

    getDetail(data){
      return this.http.get("http://localhost:3000/persondetail/" + data);
    }
}
