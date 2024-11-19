import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProfileDashboardPagePageRoutingModule } from './profile-dashboard-page-routing.module';

import { ProfileDashboardPagePage } from './profile-dashboard-page.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProfileDashboardPagePageRoutingModule
  ],
  declarations: [ProfileDashboardPagePage]
})
export class ProfileDashboardPagePageModule {}
