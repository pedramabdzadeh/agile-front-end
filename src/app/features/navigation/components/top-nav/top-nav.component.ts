import { Component, OnInit } from '@angular/core';
import {TokenHandlerService} from '../../../api-management/services/http/token-handler.service';
import {LoginService} from '../../../authentication/services/login/login.service';
import {Router} from '@angular/router';
import {MatIconRegistry} from '@angular/material';
import {DomSanitizer} from '@angular/platform-browser';
import {Product} from '../../../products/models/product';
import {ProductService} from '../../../api-management/services/products/product.service';

@Component({
  selector: 'app-top-nav',
  templateUrl: './top-nav.component.html',
  styleUrls: ['./top-nav.component.scss']
})
export class TopNavComponent implements OnInit {

  constructor(public tokenHandlerService: TokenHandlerService, private loginService: LoginService, private productService: ProductService,
              private router: Router, matIconRegistry: MatIconRegistry, domSanitizer: DomSanitizer) {
    matIconRegistry.addSvgIcon('cart',
      domSanitizer.bypassSecurityTrustResourceUrl('../../../../../assets/images/smart-cart.svg'));
  }
  itemsNumber: any = 0;
  cartClick = false;
  cartClass: any;
  cartItems: Product[] = [
    {category: 1, image: '1', price: 1  , title: '1'},
    {category: 1, image: '1', price: 1  , title: '1'},
    {category: 1, image: '1', price: 1  , title: '1'},
    {category: 1, image: '1', price: 1  , title: '1'},
    {category: 1, image: '1', price: 1  , title: '1'},
  ];

  public getCartItems() {
    this.productService.getCart().subscribe( result => {
      this.productService.id = result[0].id;
      this.itemsNumber = result[0].products.length;
      this.cartItems = result[0].products;
    });
  }

  ngOnInit() {
    this.getCartItems();
    this.productService.change$.subscribe(result => {
      if (result) {
        this.getCartItems();
      }
    });
  }

  logout() {
    this.loginService.logout();
    this.router.navigate(['/home']);
  }

  onCartClick() {
    this.cartClick = !this.cartClick;
    if (this.cartClass) {
      this.cartClass = undefined;
    } else {
      this.cartClass = ['focus-cart'];
    }
  }
}
