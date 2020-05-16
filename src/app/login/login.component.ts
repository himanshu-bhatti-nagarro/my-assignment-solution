import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"],
})
export class LoginComponent implements OnInit {
  username = "";
  password = "";
  userError = false;
  userErrorMsg = "";
  passwordError = false;
  pswdErrorMsg = "";
  constructor(private router: Router) {}

  ngOnInit() {}

  /**
   * It will be called on click of the Login button
   * It will check for correct credentials(username=himanshu, password=himanshu).
   * If the credentials are correct the dashboard page will be navigated.
   * If the credentials are invalid then appropriate error messeges will be displayed.
   */
  public login() {
    this.username = this.username.trim();
    this.password = this.password.trim();

    if (!this.username || !this.password) {
      return;
    }
    if (this.username !== "himanshu") {
      this.userError = true;
      this.userErrorMsg = "Username is invalid";
      return;
    }
    if (this.password !== "himanshu") {
      this.passwordError = true;
      this.pswdErrorMsg = "Password is invalid";
      return;
    }

    this.userError = false;
    this.passwordError = false;
    this.router.navigate(["/dashboard"]);
  }

  /**
   *
   * @param type the type of the input from where the function is called.
   * @param val the value of the input.
   *
   * It will check whether a required field is filled or not.
   * If the field is empty , the required error messgae is displayed.
   */
  public onBlurCalled(type: string, val: string) {
    val = val.trim();
    if (!val) {
      if (type === "username") {
        this.userError = true;
        this.userErrorMsg = "Username is mandatoy";
        return;
      } else {
        this.passwordError = true;
        this.pswdErrorMsg = "password is mandatory";
        return;
      }
    } else {
      this.userError = false;
      this.passwordError = false;
    }
  }
}
