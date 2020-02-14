import { Injectable } from '@angular/core';
import {CanLoad, Route, UrlSegment, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router} from '@angular/router';
import { Observable } from 'rxjs';
import {LoginService} from '../features/authentication/services/login/login.service';
import {MatSnackBar} from '@angular/material';

@Injectable({
  providedIn: 'root'
})
export class VendorGuard implements CanLoad {
  constructor(
    private authService: LoginService,
    private router: Router,
    private matSnackBar: MatSnackBar,
    ) {
  }
  canLoad(
    route: Route,
    segments: UrlSegment[]): Observable<boolean> | Promise<boolean> | boolean {
    if (!this.authService.isLoggedIn() || this.authService.getUser().type !== 'vendor') {
      this.router.navigate(['/home']);
      this.matSnackBar.open('برای دسترسی به عنوان فروشنده ورود کنید.', 'خروج',
        {duration: 2000});
      return false;
    }
    return true;
  }
}
