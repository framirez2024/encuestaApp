import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RoleEditPagePage } from './role-edit-page.page';

const routes: Routes = [
  {
    path: '',
    component: RoleEditPagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RoleEditPagePageRoutingModule {}
