import { Component, OnInit } from '@angular/core';
import { PackageService } from '../../services/package.service';
import { packagepurchase_class } from '../classes/packagepurchase_c';
import { person_class } from '../classes/person_c';
import { PersonService } from '../../services/person.service';
import { ServiceService } from '../../services/service.service';
import { service } from '../classes/service_c';
import { package_class } from '../classes/package_c';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
arr:packagepurchase_class[]=[];
parr:person_class[]=[];
sarr:service[]=[];
packarr:package_class[]=[];
pk_name:string;
count:number;
cnt:number;
  constructor(private pack_ser:PackageService,private toppackageser:PackageService,private person_ser:PersonService,private service_Ser:ServiceService) { }

  ngOnInit() {
    this.toppackageser.topSellingPackagewithCount().subscribe(
    (data:any)=>{
      this.arr=data;
    }
    );

    this.person_ser.cntOfUnblockUsers().subscribe(
      (data:any)=>{
        this.parr=data;
      }
    );

    this.service_Ser.getServiceCount().subscribe(
      (data:any)=>{
        this.sarr=data;
      }
    );

    this.pack_ser.getPackageCount().subscribe(
      (data:any)=>{
        this.packarr=data;
      }
    );

  }

}
