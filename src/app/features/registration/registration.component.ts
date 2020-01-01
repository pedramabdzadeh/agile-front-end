import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {RegisterService} from '../authentication/services/register.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {
  password;
  confirmPassword;
  registerForm = new FormGroup({
    username: new FormControl('', [Validators.email, Validators.required]),
    name: new FormControl('', Validators.required),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(8),
    ]),
    confirmPassword: new FormControl(''),
    userType: new FormControl('', Validators.required)
  });

  constructor(private router: Router, private registerService:RegisterService) { }

  ngOnInit() {
  }

  signUp() {
    // this.router.navigate(['/vendor-profile']);
    const user  = {
      email: this.registerForm.controls['username'].value,
      password: this.registerForm.controls['password'].value,
      name: this.registerForm.controls['name'].value
    };
    this.registerService.register(user);
  }
}
