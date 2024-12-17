import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FormEditPagePageRoutingModule } from './form-edit-page-routing.module';

import { FormEditPagePage } from './form-edit-page.page';
import { SurveyQuestionComponent } from 'src/app/components/survey-question/survey-question.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FormEditPagePageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [FormEditPagePage, SurveyQuestionComponent]
})
export class FormEditPagePageModule { }
