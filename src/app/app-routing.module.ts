import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ProductsListComponent} from './features/products/components/products-list/products-list.component';


const routes: Routes = [
  {
    path: 'buyer-profile',
    loadChildren: () => import('./features/buyer-profile/buyer-profile.module')
      .then(m => m.BuyerProfileModule) },
  {
    path: 'vendor-profile',
    loadChildren: () => import('./features/vendor-profile/vendor-profile.module')
      .then(m => m.VendorProfileModule)
  },
  {
    path: 'auth', loadChildren: () => import('./features/registration/registration.module')
      .then(m => m.RegistrationModule)
  },
  {
    path: 'home', component: ProductsListComponent
  },
  {
    path: '', redirectTo: '/home', pathMatch: 'full'
  },
  {
    path: '**', redirectTo: '/home', pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
