import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SchoolEditPageRoutingModule } from './school-edit-routing.module';

import { SchoolEditPage } from './school-edit.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SchoolEditPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [SchoolEditPage]
})
export class SchoolEditPageModule { }
