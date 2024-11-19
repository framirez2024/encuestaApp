import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserCreatePagePage } from './user-create-page.page';

const routes: Routes = [
  {
    path: '',
    component: UserCreatePagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserCreatePagePageRoutingModule {}
