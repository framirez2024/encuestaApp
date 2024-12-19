import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SurveyQuestion } from 'src/app/models/SurveyQuestion';
import { ApplicationsService } from 'src/app/services/applications.service';

@Component({
  selector: 'app-form-apply-survey',
  templateUrl: './form-apply-survey.component.html',
  styleUrls: ['./form-apply-survey.component.scss'],
})
export class FormApplySurveyComponent implements OnInit {

  @Input() questions: SurveyQuestion[] = [];
  @Input() applicationId: number;
  public formApplySurvey: FormGroup;

  constructor(
    private fb: FormBuilder,
    private applicationService: ApplicationsService
  ) { }

  ngOnInit() {
    this.createForm()
  }

  createForm() {
    const group: any = {};

    this.questions.forEach((question: SurveyQuestion) => {

      if (question.type == 'options') {
        group[question.id] = []
      } else {
        group[question.id] = [question.isRequired ? Validators.required : null]
      }
    });

    this.formApplySurvey = this.fb.group(group);
  }

  handleSetValueOption(q: number, e: any) {
    this.formApplySurvey.controls[q].setValue(e.detail.value);
  }

  async handleSubmitSuveyApply() {

    if (!this.formApplySurvey.valid) {
      this.formApplySurvey.markAllAsTouched();
      return;
    }

    try {
      const response = await this.applicationService.saveSurveyApplication(this.applicationId, this.formApplySurvey.value)
      console.log(this.formApplySurvey.value);
    } catch (err) {

    }
  }
}
