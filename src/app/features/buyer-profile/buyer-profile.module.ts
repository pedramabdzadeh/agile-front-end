import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BuyerProfileRoutingModule } from './buyer-profile-routing.module';
import { BuyerProfileComponent } from './buyer-profile.component';


@NgModule({
  declarations: [BuyerProfileComponent],
  imports: [
    CommonModule,
    BuyerProfileRoutingModule
  ]
})
export class BuyerProfileModule { }
