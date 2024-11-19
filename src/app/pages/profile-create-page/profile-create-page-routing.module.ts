import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProfileCreatePagePage } from './profile-create-page.page';

const routes: Routes = [
  {
    path: '',
    component: ProfileCreatePagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProfileCreatePagePageRoutingModule {}
