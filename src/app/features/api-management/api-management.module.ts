import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HttpInterceptorService} from './services/http/http-interceptor.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http/http';
import {HttpService} from './services/http/http.service';
import {TokenHandlerService} from './services/http/token-handler.service';
import {ProductService} from './services/products/product.service';
import {CategoryService} from './services/categories/category.service';




@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    HttpService,
    HttpInterceptorService,
    TokenHandlerService,
    ProductService,
    CategoryService

  ]
})
export class ApiManagementModule { }
