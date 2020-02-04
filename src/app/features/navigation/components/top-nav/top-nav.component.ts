import { Component, OnInit } from '@angular/core';
import {TokenHandlerService} from '../../../api-management/services/http/token-handler.service';
import {LoginService} from '../../../authentication/services/login/login.service';
import {Router} from '@angular/router';
import {MatIconRegistry} from '@angular/material';
import {DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'app-top-nav',
  templateUrl: './top-nav.component.html',
  styleUrls: ['./top-nav.component.scss']
})
export class TopNavComponent implements OnInit {
  itemsNumber: any = 5;

  constructor(public tokenHandlerService: TokenHandlerService, private loginService: LoginService,
              private router: Router, matIconRegistry: MatIconRegistry, domSanitizer: DomSanitizer) {
    matIconRegistry.addSvgIcon('cart',
      domSanitizer.bypassSecurityTrustResourceUrl('../../../../../assets/images/smart-cart.svg'));
  }

  ngOnInit() {
  }

  logout() {
    this.loginService.logout();
    this.router.navigate(['/home']);
  }
}
