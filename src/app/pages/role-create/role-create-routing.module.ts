import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RoleCreatePage } from './role-create.page';

const routes: Routes = [
  {
    path: '',
    component: RoleCreatePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RoleCreatePageRoutingModule {}
