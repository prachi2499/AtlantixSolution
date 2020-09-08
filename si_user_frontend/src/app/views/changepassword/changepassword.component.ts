import { Component, OnInit } from '@angular/core';
import { PersonService } from 'src/app/services/person.service';
import { person_class } from '../classes/person_c';
import { changePassword_class } from '../classes/changePassword_c';
import { Router } from '@angular/router';

@Component({
  selector: 'app-changepassword',
  templateUrl: './changepassword.component.html',
  styleUrls: ['./changepassword.component.css']
})
export class ChangepasswordComponent implements OnInit {
  p_old_password:string;
  p_new_password:string;
  p_re_new_password:string;
  p_password:string;
  p_mobile:string;
  err:string;
  constructor(private _serv:PersonService,private _route:Router) { }

  ngOnInit() {
    this.p_mobile=localStorage.getItem('p_mobile');
    this._serv.getPersonByMobile(this.p_mobile).subscribe(
      (data:person_class)=>{
        this.p_password=data[0].p_password;
      }
    );
  }
  onupdate()
  {
    if(this.p_password!=this.p_old_password)
    {
      this.err="Old password is incorrect";
    }
    else if (this.p_old_password==this.p_new_password && this.p_old_password==this.p_re_new_password){
      this.err="Your new password is same as old password";
    }
    else
    {
        if(this.p_new_password==this.p_re_new_password)
        {

          this._serv.changepassword(new changePassword_class(this.p_mobile,this.p_new_password))
          .subscribe(
            (data:changePassword_class)=>{
              this.err="Your password is successfully updated!!";
            }
          );

        }
        else{
          this.err="New password and confirm password must be same";
      }
  }
  }
}
