import { Component, OnInit } from "@angular/core";
import { LoginService } from "../../services/login.service";
import { Router } from "@angular/router";
@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"],
})
export class LoginComponent implements OnInit {
  hide = true;
  result: any;
  err: any;
  constructor(private login: LoginService, private route: Router) {}

  ngOnInit() {}

  onSubmit(data) {
    const data1 = {
      p_mobile: data.usermobileno,
      p_password: data.password,
    };
    this.login.getData(data1).subscribe((res) => {
      this.result = res;

      if (this.result.length === 1) {
        localStorage.setItem("userMobile", this.result[0].p_mobile);
        localStorage.setItem("userPassword", this.result[0].p_password);
        this.route.navigate(["/dashboard"]);
      } else {
        this.err = "Enter Mobile Number or Password is invalid";
      }
    });
  }
}
