import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ApplicationSurveyPageRoutingModule } from './application-survey-routing.module';

import { ApplicationSurveyPage } from './application-survey.page';
import { FormApplySurveyComponent } from 'src/app/components/form-apply-survey/form-apply-survey.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    ApplicationSurveyPageRoutingModule
  ],
  declarations: [ApplicationSurveyPage, FormApplySurveyComponent]
})
export class ApplicationSurveyPageModule { }
