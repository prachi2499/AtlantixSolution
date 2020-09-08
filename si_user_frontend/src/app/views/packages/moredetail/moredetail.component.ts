import { Component, OnInit } from '@angular/core';
import { PackageService } from '../../../services/package.service';
import { packageservice_class } from '../../classes/packageservice_c';
import { ActivatedRoute, Params } from '@angular/router';
import { ServiceService } from '../../../services/service.service';


@Component({
  selector: 'app-moredetail',
  templateUrl: './moredetail.component.html',
  styleUrls: ['./moredetail.component.css']
})
export class MoredetailComponent implements OnInit {

  packageser_arr:packageservice_class[]=[];
x:number;
  constructor(private packageser:PackageService,private actroute:ActivatedRoute,private service_Ser:ServiceService) { }

  ngOnInit() {

    this.actroute.params.subscribe(
      (y:Params)=>{
        this.x=y['id'];


   

    this.packageser.getPackageServiceById(this.x).subscribe(

      (data:packageservice_class[])=>{

         this.packageser_arr=data;

          }
        );





              }
    );



  }
}
