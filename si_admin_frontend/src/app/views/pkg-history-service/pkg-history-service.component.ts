import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ManageUsersService } from "../../services/manage-users.service";
import {MatTableDataSource} from '@angular/material/table';
import { MatPaginator , MatSort } from '@angular/material';


@Component({
  selector: 'app-pkg-history-service',
  templateUrl: './pkg-history-service.component.html',
  styleUrls: ['./pkg-history-service.component.css']
})
export class PkgHistoryServiceComponent implements OnInit {
  sub:any;
  sarr:any[]=[];
  mobile:number;
  pk_id:number;
  pp_id:number;
  arr:any[]=[];
  details:any[]=[];
  constructor(private route : ActivatedRoute,private manageUsers : ManageUsersService) { }
  displayedColumns: string[] = ['sc_name', 's_name' , 'om_status'];
  dataSource = new MatTableDataSource();

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  ngOnInit() {
    this.sub = this.route.queryParams.subscribe((params) => {
      this.mobile = params["m_o_b"];
      this.pk_id = params["p_k_i_d"];
      this.pp_id = params["p_p_i_d"];
      
       if (this.mobile && this.pk_id) {
        this.manageUsers.getPackageServiceById(this.pk_id).subscribe(

          (data:any[])=>{
            this.arr = data;
            this.dataSource.data = this.arr;
         }
        );
       }
    });

    this.manageUsers.getServiceStatus(this.pk_id,this.mobile,this.pp_id).subscribe(
      (data:any[])=>{
       this.details=data;
       
      }
 
    );

    this.manageUsers.getServiceNotInOrderMaintaintbl(this.pk_id,this.mobile,this.pk_id,this.pp_id).subscribe(
      (data:any[])=>{
        
        this.sarr=data;
      }
    );
  
  }

  
}
