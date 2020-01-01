import { Injectable } from '@angular/core';
import {TokenHandlerService} from '../../../api-management/services/http/token-handler.service';
import {HttpService} from '../../../api-management/services/http/http.service';
import {Route, Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(
    private tokenHandlerService: TokenHandlerService,
    private httpService: HttpService, private router: Router) { }

  login(user) {
    this.httpService.post('accounts/token/', user).subscribe(
      data => {
        this.tokenHandlerService.setToken(data['access']);
        this.tokenHandlerService.setRefresh(data['refresh']);
        this.router.navigate(['/vendor-profile']);
      }
    );
  }

  logout() {
    localStorage.removeItem('refresh');
    localStorage.removeItem('token');
  }
}
