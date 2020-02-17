import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VendorProfileRoutingModule } from './vendor-profile-routing.module';
import { VendorProfileComponent } from './vendor-profile.component';
import {NavigationModule} from '../navigation/navigation.module';
import {ProductsModule} from '../products/products.module';
import { ProfileEssentialsComponent } from './components/profile-essentials/profile-essentials.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatDatepickerModule, MatInputModule, MatNativeDateModule, MatSelectModule} from '@angular/material';


@NgModule({
    declarations: [VendorProfileComponent, ProfileEssentialsComponent],
    exports: [
        ProfileEssentialsComponent
    ],
  imports: [
    CommonModule,
    VendorProfileRoutingModule,
    NavigationModule,
    ProductsModule,
    FormsModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    ReactiveFormsModule,
    MatInputModule

  ]
})
export class VendorProfileModule { }
