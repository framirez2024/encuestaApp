import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AuthLayoutPageRoutingModule } from './auth-layout-routing.module';

import { AuthLayoutPage } from './auth-layout.page';
import { LoginPageComponent } from 'src/app/pages/auth/login-page/login-page.component';
import { LoginComponent } from 'src/app/components/auth/login/login.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    AuthLayoutPageRoutingModule
  ],
  declarations: [AuthLayoutPage, LoginPageComponent, LoginComponent]
})
export class AuthLayoutPageModule { } 
