import { Injectable } from '@angular/core';
import {TokenHandlerService} from '../../../api-management/services/http/token-handler.service';
import {HttpService} from '../../../api-management/services/http/http.service';
import {Route, Router} from '@angular/router';
import {MatSnackBar} from '@angular/material';
import {HttpErrorResponse} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(
    private tokenHandlerService: TokenHandlerService,
    private matSnackBar: MatSnackBar,
    private httpService: HttpService, private router: Router) { }

  login(user) {
    this.httpService.post('accounts/token/', user).subscribe(
      data => {
        this.tokenHandlerService.setToken(data['access']);
        this.tokenHandlerService.setRefresh(data['refresh']);
        this.router.navigate(['/vendor-profile']);
        this.matSnackBar.open('خوش آمدید.', 'X');
      },
      (error: HttpErrorResponse) => {
        if (error.status === 401) {
          this.matSnackBar.open('اطلاعات ورودی صحیح نمی باشد. ', 'X');
        } else {
          this.matSnackBar.open('خطا در ارتباط با سرور ', 'X');
        }
      }
    );
  }

  isLoggedIn() {
    return this.tokenHandlerService.getToken();
  }

  logout() {
    localStorage.removeItem('refresh');
    localStorage.removeItem('token');
  }
}
