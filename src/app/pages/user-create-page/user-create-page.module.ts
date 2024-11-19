import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UserCreatePagePageRoutingModule } from './user-create-page-routing.module';

import { UserCreatePagePage } from './user-create-page.page';
import { UserCreateComponentComponent } from 'src/app/components/user-create-component/user-create-component.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UserCreatePagePageRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [UserCreatePagePage, UserCreateComponentComponent]
})
export class UserCreatePagePageModule { }
