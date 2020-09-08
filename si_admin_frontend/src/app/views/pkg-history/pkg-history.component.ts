import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute,Router,NavigationExtras } from '@angular/router';
import { ManageUsersService } from "../../services/manage-users.service";
import { Route } from '@angular/compiler/src/core';
import {MatTableDataSource} from '@angular/material/table';
import { MatPaginator , MatSort } from '@angular/material';

@Component({
  selector: 'app-pkg-history',
  templateUrl: './pkg-history.component.html',
  styleUrls: ['./pkg-history.component.css']
})
export class PkgHistoryComponent implements OnInit {
sub : any;
mobile : number;
arr:any[] = [];
date1:any;
date2:any;
i:number = 0;
details:any[]=[];
err:string="";
  constructor(private manageUsers: ManageUsersService,private route : ActivatedRoute,private router : Router) { }
  displayedColumns: string[] = ['pk_name', 'pp_date', 'pp_endDate','status','action'];
  dataSource = new MatTableDataSource();
  result : any[] = [];

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  ngOnInit() {
    this.sub = this.route.queryParams.subscribe((params) => {
      this.mobile = params["m_o_b"];

      if (this.mobile) {
        this.manageUsers.getPackageHistory(this.mobile)
        .subscribe((res:any) => {

          this.arr=res;
          if(this.arr.length > 0){
            let currDate = new Date();
          for(this.i=0;this.i<this.arr.length;this.i++)
          {
            this.date1 = new Date(this.arr[this.i].pp_date);

            this.date2= new Date(this.arr[this.i].pp_endDate);
             if(currDate>=this.date1 && currDate<=this.date2)
             {
              let startdate = new Date(this.arr[this.i].pp_date);
              let enddate = new Date(this.arr[this.i].pp_endDate);
              let d = startdate.getDate() + "-" + (startdate.getMonth() + 1) + "-" + startdate.getFullYear();
              let d1 = enddate.getDate() + "-" + (enddate.getMonth() + 1 )+ "-" + enddate.getFullYear();

              const data1={pp_id:this.arr[this.i].pp_id,pk_id:this.arr[this.i].pk_id,pk_name:this.arr[this.i].pk_name,pp_date:d,pp_endDate:d1,status:"Ongoing"};
              this.details.push(data1);
              this.dataSource.data = this.details;
            }
             else
             {
              let startdate = new Date(this.arr[this.i].pp_date);
              let enddate = new Date(this.arr[this.i].pp_endDate);
              let d = startdate.getDate() + "-" + (startdate.getMonth() + 1) + "-" + startdate.getFullYear();
              let d1 = enddate.getDate() + "-" + (enddate.getMonth() + 1) + "-" + enddate.getFullYear();

              const data1={pp_id:this.arr[this.i].pp_id,pk_id:this.arr[this.i].pk_id,pk_name:this.arr[this.i].pk_name,pp_date:d,pp_endDate:d1,status:"Expired"};
              this.details.push(data1);
              this.dataSource.data = this.details;
            }
          }
          }
          else{
            this.err="No Records Found!!";
          }

        })
      }
    });
  }
  goTo(data){
    let navigationExtras: NavigationExtras = {
      queryParams: {
        m_o_b: this.mobile,
        p_k_i_d:data.pk_id,
        p_p_i_d:data.pp_id
      },
    };
    this.router.navigate(['/dashboard/manageUsers/viewPkgHistory/viewPkgHistoryService'],navigationExtras);
  }
}
