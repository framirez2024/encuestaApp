import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SchoolCreatePage } from './school-create.page';

const routes: Routes = [
  {
    path: '',
    component: SchoolCreatePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SchoolCreatePageRoutingModule {}
