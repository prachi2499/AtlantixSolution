import { Component, OnInit, ViewChild } from "@angular/core";
import { ManageEmpService } from "../../services/manage-emp.service";
import { NavigationExtras, Router } from "@angular/router";
import { MatTableDataSource } from "@angular/material/table";
import { MatPaginator, MatSort } from "@angular/material";
import { IfStmt } from '@angular/compiler';

@Component({
  selector: "app-manage-emp",
  templateUrl: "./manage-emp.component.html",
  styleUrls: ["./manage-emp.component.css"],
})
export class ManageEmpComponent implements OnInit {
  displayedColumns: string[] = [
    "e_name",
    "e_mobile",
    "e_workingstatus",
    "action",
  ];
  dataSource = new MatTableDataSource();
  emplist: any = [];
  mobile:number;
  err:string="";
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  constructor(private manageEmp: ManageEmpService, private route: Router) {}

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;

    this.manageEmp.getEmpList().subscribe(
      (data: any) => {
        this.emplist = data;
        if(this.emplist.length > 0){
          this.dataSource.data = this.emplist;
        }
        else{
          this.err = "No Records Found!!";
        }
        
      },
      (error) => {
        console.log(error);
      }
    );
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  goTo(data) {
    let navigationExtras: NavigationExtras = {
      queryParams: {
        mobile: data.e_mobile,
      },
    };
    this.route.navigate(
      ["/dashboard/manageEmployees/updateEmployees"],
      navigationExtras
    );
  }

  getDetails(data){
    this.mobile=data.e_mobile;
  }

  deleteEmp() {
    this.manageEmp.deleteEmp(this.mobile)
       .subscribe((res) => {
        
       });
       this.route.routeReuseStrategy.shouldReuseRoute = function () {
        return false;
      };
      this.route.onSameUrlNavigation = "reload";
      this.route.navigate(["/dashboard/manageEmployees"]);
      location.reload();
    
  }

  addEmp() {
    this.route.navigate(["/dashboard/manageEmployees/addEmployees"]);
  }
}
