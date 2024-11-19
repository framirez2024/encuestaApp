import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UserEditPagePageRoutingModule } from './user-edit-page-routing.module';

import { UserEditPagePage } from './user-edit-page.page';
import { UserEditComponentComponent } from 'src/app/components/user-edit-component/user-edit-component.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UserEditPagePageRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [UserEditPagePage, UserEditComponentComponent]
})
export class UserEditPagePageModule { }
