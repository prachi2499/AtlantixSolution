import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PersonService } from '../../services/person.service';
import { person_class } from '../classes/person_c';

@Component({
  selector: 'app-forgetpassword',
  templateUrl: './forgetpassword.component.html',
  styleUrls: ['./forgetpassword.component.css']
})
export class ForgetpasswordComponent implements OnInit {
  p_mobile:number;
  details:any[]=[];
  constructor(private route:Router,private person : PersonService) { }

  ngOnInit() {
  }
  onbutton(){
    
    this.person.getDetail(this.p_mobile)
    .subscribe((res:any) => {
      this.details = res;
      if(this.details.length == 1){
        var OTP  = Math.floor(Math.random() * (99999999 - 11111111) + 11111111);
    
     const data1 = {
       mobile_no:this.p_mobile,
       msg:"Your new password is : " + OTP
     }
     this.person.sendSMS(data1)
     .subscribe((res) => {
      
     })
     const data2 ={
      p_mobile:this.p_mobile,
      p_password:OTP

    }
    this.person.changepassword(data2)
    .subscribe((res) => {
      
    this.route.navigate(['/login']);
    })
     
      }
      else{
        alert("Your Number is not registered!!");
      }
      
    })
    

  }

}
