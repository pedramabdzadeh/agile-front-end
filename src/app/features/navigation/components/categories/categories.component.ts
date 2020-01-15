import { Component, OnInit } from '@angular/core';
import {Category} from '../../../../models/category';
import {CategoryService} from '../../../api-management/services/categories/category.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {
  categories: Category[] = [];
  showCats = false;
  constructor(
    private categoryService: CategoryService,
  ) {}

  ngOnInit() {
    this.categoryService.listAll().subscribe(
      (result: Category[]) => {
        for (const category of result) {
          if (category.level === 1) {
            this.categories.push(category);
          }
        }
      }
    );
  }

  showCategories() {
    this.showCats = true;
  }

  hideCategories() {
    this.showCats = false;
  }
}
