import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ApplicationCreatePage } from './application-create.page';

const routes: Routes = [
  {
    path: '',
    component: ApplicationCreatePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ApplicationCreatePageRoutingModule {}
