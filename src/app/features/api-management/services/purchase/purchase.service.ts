import { Injectable } from '@angular/core';
import {HttpService} from '../http/http.service';
import {Observable} from 'rxjs';
import {Product} from '../../../products/models/product';

@Injectable(
)
export class PurchaseService {

  constructor(private httpService: HttpService) { }

  getUserDeliveryDetails(): Observable<{address: string, phone_number: string}> {
    // @ts-ignore
    return this.httpService.get<{address: string, phone_number: string}>('purchase/phone-address/');
  }

  getDeliveryDate(): Observable<{dates: string[]}> {
    // @ts-ignore
    return this.httpService.get<{dates: string[]}>('purchase/date/');
  }

  order(orderBody: {delivery_date: string, products: Product[], address: string, phone_number: string }
  ): Observable<{delivery_date: string, products: Product[], address: string, phone_number: string, id }> {
    // @ts-ignore
    return this.httpService.post<{
      delivery_date: string, products: Product[], address: string, phone_number: string }>
    ('purchase/order/', orderBody);
  }

  payOrder(body): Observable<{order, buyer, total_price}> {
    // @ts-ignore
    return this.httpService.post<{order: number}>
    ('purchase/payment/', body);
  }
}
