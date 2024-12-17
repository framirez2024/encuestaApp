import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FormCreatePagePageRoutingModule } from './form-create-page-routing.module';

import { FormCreatePagePage } from './form-create-page.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FormCreatePagePageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [FormCreatePagePage]
})
export class FormCreatePagePageModule { }
