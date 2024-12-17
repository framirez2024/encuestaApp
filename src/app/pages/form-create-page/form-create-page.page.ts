import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SurveyService } from 'src/app/services/survey.service';

@Component({
  selector: 'app-form-create-page',
  templateUrl: './form-create-page.page.html',
  styleUrls: ['./form-create-page.page.scss'],
})
export class FormCreatePagePage implements OnInit {

  public formCreate: FormGroup;

  constructor(
    private surveyService: SurveyService,
    private router: Router
  ) {
    this.formCreate = new FormGroup({
      name: new FormControl('', Validators.required),
      description: new FormControl('')
    })
  }

  ngOnInit() {
  }

  handleSaveForm() {
    if (!this.formCreate.valid) {
      this.formCreate.markAllAsTouched();
      return;
    }

    this.surveyService.saveSurvey(this.formCreate.value).then(res => {

      if (res.status == 422) { return; }

      this.router.navigate(['/dashboard/form-edit/' + res.data.id])
    })
  }
}
