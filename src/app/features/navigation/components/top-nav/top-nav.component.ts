import { Component, OnInit } from '@angular/core';
import {TokenHandlerService} from '../../../api-management/services/http/token-handler.service';
import {LoginService} from '../../../authentication/services/login/login.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-top-nav',
  templateUrl: './top-nav.component.html',
  styleUrls: ['./top-nav.component.scss']
})
export class TopNavComponent implements OnInit {

  constructor(public tokenHandlerService: TokenHandlerService, private loginService: LoginService,
              private router: Router) { }

  ngOnInit() {
  }

  logout() {
    this.loginService.logout();
    this.router.navigate(['/home']);
  }
}
