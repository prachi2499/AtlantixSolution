import { ServiceService } from './../../services/service.service';
import { Component, OnInit } from '@angular/core';
import { service } from '../classes/service_c';
import { Router } from '@angular/router';


@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {

  flag:boolean=false;
  constructor(private _route:Router,private _serv:ServiceService) { }
  servicearr:service[]=[];
  ngOnInit() {
    if(localStorage.getItem('is_loggedIn')=='true')
    {
      this.flag=true;
    }
    else
    {
      this.flag=false;
    }
    this._serv.getAllServices().subscribe(
      (data:service[])=>{
        this.servicearr=data;

      }
    );
  }
  onclickdetail(s_id)
  {
    this._route.navigate(['/services/servicedetail',s_id]);
  }

}
