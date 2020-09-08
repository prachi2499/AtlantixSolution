import { Component, OnInit } from "@angular/core";
import { ProfileService } from "../../services/profile.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.css"],
})
export class HeaderComponent implements OnInit {
  adminName: string = "";

  constructor(private profile: ProfileService,private router: Router) {}

  signOut()
  {
    localStorage.removeItem('userMobile');
    localStorage.removeItem('userPassword');
    this.router.navigate([""]);
  }

  ngOnInit() {
    this.profile
      .getData(localStorage.getItem("userMobile"))
      .subscribe((data) => {
        this.adminName = data[0].p_name;
      });
  }
}
