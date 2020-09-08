import { PackagepurchaseService } from './../../services/packagepurchase.service';
import { Component, OnInit } from '@angular/core';
import { PackageService } from '../../services/package.service';
import { package_class } from '../classes/package_c';
import { Router } from '@angular/router';
import { packagepurchase_class } from '../classes/packagepurchase_c'
import { Time, formatDate } from '@angular/common';
@Component({
  selector: 'app-packages',
  templateUrl: './packages.component.html',
  styleUrls: ['./packages.component.css']
})
export class PackagesComponent implements OnInit {
package_arr:package_class[]=[];
currdate=new Date();
flag:boolean=false;
i=0;
isLoggedIn:any;
p_mobile:string=localStorage.getItem('p_mobile');
date1 = formatDate(new Date(),'yyyy-MM-dd','en_US');
  date2;
date3;
  constructor(private package_ser:PackageService,private route:Router,private _pkpurchaseServ:PackagepurchaseService) { }

  ngOnInit() {
    this.isLoggedIn = localStorage.getItem('is_loggedIn');

    this.package_ser.getAllPackage().subscribe(
      (data:package_class[])=>{
        this.package_arr=data;
        if(localStorage.getItem('is_loggedIn')=='true')
    {
      this._pkpurchaseServ.getPackagePurchaseByMobile(this.p_mobile).subscribe(
        (data1:packagepurchase_class[])=>{

             for(this.i=0;this.i<data1.length;this.i++)
             {
              this.date2 = formatDate(data1[this.i].pp_date,'yyyy-MM-dd','en_US');

              this.date3= formatDate(data1[this.i].pp_endDate,'yyyy-MM-dd','en_US');

               if(this.date1>=this.date2 && this.date1<=this.date3)
               {

                  this.flag=true;
                  break;
               }

             }

        }

      );


    }
      }
    );
  }
  onmore(item)
  {

      this.route.navigate(['header/moredetail',item.pk_id]);

  }
  onclickselectpackage(pk_id)
  {

  }


}
