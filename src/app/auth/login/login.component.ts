import { Component, OnInit, ViewChild, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router, ActivatedRoute } from '@angular/router';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  @ViewChild('loginForm', { static: false }) loginForm: NgForm;
  constructor(private authService: AuthService, private router: Router, private aciveRoute: ActivatedRoute) { }
  msg: string;
  submitted = false;
  isLoginPage = false;
  @Output() close = new EventEmitter();
  ngOnInit() {
    this.isLoginPage = this.aciveRoute.snapshot.url[0] ? true : false;
  }
  onLogin() {
    const { email, password } = this.loginForm.form.value;
    this.authService.login(email, password);
    if (this.authService.isAuth()) {
      // this.router.navigate(['']);
      console.log('ok');
      this.close.emit();
    } else {
      this.submitted = true;
      this.msg = "Error Wrong Password or Email Please Try Again Or Create an mew Account";
    };
    // this.loginForm.form.reset();
  }
}
