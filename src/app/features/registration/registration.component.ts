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
  errorMessage: any;
  private selectedInput: string;

  constructor(private router: Router, private registerService:RegisterService) { }

  ngOnInit() {
    this.errorHandling();

  }

  signUp() {
    const user  = {
      email: this.registerForm.controls['username'].value,
      password: this.registerForm.controls['password'].value,
      name: this.registerForm.controls['name'].value
    };
    if (this.registerForm.controls.userType.value  === 'vendor') {
      this.registerService.registerVendor(user);
    } else {
      this.registerService.registerBuyer(user);
    }

  }

  errorHandling() {
    this.registerForm.valueChanges.subscribe(
      data => {
        this.errorMessage = null;
        this.detectError();
      },
    );
  }
  onFocus(name: string) {
    this.selectedInput = name;
    this.errorMessage = null;
    this.detectError();
  }

  detectError() {
    if (this.registerForm.controls[this.selectedInput] &&
      !this.registerForm.controls[this.selectedInput].valid) {
      switch (this.selectedInput) {
        case 'password':
          this.errorMessage = 'رمز عبور حداقل ۸ کاراکتر شامل حروف بزرگ و عدد است.';
          break;
        case 'username':
          this.errorMessage = 'لطفا ایمیل صحیح خود را وارد کنید.';
          break;
        case 'name':
          this.errorMessage = 'نام خود را وارد کنید.';
      }
    } else if(this.registerForm.controls.confirmPassword &&
      this.registerForm.controls.confirmPassword !== this.registerForm.controls.password) {
      this.errorMessage = 'تکرار رمز عبور نادرست می باشد';

    }
  }

  onFocusOut() {
    this.selectedInput = null;
    this.errorMessage = null;
  }
}
