import { Component, OnInit } from '@angular/core';
import { ManageEmpService} from '../../services/manage-emp.service';
import {Router} from'@angular/router';
@Component({
  selector: 'app-add-emp',
  templateUrl: './add-emp.component.html',
  styleUrls: ['./add-emp.component.css']
})
export class AddEmpComponent implements OnInit {
files : any[];
err:any;
empDetails : any[];
selectedFile : File = null;

  constructor(private manageEmp : ManageEmpService , private route : Router) { }

  ngOnInit() {
  }


  addDetails(data){
    this.manageEmp.getEmpDetailsById(data.empcontactno)
    .subscribe((res:[]) => {
      this.empDetails = res;
      if(this.empDetails.length == 1){
        this.err = "This Number is already registered!!";
      }
      else{
        const fd = new FormData();
      fd.append('e_mobile',data.empcontactno+"");
      fd.append('aadharcard_no',data.empaadhaarno+"");
      fd.append('e_name',data.empname);
      fd.append('e_image',this.selectedFile);
      fd.append('e_address',data.empaddress);
      fd.append('e_pincode',data.emppincode+"");
      fd.append('e_workingstatus',0 + "");
      fd.append('e_status',0 + "");
    
    this.manageEmp.addDetails(fd)
    .subscribe((res:any) => {
        this.err = "The details of employee is added successfully!!";
    });
      }
    })
    
  }
  
  onChange(value){
    this.selectedFile = <File>value.target.files[0];
  }

  goBack(){
    this.route.navigate(['/dashboard/manageEmployees']);
  }
}
