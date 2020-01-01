import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {LoginService} from '../../../authentication/services/login/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm = new FormGroup({
    username: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required)
  });
  constructor(private loginService: LoginService) { }

  ngOnInit() {
  }

  login() {
    this.loginService.login({
      username: this.loginForm.controls['username'].value,
      password: this.loginForm.controls['password'].value,
    });
  }
}
