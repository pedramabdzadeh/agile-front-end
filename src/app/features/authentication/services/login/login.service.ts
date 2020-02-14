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
  user: {name: string, type: string, username: string};
  constructor(
    private tokenHandlerService: TokenHandlerService,
    private matSnackBar: MatSnackBar,
    private httpService: HttpService, private router: Router) { }

  login(user) {
    this.httpService.post('accounts/token/', user).subscribe(
      (data: {access: string, refresh: string}) => {
        this.tokenHandlerService.setToken(data.access);
        this.tokenHandlerService.setRefresh(data.refresh);
        this.httpService.get('accounts/get-type/').subscribe((result:{name: string, type: string, username: string}) => {
          this.user = result;
          localStorage.setItem('user', JSON.stringify(this.user));
          if (this.user.type === 'vendor') {
            this.router.navigate(['/vendor-profile']).then();
          } else if (this.user.type === 'buyer') {
            this.router.navigate(['/home']).then();
          }
        });

        this.matSnackBar.open('خوش آمدید.', 'X', {
          duration: 3000
        });
      },
      (error: HttpErrorResponse) => {
        if (error.status === 401) {
          this.matSnackBar.open('اطلاعات ورودی صحیح نمی باشد. ', 'X', {
            duration: 3000
          });
        } else {
          this.matSnackBar.open('خطا در ارتباط با سرور ', 'X', {
            duration: 3000
          });
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

  getUser(): {username: string, type: string, name: string} {
    return JSON.parse(localStorage.getItem('user'));
  }
}
