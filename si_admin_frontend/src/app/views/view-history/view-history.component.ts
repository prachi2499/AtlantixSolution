import { Component, OnInit } from '@angular/core';
import {ViewHistoryService } from "../../services/view-history.service";
import {MatTableDataSource} from '@angular/material/table';
import {NavigationExtras,Router} from '@angular/router';

let Monthly_data: any = [];

@Component({
  selector: 'app-view-history',
  templateUrl: './view-history.component.html',
  styleUrls: ['./view-history.component.css']
})
export class ViewHistoryComponent implements OnInit {
  displayedColumns: string[] = ['position', 'name', 'count','amount'];
  dataSource = new MatTableDataSource();
  jancnt : number = 0;
  febcnt : number = 0;
  marcnt : number = 0;
  aprcnt : number = 0;
  maycnt : number = 0;
  juncnt : number = 0;
  julcnt : number = 0;
  augcnt : number = 0;
  sepcnt : number = 0;
  octcnt : number = 0;
  novcnt : number = 0;
  deccnt : number = 0;
  i : number;
  details : any[];
  cntArr : any[];
  months : any[];
  records : any[];
  janAmt : number=0;
  febAmt : number=0;
  marAmt : number=0;
  aprAmt : number=0;
  mayAmt : number=0;
  junAmt : number=0;
  julAmt : number=0;
  augAmt : number=0;
  sepAmt : number=0;
  octAmt : number=0;
  novAmt : number=0;
  decAmt : number=0;
  constructor(private history : ViewHistoryService,private route :Router) { }

  ngOnInit() {
    this.history.getAllPackagePurchase()
    .subscribe((res:[]) => {
      this.details = res;
      
      for(this.i = 0 ; this.i < this.details.length ; this.i++){
        let date = new Date(this.details[this.i].pp_date);
        let month = date.getMonth() + 1;
        let amt = this.details[this.i].pp_amount;
        if(month == 1){
          this.jancnt++;
          this.janAmt += amt;
        }
       if(month == 2){
          this.febcnt++;
          this.febAmt += amt;
        }
        if(month == 3){
          this.marcnt++;
          this.marAmt += amt;
        }
       if(month == 4){
          this.aprcnt++;
          this.aprAmt += amt;
        }
        if(month == 5){
          this.maycnt++;
          this.mayAmt += amt;
        }
       if(month == 6){
          this.juncnt++;
          this.junAmt += amt;
        }
        if(month == 7){
          this.julcnt++;
          this.julAmt += amt;
        }
       if(month == 8){
          this.augcnt++;
          this.augAmt += amt;
        }
        if(month == 9){
          this.sepcnt++;
          this.sepAmt += amt;
        }
       if(month == 10){
          this.octcnt++;
          this.octAmt += amt;
        }
        if(month == 11){
          this.novcnt++;
          this.novAmt += amt;
        }
       if(month == 12){
          this.deccnt++;
          this.decAmt += amt;
        }
      }
      
 
      if(this.jancnt >= 0 && this.janAmt >= 0){
        this.janFunc();
      }
      if(this.febcnt >= 0 && this.febAmt >= 0){
        this.febFunc();
      }
      if(this.marcnt >= 0 && this.marAmt >= 0){
        this.marFunc();
      }
      if(this.aprcnt >= 0 && this.aprAmt >= 0){
        this.aprFunc();
      }
      if(this.maycnt >= 0 && this.mayAmt >= 0){
        this.mayFunc();
      }
      if(this.juncnt >= 0 && this.junAmt >= 0){
        this.junFunc();
      }
      if(this.julcnt >= 0 && this.julAmt >= 0){
        this.julFunc();
      }
      if(this.augcnt >= 0 && this.augAmt >= 0){
        this.augFunc();
      }
      if(this.sepcnt >= 0 && this.sepAmt >= 0){
        this.sepFunc();
      }
      if(this.octcnt >= 0 && this.octAmt >= 0){
        this.octFunc();
      }
      if(this.novcnt >= 0 && this.novAmt >= 0){
        this.novFunc();
      }
      if(this.deccnt >= 0 && this.decAmt >= 0){
        this.decFunc();
      }
      
    })
    
  }

  janFunc(){
    if(this.jancnt){
      Monthly_data.push({position:1,name:"January",count:this.jancnt,amount:this.janAmt});
    this.dataSource.data = Monthly_data;
    }
    else{
      Monthly_data.push({position:1,name:"January",count:'-',amount:this.janAmt});
    this.dataSource.data = Monthly_data;
    }
    
  }
  
