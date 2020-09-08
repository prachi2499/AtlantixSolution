import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { feedback_class } from '../views/classes/feedback_c';

@Injectable({
  providedIn: 'root'
})
export class FeedbackService {

  private feedbackurl:string="http://localhost:3000/feedback/";
  constructor(private http:HttpClient) { }

  addFeedback(item:feedback_class)
  {
    let head1=new HttpHeaders().set('Content-Type','application/json');
    let body=JSON.stringify(item);
    return this.http.post(this.feedbackurl,body,{headers:head1});
  }
}
