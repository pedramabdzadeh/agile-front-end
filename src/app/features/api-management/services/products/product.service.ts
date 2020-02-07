import { Injectable } from '@angular/core';
import {HttpService} from '../http/http.service';
import {Product} from '../../../products/models/product';
import {BehaviorSubject} from 'rxjs';

@Injectable()
export class ProductService {
  change$ = new BehaviorSubject(false);

  constructor(private httpService: HttpService) { }
  listProducts() {
    return this.httpService.get('products/list-products/');
  }

  addProduct(product: Product) {
    return this.httpService.post('vendor-product/add-product/', product);
  }

  search(query) {
    console.log(query);
    return this.httpService.get('products/list-products/?search=' + query);
  }

  addToCart(id: string) {
    return this.httpService.put('purchase/cart/' + id + '/', {id});
  }

  getCart() {
    return this.httpService.get('purchase/cart/');
  }
}
