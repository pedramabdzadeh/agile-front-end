import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HttpInterceptorService} from './services/http/http-interceptor.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http/http';
import {HttpService} from './services/http/http.service';
import {TokenHandlerService} from './services/http/token-handler.service';
import {ProductService} from './services/products/product.service';
import {CategoryService} from './services/categories/category.service';
import {MatSnackBar, MatSnackBarModule} from '@angular/material';
import {AccountsService} from './services/accounts/accounts.service';
import {PurchaseService} from './services/purchase/purchase.service';
import {UserManagementService} from './services/user-management/user-management.service';




@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatSnackBarModule,
  ],
  providers: [
    HttpService,
    HttpInterceptorService,
    TokenHandlerService,
    ProductService,
    CategoryService,
    AccountsService,
    PurchaseService,
    UserManagementService,

  ]
})
export class ApiManagementModule { }
