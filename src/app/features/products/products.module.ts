import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductsListComponent } from './components/products-list/products-list.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import {NavigationModule} from '../navigation/navigation.module';
import { ProductListItemComponent } from './components/product-list-item/product-list-item.component';


@NgModule({
  declarations: [ProductsListComponent, ProductDetailsComponent, ProductListItemComponent],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    NavigationModule
  ],
    exports: [
        ProductsListComponent,
        ProductListItemComponent
    ]
})
export class ProductsModule { }
