import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {
p_mobile:number;
details:any[]=[];
  constructor(private login : LoginService,private route:Router) { }

  ngOnInit() {
  }

  onSubmit(){
    
    this.login.getDetail(this.p_mobile)
    .subscribe((res:any) => {
      this.details = res;
      if(this.details.length == 1){
        var OTP  = Math.floor(Math.random() * (99999999 - 11111111) + 11111111);
    
     const data1 = {
       mobile_no:this.p_mobile,
       msg:"Your new password is : " + OTP
     }
     this.login.sendSMS(data1)
     .subscribe((res) => {
      
     })
     const data2 ={
      p_mobile:this.p_mobile,
      p_password:OTP

    }
    this.login.changepassword(data2)
    .subscribe((res) => {
      
    this.route.navigate(['/']);
    })
     
      }
      else{
        alert("Your Number is not registered!!");
      }
      
    })
    

  }

}
