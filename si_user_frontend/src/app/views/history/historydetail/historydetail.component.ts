import { Component, OnInit } from '@angular/core';
import { packageservice_class } from '../../classes/packageservice_c';
import { PackageService } from '../../../services/package.service';
import { ActivatedRoute, Params } from '@angular/router';
import { packagepurchase_class } from '../../classes/packagepurchase_c';
import { formatDate } from '@angular/common';
import { PackagepurchaseService } from '../../../services/packagepurchase.service';
import { ServiceService } from '../../../services/service.service';

@Component({
  selector: 'app-historydetail',
  templateUrl: './historydetail.component.html',
  styleUrls: ['./historydetail.component.css']
})
export class HistorydetailComponent implements OnInit {
arr:any[]=[];
x:number;
parr:any[]=[];
p_mobile:string;
pp_endDate;
pp_date;
om_status:number;
i:number;
sarr:any[]=[];
pp_id:number;

  constructor(private service_ser:ServiceService,private packageser:PackageService,private actroute:ActivatedRoute,private pp_ser:PackagepurchaseService) { }

  ngOnInit() {
    this.actroute.params.subscribe(
      (y:Params)=>{
        this.x=y['id'];

    this.packageser.getHistoryDetailById(this.x).subscribe(

      (data:any[])=>{


         this.arr=data;



          }
        );
     }
    );

   this.p_mobile=localStorage.getItem('p_mobile');
   this.pp_id=parseInt(localStorage.getItem('pp_id'));
   console.log(this.pp_id);







   this.pp_ser.getServiceStatus(this.x,this.p_mobile,this.pp_id).subscribe(
     (data:any[])=>{

      this.parr=data;


     }

   );

   this.service_ser.getServiceNotInOrderMaintaintbl(this.x,this.p_mobile,this.x,this.pp_id).subscribe(
     (data:any[])=>{

       this.sarr=data;
     }
   );

  }

}

