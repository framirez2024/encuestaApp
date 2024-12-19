import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ApplicationSurveyPage } from './application-survey.page';

const routes: Routes = [
  {
    path: '',
    component: ApplicationSurveyPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ApplicationSurveyPageRoutingModule {}
