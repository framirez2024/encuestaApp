import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserDashboardPagePage } from './user-dashboard-page.page';

const routes: Routes = [
  {
    path: '',
    component: UserDashboardPagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserDashboardPagePageRoutingModule {}
