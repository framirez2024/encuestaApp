import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ApplicationListPageRoutingModule } from './application-list-routing.module';

import { ApplicationListPage } from './application-list.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ApplicationListPageRoutingModule
  ],
  declarations: [ApplicationListPage]
})
export class ApplicationListPageModule {}
