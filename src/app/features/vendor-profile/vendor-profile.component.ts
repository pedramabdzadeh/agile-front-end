import { Component, OnInit } from '@angular/core';
import {Product} from '../products/models/product';
import {ProductService} from '../api-management/services/products/product.service';
import {ActivatedRoute, Router} from '@angular/router';
import {AccountsService} from '../api-management/services/accounts/accounts.service';

@Component({
  selector: 'app-vendor-profile',
  templateUrl: './vendor-profile.component.html',
  styleUrls: ['./vendor-profile.component.scss']
})
export class VendorProfileComponent implements OnInit {
  products: Product[];
  addPanel: boolean;
  newProduct: Product;
  constructor(
    private productService: ProductService,
    private accountsService: AccountsService,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.newProduct = new Product();
    this.products = [];
    this.productService.productsChange$.subscribe(() => {
      this.getProducts();
    });
    this.route.queryParamMap.subscribe(
      data => {
        if (
          this.route.snapshot.queryParams.q
          || this.route.snapshot.queryParams.categoryID
          || this.route.snapshot.queryParams.sort) {
          this.productService.listProducts(this.route.snapshot.queryParams.q, this.route.snapshot.queryParams.categoryID,
            this.route.snapshot.queryParams.sort).subscribe(
            (product: Product[]) => {
              this.products = product;
            }
          );
        }  else {
          this.getProducts();
        }
      }
    );
  }

  add() {
    this.newProduct.category = 1;
    this.productService.addProduct(this.newProduct).subscribe(
      data => this.productService.listProducts().subscribe(
        (d: Product[]) => this.products = d
      )
    );
  }
  getProducts() {
    this.productService.listVendorProducts().subscribe(
      (d: Product[]) => this.products = d
    );
  }
}
