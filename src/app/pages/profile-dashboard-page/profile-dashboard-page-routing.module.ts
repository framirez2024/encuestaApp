import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProfileDashboardPagePage } from './profile-dashboard-page.page';

const routes: Routes = [
  {
    path: '',
    component: ProfileDashboardPagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProfileDashboardPagePageRoutingModule {}
