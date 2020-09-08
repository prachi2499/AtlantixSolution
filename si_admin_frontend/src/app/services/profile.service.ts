import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  profile_url : string = 'http://localhost:3000/persondetail/';
  constructor(private http : HttpClient) { }

  getData(data)
  {
    return this.http.get(this.profile_url + data);
  }

  editDetails(data){
    let body = JSON.stringify(data);
    let head1 = new HttpHeaders().set('Content-Type','application/json');
    return this.http.put(this.profile_url + data.p_mobile,body,{headers:head1});
  }
}
