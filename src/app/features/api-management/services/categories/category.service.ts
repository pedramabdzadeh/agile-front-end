import { Injectable } from '@angular/core';
import {HttpService} from '../http/http.service';

@Injectable()
export class CategoryService {
  constructor(
    private httpService: HttpService
  ) {}

  listAll() {
    return this.httpService.get('products/list-categories/');
  }
}
