import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FormEditPagePage } from './form-edit-page.page';

const routes: Routes = [
  {
    path: '',
    component: FormEditPagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FormEditPagePageRoutingModule {}
