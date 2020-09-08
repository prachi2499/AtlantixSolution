import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders} from '@angular/common/http';
import { person_class } from '../views/classes/person_c';
import { changePassword_class } from '../views/classes/changePassword_c';

@Injectable({
  providedIn: 'root'
})
export class PersonService {


  private personurl:string="http://localhost:3000/persondetail/";
  private registerurl:string="http://localhost:3000/personregister/";
  private cntusersurl:string="http://localhost:3000/cntusers/";
  private historyurl:string="http://localhost:3000/history/";
  constructor(private _http:HttpClient) {}

  PersondetailLogin(item:person_class){
    let body=JSON.stringify(item);
     let h=new HttpHeaders().set('Content-type','application/json');
     return this._http.post(this.personurl,body,{headers:h});
     }

     PersonRegister(item:person_class)
     {
      let body=JSON.stringify(item);
      let h=new HttpHeaders().set('Content-Type','application/json');
      return this._http.post(this.registerurl,body,{headers:h});
     }
     getAllPersons()
     {
       return this._http.get(this.personurl);
     }
     getPersonByMobile(p_mobile)
     {
      return this._http.get(this.personurl+p_mobile);
     }
     updatePersonDetail(item:person_class)
     {
      let body=JSON.stringify(item);
      let h=new HttpHeaders().set('Content-Type','application/json');
       return this._http.put(this.personurl+item.p_mobile,body,{headers:h});
     }
     changepassword(item)
     {
      let body=JSON.stringify(item);
      let h=new HttpHeaders().set('Content-Type','application/json');
       return this._http.put(this.personurl,body,{headers:h});
     }
     cntOfUnblockUsers()
     {
       return this._http.get(this.cntusersurl);
     }
     packagePurchaseHistoryById(p_mobile)
     {
       return this._http.get(this.historyurl+p_mobile);
     }

     sendSMS(data){
      return this._http.post("http://localhost:3000/sms/",data);
    }

    getDetail(data){
      return this._http.get("http://localhost:3000/persondetail/" + data);
    }

}
