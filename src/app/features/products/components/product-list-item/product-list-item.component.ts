import {AfterViewInit, ChangeDetectorRef, Component, Input, OnInit} from '@angular/core';
import {Product} from '../../models/product';
import {ProductService} from '../../../api-management/services/products/product.service';
import {LoginService} from '../../../authentication/services/login/login.service';
import {ActivatedRoute, Route, Router} from '@angular/router';
import {log} from 'util';

@Component({
  selector: 'app-product-list-item',
  templateUrl: './product-list-item.component.html',
  styleUrls: ['./product-list-item.component.scss']
})
export class ProductListItemComponent implements OnInit, AfterViewInit {
  @Input() product: Product;
  numberOfItems: number;
  image: string;
  constructor(
    private productService: ProductService,
    private loginService: LoginService,
    private changeDetectorRef: ChangeDetectorRef,
    private activatedRoute: Router) { }

  ngOnInit() {
  }

  ngAfterViewInit(): void {
    if (this.product.image) {
      this.image =
      this.product.image.replace('http://194.5.192.129:8000/media/resources/images/products/', '')
      + '/';
      this.changeDetectorRef.detectChanges();
    }
  }

  addToCart() {
    this.productService.addToCart(this.product.id).subscribe( result => {
      this.productService.cartChange$.next(true);
    });
  }

  canDelete(): boolean {
    if (this.activatedRoute.url.includes('vendor-profile')) {
      return this.loginService.getUser().type === 'vendor';
    }
  }

  deleteItem() {
    this.productService.deleteVendorItem(this.product.id).subscribe(() =>  {
      this.productService.productsChange$.next(true);
    });
  }

  getUser(): {username, type, name} {
    return this.loginService.getUser();
  }

  isLoggedIn(): boolean {
    return !!this.loginService.isLoggedIn();
  }

  makeExpress() {
    this.productService.makeExpress(this.product).subscribe(() => {
      window.location.reload();
    });
  }

  showExpress() {
    return !this.activatedRoute.url.includes('home');
  }
}
