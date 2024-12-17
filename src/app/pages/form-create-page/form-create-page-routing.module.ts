import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FormCreatePagePage } from './form-create-page.page';

const routes: Routes = [
  {
    path: '',
    component: FormCreatePagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FormCreatePagePageRoutingModule {}
