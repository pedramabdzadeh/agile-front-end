import {Component, Input, OnInit} from '@angular/core';
import {Product} from '../../models/product';
import {ProductService} from '../../../api-management/services/products/product.service';

@Component({
  selector: 'app-product-list-item',
  templateUrl: './product-list-item.component.html',
  styleUrls: ['./product-list-item.component.scss']
})
export class ProductListItemComponent implements OnInit {
  @Input() product: Product;
  numberOfItems: number = 1;
  constructor(private productService: ProductService) { }

  ngOnInit() {
  }

  addToCart() {
    this.productService.addToCart(this.product.id).subscribe( result => {
        this.productService.change$.next(true);
    });
  }
}
