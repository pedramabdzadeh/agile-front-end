import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegistrationComponent } from './registration.component';
import {LoginComponent} from './components/login/login.component';

const routes: Routes = [
  {
    path: '', redirectTo: '/auth/sign-up', pathMatch: 'full'
  },
  {
    path: 'sign-in', component: LoginComponent
  },
  {
    path: 'sign-up', component: RegistrationComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RegistrationRoutingModule { }
