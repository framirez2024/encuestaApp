import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RoleDashboardPagePageRoutingModule } from './role-dashboard-page-routing.module';

import { RoleDashboardPagePage } from './role-dashboard-page.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RoleDashboardPagePageRoutingModule
  ],
  declarations: [RoleDashboardPagePage]
})
export class RoleDashboardPagePageModule { }
