import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DashboardLayoutPageRoutingModule } from './dashboard-layout-routing.module';

import { DashboardLayoutPage } from './dashboard-layout.page';
import { DashboardSidebarComponent } from 'src/app/components/dashboar-sidebar/dashboard-sidebar.component';
import { DashboardAvatarComponent } from 'src/app/components/dashboard-avatar/dashboard-avatar.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DashboardLayoutPageRoutingModule
  ],
  declarations: [DashboardLayoutPage, DashboardSidebarComponent, DashboardAvatarComponent]
})
export class DashboardLayoutPageModule { }
