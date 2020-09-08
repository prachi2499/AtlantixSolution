import { Component, OnInit } from '@angular/core';
import { FeedbackService } from '../../services/feedback.service';
import { Router } from '@angular/router';
import { feedback_class } from '../classes/feedback_c';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent implements OnInit {

  f_id:number;
  f_experience:string;
  f_comment:string;
  f_status:number;
  p_mobile:string;
  feedbackarr:feedback_class[]=[];

  constructor(private feedback_ser:FeedbackService,private route:Router) { }

  ngOnInit() {
    this.p_mobile=localStorage.getItem("p_mobile");
  }
  onaddfeedback()
  {
    this.p_mobile=localStorage.getItem("p_mobile");
    console.log(this.p_mobile);
    this.feedback_ser.addFeedback(new feedback_class(this.f_id,this.f_experience,this.f_comment,this.p_mobile,this.f_status)).subscribe(
      (data:any)=>{
        this.feedbackarr.push(new feedback_class(this.f_id,this.f_experience,this.f_comment,this.p_mobile,this.f_status));
        alert("YOUR FEEEDBACK SUBMITTED SUCCESFULLY");
        this.route.navigate(['/']);

      }
    );
  }

}
