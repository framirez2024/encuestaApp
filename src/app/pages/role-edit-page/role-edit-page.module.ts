import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RoleEditPagePageRoutingModule } from './role-edit-page-routing.module';

import { RoleEditPagePage } from './role-edit-page.page';
import { RoleEditComponentComponent } from 'src/app/components/role-edit-component/role-edit-component.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RoleEditPagePageRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [RoleEditPagePage, RoleEditComponentComponent]
})
export class RoleEditPagePageModule { }
