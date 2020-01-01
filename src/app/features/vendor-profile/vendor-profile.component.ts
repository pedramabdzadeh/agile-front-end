import { Component, OnInit } from '@angular/core';
import {Product} from '../products/models/product';
import {ProductService} from '../api-management/services/products/product.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-vendor-profile',
  templateUrl: './vendor-profile.component.html',
  styleUrls: ['./vendor-profile.component.scss']
})
export class VendorProfileComponent implements OnInit {
  products: Product[];
  addPanel: boolean;
  newProduct: Product;
  constructor(private productService: ProductService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.newProduct = new Product();
    this.products = [];
    console.log(this.route.snapshot.queryParams);

    this.route.queryParamMap.subscribe(
      data => {
        if (this.route.snapshot.queryParams.q) {
          this.productService.search(this.route.snapshot.queryParams.q).subscribe(
            (d: Product[]) => this.products = d
          );
        } else {
          this.productService.listProducts().subscribe(
            (d: Product[]) => this.products = d
          );
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
}
