import { Component, OnInit, ViewChild } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {FeedbackService} from "../../services/feedback.service";
import { feedbackservice_class } from '../../classes/feedbackservice_c';
import { MatPaginator , MatSort } from '@angular/material';
@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent implements OnInit {
  displayedColumns: string[] = ['p_name', 'f_comment', 'f_experience'];
  dataSource = new MatTableDataSource();
  result : any[] = [];
  err:string ="";

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;


  constructor(private feedback : FeedbackService) { }

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;    
    this.feedback.getData()
    .subscribe((res : any) => {
      this.result = res;
      if(this.result.length > 0){
        this.dataSource.data = this.result;  
      }
      
      else{
        this.err = "No Records Found!!";
      }
    })
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

}
