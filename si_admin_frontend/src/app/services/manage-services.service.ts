import { Injectable } from "@angular/core";

import { HttpClient, HttpHeaders } from "@angular/common/http";
@Injectable({
  providedIn: "root",
})
export class ManageServicesService {
  baseURL: string = "http://localhost:3000/";

  constructor(private http: HttpClient) {}

  getServiceOfCat(data) {
    return this.http.get(this.baseURL + "servicebycat/" + data);
  }

  getServiceByName(data: string) {
    return this.http.get(this.baseURL + "ServiceByName/" + data);
  }

  getServiceByID(data: number) {
    return this.http.get(this.baseURL + "service/" + data);
  }

  addService(data) {
    return this.http.post(this.baseURL + "service/", data);
  }

  getServiceList() {
    return this.http.get(this.baseURL + "service/");
  }

  updateService(data) {
    const body = JSON.stringify(data);
    let head1 = new HttpHeaders().set("Content-Type", "application/json");
    return this.http.put(this.baseURL + "service/" + data.s_id, body, {
      headers: head1,
    });
  }

  deleteService(data) {
    const body = JSON.stringify(data);
    let head1 = new HttpHeaders().set("Content-Type", "application/json");
    return this.http.put(this.baseURL + "deleteservice/" + data, {
      headers: head1,
    });
  }

  getServiceCatList() {
    return this.http.get(this.baseURL + "servicecat");
  }

  getServiceDetails(id: number) {
    return this.http.get(this.baseURL + "service/" + id);
  }

  deleteServicesByCategory(id: number) {
    return this.http.delete(this.baseURL + "service/" + id);
  }
  getAllImageByService(s_id) {
    return this.http.get(this.baseURL + "allimagebyserv/" + s_id);
  }

  addImage(data: FormData) {
    return this.http.post(this.baseURL + "image/", data);
  }

  deleteImage(data) {
    const body = JSON.stringify(data);
    let head1 = new HttpHeaders().set("Content-Type", "application/json");
    return this.http.put(this.baseURL + "imagedel/" + data, {
      headers: head1,
    });
  }
}
