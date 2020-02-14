import { Injectable } from '@angular/core';
import {HttpService} from './http.service';
import {tap} from 'rxjs/operators';
import {Observable} from 'rxjs';

@Injectable()
export class TokenHandlerService {

  constructor(private httpService: HttpService) { }

  setToken(token): void {
    localStorage.setItem('token', token);
  }

  getToken(): string {
    return localStorage.getItem('token');
  }

  refreshToken(): Observable<any> {
    return this.httpService.post('accounts/token/refresh/', {
      refresh: this.getRefresh()
    }).pipe(tap(
      (data: {access: string, refresh: string}) => {
        this.setToken(data.access);
      }
    ));
  }

  setRefresh(refreshToken: any) {
    localStorage.setItem('refresh', refreshToken);
  }
  getRefresh(): string {
    return localStorage.getItem('refresh');
  }
}
