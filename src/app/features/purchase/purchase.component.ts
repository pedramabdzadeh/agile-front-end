import { Component, OnInit } from '@angular/core';
import {ProductService} from '../api-management/services/products/product.service';
import {Cart} from '../../models/cart';



@Component({
  selector: 'app-purchase',
  templateUrl: './purchase.component.html',
  styleUrls: ['./purchase.component.scss']
})
export class PurchaseComponent implements OnInit {
  cart: Cart;
  constructor(
    private productService: ProductService,
    ) { }

  ngOnInit() {
    this.productService.getCart().subscribe((result: Cart[]) => {
      this.cart = result[0];
    });
  }

}
