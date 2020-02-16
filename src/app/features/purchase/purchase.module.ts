import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PurchaseRoutingModule } from './purchase-routing.module';
import { PurchaseComponent } from './purchase.component';
import {NavigationModule} from '../navigation/navigation.module';


@NgModule({
  declarations: [PurchaseComponent],
  imports: [
    CommonModule,
    PurchaseRoutingModule,
    NavigationModule
  ]
})
export class PurchaseModule { }
