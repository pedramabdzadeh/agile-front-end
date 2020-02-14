import { Component, OnInit } from '@angular/core';
import {Product} from '../../models/product';
import {ProductService} from '../../../api-management/services/products/product.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent implements OnInit {
  products: Product[] = [];

  constructor(private productService: ProductService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.products = [];
    this.productService.productsChange$.subscribe(() => {
      this.getProducts();
    });
    this.route.queryParamMap.subscribe(
      () => {
        if (this.route.snapshot.queryParams.q || this.route.snapshot.queryParams.categoryID || this.route.snapshot.queryParams.sort) {
          this.productService.listProducts(this.route.snapshot.queryParams.q, this.route.snapshot.queryParams.categoryID,
            this.route.snapshot.queryParams.sort).subscribe(
            (d: Product[]) => {
              this.products = d;
            }
          );
        }  else {
          this.getProducts();
        }
      }
    );
  }

  getProducts(): void {
    this.productService.listProducts().subscribe(
      (d: Product[]) => {
        this.products = d;
      }
    );
  }
}
