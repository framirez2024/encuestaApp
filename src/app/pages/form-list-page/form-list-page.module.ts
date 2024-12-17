import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FormListPagePageRoutingModule } from './form-list-page-routing.module';

import { FormListPagePage } from './form-list-page.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FormListPagePageRoutingModule
  ],
  declarations: [FormListPagePage]
})
export class FormListPagePageModule {}
