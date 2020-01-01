import { Injectable } from '@angular/core';
import {HttpService} from '../../api-management/services/http/http.service';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private httpService: HttpService, private router: Router) { }

  register(user: {email, password, name}) {
    this.httpService.post('accounts/vendor-registration/', user).subscribe(
      data => this.router.navigate(['/auth/login'])
    );
  }
}
