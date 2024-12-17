import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SchoolCreatePageRoutingModule } from './school-create-routing.module';

import { SchoolCreatePage } from './school-create.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SchoolCreatePageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [SchoolCreatePage]
})
export class SchoolCreatePageModule { }
