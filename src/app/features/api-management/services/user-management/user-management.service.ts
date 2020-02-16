import { Injectable } from '@angular/core';
import {HttpService} from '../http/http.service';
import {Observable} from 'rxjs';
import {Buyer} from '../../../../models/buyer';
import {Order} from '../../../../models/order';

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
    return this.httpService.get<Buyer[]>('accounts/buyer-profile');
  }

  getBuyerOrders(): Observable<Order[]> {
    // @ts-ignore
    return this.httpService.get<Order[]>('purchase/order');
  }
}
