import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ApplicationCreatePageRoutingModule } from './application-create-routing.module';

import { ApplicationCreatePage } from './application-create.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ApplicationCreatePageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [ApplicationCreatePage]
})
export class ApplicationCreatePageModule { }
