import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserEditPagePage } from './user-edit-page.page';

const routes: Routes = [
  {
    path: '',
    component: UserEditPagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserEditPagePageRoutingModule {}
