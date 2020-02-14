import {Component, OnInit} from '@angular/core';
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

  constructor(private loginService: LoginService, private productService: ProductService,
              private router: Router, matIconRegistry: MatIconRegistry, domSanitizer: DomSanitizer) {
    matIconRegistry.addSvgIcon('cart',
      domSanitizer.bypassSecurityTrustResourceUrl('../../../../../assets/images/smart-cart.svg'));
    matIconRegistry.addSvgIcon('bin',
      domSanitizer.bypassSecurityTrustResourceUrl('../../../../../assets/images/bin.svg'));
  }

  itemsNumber: any = 0;
  cartClick = false;
  cartClass: any;
  cartItems: Product[];

  public getCartItems(): void {
    if (this.loginService.isLoggedIn() && this.loginService.getUser().type === 'buyer') {
      this.productService.getCart().subscribe(result => {
        this.productService.id = result[0].id;
        this.itemsNumber = result[0].products.length;
        this.cartItems = result[0].products;
      });
    }

  }

  ngOnInit(): void {
    this.getCartItems();
    this.productService.cartChange$.subscribe(result => {
      if (result) {
        this.getCartItems();
      }
    });
  }

  logout(): void {
    this.loginService.logout();
    this.router.navigate(['/home']);
  }

  onCartClick(): void {
    this.cartClick = !this.cartClick;
    if (this.cartClass) {
      this.cartClass = undefined;
    } else {
      this.cartClass = ['focus-cart'];
    }
  }

  deleteItem(id: number): void {
    this.productService.deleteFromCart(id).subscribe(() => {
      this.getCartItems();
    });
  }

  canShowCart(): boolean {
    if (this.loginService.isLoggedIn()) {
      if (this.loginService.getUser().type === 'buyer') {
        return true;
      }
    }
    return false;
  }

  goToPanel() {
    if (this.loginService.getUser().type === 'buyer') {
      this.router.navigate(['/buyer-profile']).then();
    } else if (this.loginService.getUser().type === 'vendor') {
      this.router.navigate(['/vendor-profile']).then();
    } else {

    }
  }

  isLoggedIn() {
    return this.loginService.isLoggedIn();
  }
}
