import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PersonService } from 'src/app/services/person.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  flag:boolean=false;
  user:string="";
  constructor(private route:Router,private Person_Service:PersonService) { }

  ngOnInit() {
    if(localStorage.getItem('is_loggedIn')=='true')
    {
      this.flag=true;
      this.Person_Service
      .getPersonByMobile(localStorage.getItem("p_mobile"))
      .subscribe((data) => {
        this.user = data[0].p_name;
      });
    }
    else
    {
      this.flag=false;
    }

  }
// onsignin()
// {
// this.route.navigate(['/login']);
// }
onlogout()
{

  localStorage.setItem('is_loggedIn',"false");
  localStorage.removeItem('p_mobile');
  this.route.navigate(['/header']);
  // console.log("hi");
  // console.log( localStorage.getItem('is_loggedIn'));
}
}
