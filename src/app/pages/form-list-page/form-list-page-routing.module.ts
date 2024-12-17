import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FormListPagePage } from './form-list-page.page';

const routes: Routes = [
  {
    path: '',
    component: FormListPagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FormListPagePageRoutingModule {}
