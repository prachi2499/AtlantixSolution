import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  service_url:string="http://localhost:3000/service/";
  image_url:string="http://localhost:3000/imageser/";
  allimage_url:string="http://localhost:3000/allimagebyserv/";
  servicecnturl:string="http://localhost:3000/servicecnt/";
  servicenotinorderurl:string="http://localhost:3000/servicenotorder/";

  constructor(private http:HttpClient) { }
  getAllServices()
  {
    return this.http.get(this.service_url);
  }
  getServiceById(s_id)
  {
    return this.http.get(this.service_url+s_id);
  }
  getOneImage(s_id)
  {
    return this.http.get(this.image_url+s_id);
  }
  getAllImageByService(s_id)
  {
    return this.http.get(this.allimage_url+s_id);
  }
  getServiceCount()
  {
    return this.http.get(this.servicecnturl);
  }
  getServiceNotInOrderMaintaintbl(pk_id,p_mobile,pk_id1,pp_id)
  {
      return this.http.get(this.servicenotinorderurl+pk_id+"/"+p_mobile+"/"+pk_id1+"/"+pp_id);
  }
}
