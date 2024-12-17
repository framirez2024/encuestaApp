import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ApplicationEditPageRoutingModule } from './application-edit-routing.module';

import { ApplicationEditPage } from './application-edit.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ApplicationEditPageRoutingModule
  ],
  declarations: [ApplicationEditPage]
})
export class ApplicationEditPageModule {}
