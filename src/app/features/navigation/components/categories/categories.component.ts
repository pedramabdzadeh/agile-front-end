import { Component, OnInit } from '@angular/core';
import {Category} from '../../../../models/category';
import {CategoryService} from '../../../api-management/services/categories/category.service';
import {ProductService} from '../../../api-management/services/products/product.service';
import {NavigationExtras, Router} from '@angular/router';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {
  categories: Category[] = [];
  allCats: Category[] = [];
  showCats = false;
  secondLevelCategories: Category[] = [];
  constructor(
    private categoryService: CategoryService,
    private productService: ProductService,
    private router: Router
  ) {}

  ngOnInit() {
    this.categoryService.listAll().subscribe(
      (result: Category[]) => {
        this.allCats = result;
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

  onCategoryClick(category: Category) {
    const navigationExtras: NavigationExtras = {
      queryParams: {
        categoryID: category.id,
      },
      queryParamsHandling: 'merge'
    };
    this.router.navigate(['/products'], navigationExtras).then();
  }

  onHover(category: Category) {
    this.secondLevelCategories = [];
    this.allCats.forEach(cat => {
      if (cat.parent_category === category.id) {
        this.secondLevelCategories.push(cat);
      }
    });
  }
}
