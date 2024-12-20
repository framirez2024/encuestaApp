import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginPageComponent } from 'src/app/pages/auth/login-page/login-page.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginPageComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthLayoutPageRoutingModule { }
