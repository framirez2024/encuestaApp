import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthLayoutPage } from './auth-layout.page';
import { LoginPageComponent } from 'src/app/pages/auth/login-page/login-page.component';
import { RegisterPageComponent } from 'src/app/pages/auth/register-page/register-page.component';

const routes: Routes = [
  {
    path: '',
    component: AuthLayoutPage
  },
  {
    path: 'login',
    component: LoginPageComponent
  },
  {
    path: 'register',
    component: RegisterPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthLayoutPageRoutingModule { }
