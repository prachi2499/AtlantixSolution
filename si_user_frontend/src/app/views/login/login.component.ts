import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PersonService } from '../../services/person.service';
import { person_class } from '../classes/person_c';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  hide = true;
  personarr:person_class[]=[];
  p_mobile:string;
  p_password:string;
  p_id:number;
  constructor(private route:Router,private personservice:PersonService) { }

  ngOnInit() {

  }
  onsignup()
  {
    this.route.navigate(['/signup']);
  }
  onforget(){
    this.route.navigate(['/forgetpwd']);
  }
  onlogin()
  {
    this.personservice.PersondetailLogin(new person_class(this.p_mobile,this.p_password)).subscribe(
      (data:person_class[])=>{
        if(data.length==1)
        {
          localStorage.setItem('p_mobile',this.p_mobile);
          localStorage.setItem('is_loggedIn',"true");
          this.p_id=data[0].p_id;
          if(this.p_id==2)
          {
            this.route.navigate(['/']);
          }

        }
        else{
          alert("INVALID MOBILE NUMBER OR PASSWORD");
        }

      }
    );
  }

}
