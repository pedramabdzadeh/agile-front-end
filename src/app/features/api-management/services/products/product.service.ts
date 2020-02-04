import { Injectable } from '@angular/core';
import {HttpService} from '../http/http.service';
import {Product} from '../../../products/models/product';

@Injectable()
export class ProductService {

  constructor(private httpService: HttpService) { }
  listProducts() {
    return this.httpService.get('products/list-products/');
  }

  addProduct(product: Product) {
    return this.httpService.post('products/add-product/', product);
  }

  search(query) {
    console.log(query);
    return this.httpService.get('products/list-products/?search=' + query);
  }
}
