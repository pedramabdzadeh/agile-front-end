import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HttpInterceptorService} from './services/http/http-interceptor.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http/http';




@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
  ]
})
export class ApiManagementModule { }
