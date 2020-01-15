import { Injectable } from '@angular/core';
import {HttpService} from './http.service';
import {tap} from 'rxjs/operators';

@Injectable()
export class TokenHandlerService {

  constructor(private httpService: HttpService) { }

  setToken(token) {
    localStorage.setItem('token', token);
  }

  getToken() {
    return localStorage.getItem('token');
  }

  refreshToken() {
    return this.httpService.post('/accounts/token/refresh/', {
      refresh: JSON.stringify(this.getRefresh())
    }).pipe(tap(
      (data) => {
        this.setToken(data['access']);
      }
    ));
  }

  setRefresh(refreshToken: any) {
    localStorage.setItem('refresh', refreshToken);
  }
  getRefresh() {
    // console.log(localStorage.getItem('refresh'));
    return localStorage.getItem('refresh');
  }
}
