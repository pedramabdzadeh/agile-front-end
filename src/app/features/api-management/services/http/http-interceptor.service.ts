import { Injectable } from '@angular/core';
import {HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {catchError, filter, switchMap, take} from 'rxjs/operators';
import {BehaviorSubject, Observable, throwError} from 'rxjs';
import {TokenHandlerService} from './token-handler.service';

@Injectable({
  providedIn: 'root'
})
export class HttpInterceptorService implements HttpInterceptor {
  constructor(private auth: TokenHandlerService) {}

  private isRefreshing = false;
  private refreshTokenSubject: BehaviorSubject<any> = new BehaviorSubject<any>(null);

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = localStorage.getItem('token');
    console.log(token);
    if (token) {
      request = this.addToken(request, token);
    }

    return next.handle(request).
    pipe(catchError(err => this.handleError(err, request, next)));
  }

  private addToken(request: HttpRequest<any>, token: string) {
    console.log(request);
    return request.clone({
      setHeaders: {
        Authorization: 'Bearer ' + token
      }
    });
  }

// && error.error.detail === 'Token is invalid or expired.'
  handleError(error, request, next): Observable<HttpEvent<any>> {
    if (error instanceof HttpErrorResponse && error.status === 401 && localStorage.getItem('token')
    ) {
      return this.handle401Error(request, next);
    } else {
      localStorage.removeItem('token');
      console.log('error');
      return throwError(error);
    }
  }

  private handle401Error(request: HttpRequest<any>, next: HttpHandler) {
    if (!this.isRefreshing) {
      this.isRefreshing = true;
      this.refreshTokenSubject.next(null);
      console.error('Token Expired');
      return this.auth.refreshToken().pipe(
        switchMap((token: any) => {
          this.isRefreshing = false;
          this.refreshTokenSubject.next(token.access);
          return next.handle(this.addToken(request, token.access));
        }));

    } else {
      return this.refreshTokenSubject.pipe(
        filter(token => token != null),
        take(1),
        switchMap(jwt => {
          return next.handle(this.addToken(request, jwt));
        }));
    }
  }
}
