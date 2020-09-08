import { ServiceService } from './../../services/service.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { service } from '../classes/service_c';

@Component({
  selector: 'app-servicedetail',
  templateUrl: './servicedetail.component.html',
  styleUrls: ['./servicedetail.component.css']
})
export class ServicedetailComponent implements OnInit {
  s_id:number;
  s_description:string;
  s_name:string;
  s_img:string;
  constructor(private _acroute:ActivatedRoute,private _serv:ServiceService,private _route:Router) { }

  ngOnInit() {
    this._acroute.params.subscribe(
      (x:Params)=>{
        this.s_id=x['s_id'];
        this._serv.getServiceById(this.s_id).subscribe(
          (data:service)=>{
            this.s_name=data[0].s_name;
            this.s_description=data[0].s_description;
            this._serv.getOneImage(this.s_id).subscribe(
              (data1:any)=>{
                this.s_img=data1[0].i_name;
              }
            );
          }
        );
      }
    );
  }
  onclickmoreimage()
  {
    this._route.navigate(['header/serviceportfolio',this.s_id]);
  }


}
