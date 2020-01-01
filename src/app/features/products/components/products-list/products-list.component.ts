import { Component, OnInit } from '@angular/core';
import {Product} from '../../models/product';
import {ProductService} from '../../../api-management/services/products/product.service';
import {ActivatedRoute, Route} from '@angular/router';

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

}
