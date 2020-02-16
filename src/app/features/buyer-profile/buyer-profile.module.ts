import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BuyerProfileRoutingModule } from './buyer-profile-routing.module';
import { BuyerProfileComponent } from './buyer-profile.component';
import {NavigationModule} from '../navigation/navigation.module';
import {VendorProfileModule} from '../vendor-profile/vendor-profile.module';


@NgModule({
  declarations: [BuyerProfileComponent],
  imports: [
    CommonModule,
    BuyerProfileRoutingModule,
    NavigationModule,
    VendorProfileModule
  ]
})
export class BuyerProfileModule { }
