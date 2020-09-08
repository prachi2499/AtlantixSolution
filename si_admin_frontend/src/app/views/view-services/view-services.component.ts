import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'; 
import { ViewHistoryService } from '../../services/view-history.service';

@Component({
  selector: 'app-view-services',
  templateUrl: './view-services.component.html',
  styleUrls: ['./view-services.component.css']
})
export class ViewServicesComponent implements OnInit {
  sub : any;
  monthno : number;
  details : any[];
  i : number;
  packages : any[] = [];
  result : any[] = [];
  totalamt : number = 0;
  year : number = 0;
  constructor(private route : ActivatedRoute,private history : ViewHistoryService) { }

  ngOnInit() {
    this.sub = this.route.queryParams.subscribe((params) => {
      this.monthno = params["m_n_t_n_o"];
      this.year = params["Y"];

      if (this.monthno) {
        this.history.getAllPackagePurchase()
        .subscribe((res:[]) => {
          this.details = res;
          for(this.i = 0 ; this.i < this.details.length ; this.i++){
            let date = new Date(this.details[this.i].pp_date);
            let month = date.getMonth() + 1;
            let year = date.getFullYear();

            if(month == this.monthno && year == this.year){
              this.history.getAllPackagePurchaseCount(this.details[this.i].pk_name,month)
              .subscribe((res:any) => {
                   for(this.i = 0 ; this.i < res.length ; this.i++){
                       const data = {name : res[this.i].pk_name ,count: res[this.i].pp_count,amount : res[this.i].pp_amount};
                       this.totalamt += (res[this.i].pp_count*res[this.i].pp_amount);
                        this.packages.push(data);
                         
                     

                    
                   }
                  
              })
              
            }
          }
          
          this.finalDetails(this.packages);
      })
      }
    });
  }

  finalDetails(data){
    console.log(data);
    for(this.i = 0; this.i < data.length ; this.i++){
      if(this.result.indexOf(data[this.i]) < 0) {
        this.result.push(data[this.i]);
      }
    }
    console.log(this.result);
  }
}
