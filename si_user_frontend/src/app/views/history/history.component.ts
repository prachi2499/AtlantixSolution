import { Component, OnInit } from "@angular/core";
import { PersonService } from "../../services/person.service";
import { packagepurchase_class } from "../classes/packagepurchase_c";
import { Router } from "@angular/router";
import { formatDate } from "@angular/common";

@Component({
  selector: "app-history",
  templateUrl: "./history.component.html",
  styleUrls: ["./history.component.css"],
})
export class HistoryComponent implements OnInit {

  arr:any[]=[];
  p_mobile:string;
  msg:string;
  flag:boolean=true;
  status:string="ongoing";
  status1:string="";
  i:number;
  todaydate=formatDate(new Date(),'dd-MM-yyyy','en_US');
  date1;
  date2;
  temp:string="expired";
  temp1:string="";
  parr:any[]=[];
  d:any;
  d1:any;
  pp_id:number;


  constructor(private history_Ser: PersonService, private route: Router) {}

  ngOnInit() {
    this.p_mobile=localStorage.getItem("p_mobile");
    this.history_Ser.packagePurchaseHistoryById(this.p_mobile).subscribe(

      (data:any)=>
      {
        if(data.length==0)
        {
          this.flag=false;
         this.msg="No records found !";
        }
        else{
          this.arr=data;
          console.log(this.arr);


          let currDate = new Date();

          for(this.i=0;this.i<data.length;this.i++)
          {

            this.date1 = new Date(data[this.i].pp_date);


            this.date2= new Date(data[this.i].pp_endDate);



             if(currDate>=this.date1 && currDate<=this.date2)
             {

              const data1={pk_id:this.arr[this.i].pk_id,pk_name:this.arr[this.i].pk_name,pp_date:this.arr[this.i].pp_date,pp_endDate:this.arr[this.i].pp_endDate,flag1:"ongoing"};
              this.parr.push(data1);
              this.pp_id=data[this.i].pp_id;
              console.log(this.pp_id);
              localStorage.setItem('pp_id',this.pp_id.toString());
            }
             else
             {
              const data1={pk_id:this.arr[this.i].pk_id,pk_name:this.arr[this.i].pk_name,pp_date:this.arr[this.i].pp_date,pp_endDate:this.arr[this.i].pp_endDate,flag1:"expired"};
              this.parr.push(data1);
            }


          }



          this.arr = data;
        }
      });
  }
}
