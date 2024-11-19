import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RoleDashboardPagePage } from './role-dashboard-page.page';

const routes: Routes = [
  {
    path: '',
    component: RoleDashboardPagePage
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RoleDashboardPagePageRoutingModule { }
