import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ApplicationEditPage } from './application-edit.page';

const routes: Routes = [
  {
    path: '',
    component: ApplicationEditPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ApplicationEditPageRoutingModule {}
