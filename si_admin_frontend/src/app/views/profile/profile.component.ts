import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../../services/profile.service';
import { ResourceLoader } from '@angular/compiler';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  mobile:any;
  adminMobile:any;
  adminPassword:any;
  adminName:any;
  adminAddress:any;
  adminPincode:any;
  err:any;
  


  constructor(private profile : ProfileService) { }

  ngOnInit() {
    this.mobile = localStorage.getItem('userMobile');
    this.profile.getData(this.mobile)
    .subscribe((result) => {
      this.adminMobile=result[0].p_mobile;
      this.adminPassword=result[0].p_password;
      this.adminName=result[0].p_name;
      this.adminAddress=result[0].p_address;
      this.adminPincode=result[0].p_pincode;
    })
  }

  editDetails(data){
    const details = {
      p_mobile:this.mobile,
      p_address:data.address,
      p_name:data.adminname,
      p_password:data.password,
      p_pincode:data.pincode
    }

    this.profile.editDetails(details)
    .subscribe((result) => {
      this.err = "Your details are updated successfully!!";
    })
  }
}
