import { Injectable } from '@angular/core';
import {HttpService} from '../http/http.service';
import {Observable} from 'rxjs';

@Injectable()
export class AccountsService {

  constructor(private httpService: HttpService) {}

  createCampaign(body: {start_datetime, end_datetime, sale_amount}): Observable<any> {
    return this.httpService.post<any>('purchase/campaigns/', body);
  }
}
