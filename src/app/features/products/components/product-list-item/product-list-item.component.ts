import {Component, Input, OnInit} from '@angular/core';
import {Product} from '../../models/product';
import {ProductService} from '../../../api-management/services/products/product.service';
import {LoginService} from '../../../authentication/services/login/login.service';
import {ActivatedRoute, Route, Router} from '@angular/router';

@Component({
  selector: 'app-product-list-item',
  templateUrl: './product-list-item.component.html',
  styleUrls: ['./product-list-item.component.scss']
})
export class ProductListItemComponent implements OnInit {
  @Input() product: Product;
  numberOfItems: number;
  constructor(
    private productService: ProductService,
    private loginService: LoginService,
    private activatedRoute: Router) { }

  ngOnInit() {
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
}
