import { Injectable } from '@angular/core';
import {HttpService} from '../http/http.service';
import {Observable} from 'rxjs';
import {Category} from '../../../../models/category';

@Injectable()
export class CategoryService {
  constructor(
    private httpService: HttpService
  ) {}

  listAll(): Observable<Category[]> {
    return this.httpService.get<Category[]>('products/list-categories/');
  }
}
