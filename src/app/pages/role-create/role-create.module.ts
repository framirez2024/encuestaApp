import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RoleCreatePageRoutingModule } from './role-create-routing.module';

import { RoleCreatePage } from './role-create.page';
import { RoleCreateComponent } from 'src/app/components/role-create/role-create.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RoleCreatePageRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [RoleCreatePage, RoleCreateComponent]
})
export class RoleCreatePageModule { }
