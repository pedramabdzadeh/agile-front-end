import { Injectable } from '@angular/core';
import {HttpService} from '../../api-management/services/http/http.service';
import {Router} from '@angular/router';
import {MatSnackBar} from '@angular/material';
import {HttpErrorResponse} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(
    private httpService: HttpService,
    private router: Router,
    private matSnackBar: MatSnackBar,
    ) { }

  register(user: {email, password, name}) {
    this.httpService.post('accounts/vendor-registration/', user).subscribe(
      data => {
        this.router.navigate(['/auth/login']).then(r =>
          this.matSnackBar.open('ثبت نام با موفقیت انجام شد.', 'X'));
      },
      (error: HttpErrorResponse) =>  {
        this.matSnackBar.open('مشکلی پیش آمده لطفا دوباره تلاش کنید.', 'X');
      }
    );
  }
}
