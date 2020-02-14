import { Component, OnInit } from '@angular/core';
import {Product} from '../../models/product';
import {ActivatedRoute} from '@angular/router';
import {ProductService} from '../../../api-management/services/products/product.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
  product$: Observable<Product>;

  constructor(private route: ActivatedRoute,
              private productService: ProductService) { }

  ngOnInit() {
     this.product$ = this.productService.getProductDetails(+this.route.snapshot.paramMap.get('product-id'));
  }
}
