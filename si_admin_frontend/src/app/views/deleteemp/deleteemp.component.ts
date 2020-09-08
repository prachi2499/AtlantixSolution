import { Component, OnInit } from '@angular/core';
import { ActivatedRoute , Router} from '@angular/router';
import {ManageEmpService } from '../../services/manage-emp.service';

@Component({
  selector: 'app-deleteemp',
  templateUrl: './deleteemp.component.html',
  styleUrls: ['./deleteemp.component.css']
})
export class DeleteempComponent implements OnInit {
  sub : any;
  mobile : any;
  result : any;
  constructor(private route : ActivatedRoute,private manageEmp : ManageEmpService,private router : Router) { }

  ngOnInit() {
    this.sub = this.route.queryParams.subscribe(params => {
      this.mobile = params["mobile"];
     if (this.mobile) {
       this.manageEmp.deleteEmp(this.mobile)
       .subscribe((res) => {

       });
        alert("This employee is deleted successfully!!");
       this.router.navigate(['/dashboard/manageEmployees']);
       
       
      }
   });


  }

}
