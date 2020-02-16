import { Injectable } from '@angular/core';
import {HttpService} from '../http/http.service';
import {Observable} from 'rxjs';

@Injectable()
export class AccountsService {

  constructor(private httpService: HttpService) {}

}
