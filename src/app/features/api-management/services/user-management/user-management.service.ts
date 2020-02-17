import { Injectable } from '@angular/core';
import {HttpService} from '../http/http.service';
import {Observable} from 'rxjs';
import {Buyer} from '../../../../models/buyer';
import {Order} from '../../../../models/order';
import {Vendor} from '../../../../models/vendor';

@Injectable({
  providedIn: 'root'
})
export class UserManagementService {

  constructor(
    private httpService: HttpService
  ) {

  }

  getBuyerProfile(): Observable<Buyer[]> {
    // @ts-ignore
    return this.httpService.get<Buyer[]>('accounts/buyer-profile/');
  }

  updateBuyerProfile(buyer: Buyer): Observable<Buyer> {
    // @ts-ignore
    return this.httpService.put<Buyer>('accounts/buyer-profile/' + buyer.id + '/', buyer);
  }
  getBuyerOrders(): Observable<Order[]> {
    // @ts-ignore
    return this.httpService.get<Order[]>('purchase/order/');
  }

  increaseUserCredit(amount: number): Observable<any> {
    // @ts-ignore
    return this.httpService.post<any>('accounts/charge/', {amount});
  }

  getVendorProfile(): Observable<Vendor[]> {
    // @ts-ignore
    return this.httpService.get<Vendor[]>('accounts/vendor-profile/');
  }


}
