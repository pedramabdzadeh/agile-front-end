import {Component, Input, OnInit} from '@angular/core';
import {Category} from '../../../../../models/category';
import {NavigationExtras, Router} from '@angular/router';

@Component({
  selector: 'app-second-level-categories',
  templateUrl: './second-level-categories.component.html',
  styleUrls: ['./second-level-categories.component.scss']
})
export class SecondLevelCategoriesComponent implements OnInit {
  @Input() categories: Category[];

  constructor(private router: Router) { }

  ngOnInit() {
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
}
