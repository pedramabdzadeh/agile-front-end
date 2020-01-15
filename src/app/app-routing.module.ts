import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ProductsListComponent} from './features/products/components/products-list/products-list.component';
import {AuthGuard} from './guards/auth/auth.guard';
import {NotFoundComponent} from './components/not-found/not-found.component';


const routes: Routes = [
  {
    path: 'buyer-profile',
    loadChildren: () => import('./features/buyer-profile/buyer-profile.module')
      .then(m => m.BuyerProfileModule) },
  {
    path: 'vendor-profile',
    canLoad: [AuthGuard],
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
    path: '**', redirectTo: '/not-found', pathMatch: 'full'
  },
  {
    path: 'not-found', component: NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
