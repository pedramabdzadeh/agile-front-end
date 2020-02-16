import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopNavComponent } from './components/top-nav/top-nav.component';
import {RouterModule} from '@angular/router';
import {SearchModule} from '../search/search.module';
import { CategoriesComponent } from './components/categories/categories.component';
import { SecondLevelCategoriesComponent } from './components/categories/second-level-categories/second-level-categories.component';
import {MatBadgeModule, MatIconModule} from '@angular/material';
import {SelectDropDownModule} from 'ngx-select-dropdown';



@NgModule({
  declarations: [TopNavComponent, CategoriesComponent, SecondLevelCategoriesComponent],
    exports: [
        TopNavComponent,
        CategoriesComponent
    ],
  imports: [
    CommonModule,
    RouterModule,
    SearchModule,
    MatIconModule,
    MatBadgeModule,
    SelectDropDownModule
  ]
})
export class NavigationModule { }