  febFunc(){
    if(this.febcnt){
      Monthly_data.push({position:2,name:"February",count:this.febcnt,amount:this.febAmt});
    this.dataSource.data = Monthly_data;
    }
    else{
      Monthly_data.push({position:2,name:"February",count:'-',amount:this.febAmt});
    this.dataSource.data = Monthly_data;
    }
    
  }

  marFunc(){
    if(this.marcnt){
      Monthly_data.push({position:3,name:"March",count:this.marcnt,amount:this.marAmt});
    this.dataSource.data = Monthly_data;
    }
    else{
      Monthly_data.push({position:3,name:"March",count:'-',amount:this.marAmt});
    this.dataSource.data = Monthly_data;
    }
      
    
  }
  
  aprFunc(){
    if(this.aprcnt){
      Monthly_data.push({position:4,name:"April",count:this.aprcnt,amount:this.aprAmt});
      this.dataSource.data = Monthly_data;
    }
    else{
      Monthly_data.push({position:4,name:"April",count:'-',amount:this.aprAmt});
    this.dataSource.data = Monthly_data;
    }
    
  }

  mayFunc(){
    if(this.maycnt){
      Monthly_data.push({position:5,name:"May",count:this.maycnt,amount:this.mayAmt});
    this.dataSource.data = Monthly_data;
    }
    else{
      Monthly_data.push({position:5,name:"May",count:'-',amount:this.mayAmt});
    this.dataSource.data = Monthly_data;
    }
    
  }
  
  junFunc(){
    if(this.juncnt){
      Monthly_data.push({position:6,name:"June",count:this.juncnt,amount:this.junAmt});
      this.dataSource.data = Monthly_data;
    }
    else{
      Monthly_data.push({position:6,name:"June",count:'-',amount:this.junAmt});
    this.dataSource.data = Monthly_data;
    }
    
  }

  julFunc(){
    if(this.julcnt){
      
    Monthly_data.push({position:7,name:"July",count:this.julcnt,amount:this.julAmt});
    this.dataSource.data = Monthly_data;
    }
    else{
      
    Monthly_data.push({position:7,name:"July",count:'-',amount:this.julAmt});
    this.dataSource.data = Monthly_data;
    }
  }
  
  augFunc(){
    if(this.augcnt){
      Monthly_data.push({position:8,name:"August",count:this.augcnt,amount:this.augAmt});
      this.dataSource.data = Monthly_data;
    }
    else{
      Monthly_data.push({position:8,name:"August",count:'-',amount:this.augAmt});
    this.dataSource.data = Monthly_data;
    }
    
  }
  sepFunc(){
    if(this.sepcnt){
      Monthly_data.push({position:9,name:"September",count:this.sepcnt,amount:this.sepAmt});
      this.dataSource.data = Monthly_data;
    }
    else{
      Monthly_data.push({position:9,name:"September",count:'-',amount:this.sepAmt});
    this.dataSource.data = Monthly_data;
    }
    
  }
  
  octFunc(){
    if(this.octcnt){
      Monthly_data.push({position:10,name:"October",count:this.octcnt,amount:this.octAmt});
    this.dataSource.data = Monthly_data;
    }
    else{
      Monthly_data.push({position:10,name:"October",count:'-',amount:this.octAmt});
    this.dataSource.data = Monthly_data;
    }
    
  }
  novFunc(){
    if(this.novcnt){
      Monthly_data.push({position:11,name:"November",count:this.novcnt,amount:this.novAmt});
      this.dataSource.data = Monthly_data;
    }
    else{
      Monthly_data.push({position:11,name:"November",count:'-',amount:this.novAmt});
    this.dataSource.data = Monthly_data;
    }
    
  }
  
  decFunc(){
    if(this.deccnt){
      Monthly_data.push({position:12,name:"December",count:this.deccnt,amount:this.decAmt});
      this.dataSource.data = Monthly_data;
      
    Monthly_data.push({position:'',name:"",count:'TOTAL INCOME',amount:this.janAmt+this.febAmt+this.marAmt+this.aprAmt+this.mayAmt+this.junAmt+this.julAmt+this.augAmt+this.sepAmt+this.octAmt+this.novAmt+this.novAmt+this.decAmt});
    this.dataSource.data = Monthly_data;
    }
    else{
      Monthly_data.push({position:12,name:"December",count:'-',amount:this.decAmt});
    this.dataSource.data = Monthly_data;
    
    Monthly_data.push({position:'',name:"",count:'TOTAL INCOME',amount:this.janAmt+this.febAmt+this.marAmt+this.aprAmt+this.mayAmt+this.junAmt+this.julAmt+this.augAmt+this.sepAmt+this.octAmt+this.novAmt+this.novAmt+this.decAmt});
    this.dataSource.data = Monthly_data;
    }
    
  }
}
