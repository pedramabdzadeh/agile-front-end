import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [{ path: 'buyer-profile', loadChildren: () => import('./features/buyer-profile/buyer-profile.module').then(m => m.BuyerProfileModule) }, { path: 'verndor-profile', loadChildren: () => import('./features/vendor-profile/vendor-profile.module').then(m => m.VendorProfileModule) }, { path: 'auth', loadChildren: () => import('./features/registration/registration.module').then(m => m.RegistrationModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
