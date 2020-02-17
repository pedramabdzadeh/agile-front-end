import { Injectable } from '@angular/core';
import {HttpService} from '../http/http.service';
import {Product} from '../../../products/models/product';
import {BehaviorSubject, Observable} from 'rxjs';
import {Cart} from '../../../../models/cart';

@Injectable()
export class ProductService {
  cartChange$ = new BehaviorSubject(false);
  productsChange$ = new BehaviorSubject(false);
  id: number;

  constructor(private httpService: HttpService) { }

  listProducts(searchParam?, categoryParam?, sortParam?) {
    const params = {
      search: searchParam,
      category: categoryParam,
      sort_price: sortParam,
    };
    return this.httpService.get('products/list-products/', JSON.parse(JSON.stringify(params)));
  }

  listVendorProducts(): Observable<Product[]> {
    return this.httpService.get<Product[]>('products/vendor-product/');
  }

  addProduct(product: Product) {
    return this.httpService.post('products/vendor-product/', product);
  }

  addToCart(id: string) {
    return this.httpService.put('purchase/cart/' + this.id + '/', {id});
  }

  getCart(): Observable<Cart[]> {
    return this.httpService.get<Cart[]>('purchase/cart/');
  }

  deleteFromCart(id: number) {
    return this.httpService.delete('purchase/cart/' + this.id + '/', id);
  }

  deleteVendorItem(id: string) {
    return this.httpService.delete('products/vendor-product/' + id + '/', null);
  }

  getProductDetails(id: number): Observable<Product> {
    return this.httpService.get<Product>('products/list-products/' + id + '/');
  }

  addImage(id: number, body): Observable<any> {
    return this.httpService.putImage('products/image/' + id + '/', body);
  }

  makeExpress(product: Product) {
    // @ts-ignore
    return this.httpService.put<Product>('products/express/'+ product.id + '/');
  }
}
