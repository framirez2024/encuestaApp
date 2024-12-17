import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { SurveyQuestion } from 'src/app/models/SurveyQuestion';
import { SurveyService } from 'src/app/services/survey.service';

@Component({
  selector: 'app-form-edit-page',
  templateUrl: './form-edit-page.page.html',
  styleUrls: ['./form-edit-page.page.scss'],
})
export class FormEditPagePage implements OnInit {

  public formEditSurvey: FormGroup
  surveyId: any;
  public questions: SurveyQuestion[] = [];

  constructor(
    private activateRoute: ActivatedRoute,
    private surveyService: SurveyService
  ) {
    this.formEditSurvey = new FormGroup({
      name: new FormControl('', Validators.required),
      description: new FormControl('')
    })
    this.surveyId = this.activateRoute.snapshot.paramMap.get('id');
  }

  ngOnInit() {
    this.fetchSurvey();
  }

  async fetchSurvey() {
    try {
      const response = await this.surveyService.getSurvey(this.surveyId)

      this.formEditSurvey.controls['name'].setValue(response.data.name)
      this.formEditSurvey.controls['description'].setValue(response.data.description)
      this.questions = response.data.questions;
      console.log(response)
    } catch (err) {

    }
  }

  async handleAddQuestion() {

    try {
      let question = {
        name: 'Nombre input',
        type: 'text',
        isRequired: false
      };

      const response = await this.surveyService.addQuestion(this.surveyId, question);
      this.questions.push(response.data);
      console.log(response);
    } catch (err) {
      console.log(err)
    }
  }

  async handleUpdateSurvey() {
    try {
      const response = await this.surveyService.updateSurvey(this.surveyId, this.formEditSurvey.value);
    } catch (err) {
      console.log(err);
    }
  }
}
