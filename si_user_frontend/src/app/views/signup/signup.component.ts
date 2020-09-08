import { person_class } from './../classes/person_c';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PersonService } from 'src/app/services/person.service';
import { SignUp } from '../classes/signup_c';
import { log } from 'util';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
    p_mobile:string;
    registerflag:boolean=false;
    public p_name:string;
    public p_password:string;
    public p_address:string;
    public p_pincode:number;
    value:number=0;
    j:number=0;
    flag:boolean=true;
    showflag:boolean=false;
    otp:number;
    mobileno_arr:number[];
    randomOTP:number;
  constructor(private route:Router,private _personserv:PersonService) { }

  ngOnInit() {
  }
  onClickSignUp(){
    if(this.otp == this.randomOTP){
      this._personserv.getPersonByMobile(this.p_mobile).subscribe(
        (data:SignUp[])=>{
          if(data.length==1)
          {
            alert("This Mobile no is aleady registered!!Use Another Mobile No!!");
          }
          else
          {
            this._personserv.PersonRegister(new SignUp(this.p_mobile,this.p_name,this.p_password,this.p_address,this.p_pincode))
              .subscribe((data:SignUp[])=>{
                this.route.navigate(['/login']);
              });
  
          }
        }
      );
    }
    else{
      alert("OTP is not correct!!");
    }
    

  }
  onKey(event) {
    if(event.target.value.length==10)
    {
      this.value=event.target.value;
      this._personserv.getPersonByMobile(this.value).subscribe(
        (data:SignUp[])=>{
          if(data.length==1)
          {
            this.showflag=false;
           this.registerflag=true;
          }
          else
          {
            this.showflag=true;
            this.registerflag=false;

          }
        }
      );

    }
  }
  getOTP(mobile:number){

    this.randomOTP  = Math.floor(Math.random() * (9999 - 1111) + 1111);
    
     const data1 = {
       mobile_no:mobile,
       msg:"Your verification code is : " + this.randomOTP
     }
     this._personserv.sendSMS(data1)
     .subscribe((res) => {
       console.log(res);
     })
  }

}
