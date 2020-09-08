import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PersonService } from 'src/app/services/person.service';
import { person_class } from '../classes/person_c';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  p_mobile:string;
   p_password:string;
    p_name:string;
     p_address:string;
     p_pincode:number;
     err:string;
  constructor(private _route:Router,private _serv:PersonService) { }

  ngOnInit() {
    this.p_mobile=localStorage.getItem('p_mobile');
    this._serv.getPersonByMobile(this.p_mobile).subscribe(
      (data:person_class)=>{
        this.p_password=data[0].p_password;
        this.p_name=data[0].p_name;
        this.p_address=data[0].p_address;
        this.p_pincode=data[0].p_pincode;
      }
    );
    
  }
  oncancel()
  {
    this._route.navigate(['/']);
  }
  onupdate()
  {
    this._serv.updatePersonDetail(new person_class(this.p_mobile,this.p_password,this.p_name,this.p_address,this.p_pincode))
    .subscribe(
      (data:person_class)=>{
        this.err = "Your details are updated successfully!!";
      }
    );
  }
}
