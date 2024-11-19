import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UserDashboardPagePageRoutingModule } from './user-dashboard-page-routing.module';

import { UserDashboardPagePage } from './user-dashboard-page.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UserDashboardPagePageRoutingModule
  ],
  declarations: [UserDashboardPagePage]
})
export class UserDashboardPagePageModule {}
