import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FeedbackService {

  feedback_url : string = 'http://localhost:3000/feedback';
  constructor(private http : HttpClient) { }

  getData(){
    return this.http.get(this.feedback_url);
  }
}
