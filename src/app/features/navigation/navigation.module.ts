import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopNavComponent } from './components/top-nav/top-nav.component';
import {RouterModule} from '@angular/router';
import {SearchModule} from '../search/search.module';



@NgModule({
  declarations: [TopNavComponent],
  exports: [
    TopNavComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    SearchModule
  ]
})
export class NavigationModule { }
