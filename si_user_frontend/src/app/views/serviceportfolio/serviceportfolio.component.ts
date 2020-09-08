import { ServiceService } from './../../services/service.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { image_class } from '../classes/image_c';

@Component({
  selector: 'app-serviceportfolio',
  templateUrl: './serviceportfolio.component.html',
  styleUrls: ['./serviceportfolio.component.css']
})
export class ServiceportfolioComponent implements OnInit {
  s_id:number;
  constructor(private _acroute:ActivatedRoute,private _serv:ServiceService,private _route:Router) { }
  arrimage:image_class[]=[];
  ngOnInit() {
    this._acroute.params.subscribe(
      (x:Params)=>{
        this.s_id=x['s_id'];
        this._serv.getAllImageByService(this.s_id).subscribe(
          (data:image_class[])=>{
            this.arrimage=data;
          }
        );
      }
    );
   
  }

}
