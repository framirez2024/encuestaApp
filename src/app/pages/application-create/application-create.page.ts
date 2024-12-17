import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { School } from 'src/app/models/School';
import { Survey } from 'src/app/models/Survey';
import { ApplicationsService } from 'src/app/services/applications.service';
import { SchoolServiceService } from 'src/app/services/school-service.service';
import { SurveyService } from 'src/app/services/survey.service';

@Component({
  selector: 'app-application-create',
  templateUrl: './application-create.page.html',
  styleUrls: ['./application-create.page.scss'],
})
export class ApplicationCreatePage implements OnInit {

  public formCreate: FormGroup;
  public schools: School[] = [];
  public surveys: Survey[] = [];

  constructor(
    private applicationService: ApplicationsService,
    private schoolService: SchoolServiceService,
    private surveyService: SurveyService,
    private router: Router
  ) {
    this.formCreate = new FormGroup({
      survey_id: new FormControl('', Validators.required),
      school_id: new FormControl('', Validators.required),
      date: new FormControl('', Validators.required),
    })
  }

  ngOnInit() {
    this.fetchData();
  }

  async fetchData() {

    try {
      const responseSchool = await this.schoolService.listSchools();
      const responseSurvey = await this.surveyService.listSurveys();

      this.schools = responseSchool.data;
      this.surveys = responseSurvey.data;
    } catch (err) {
      console.log(err)
    }
  }

  async handleSaveForm() {

    console.log(this.formCreate.value);

    if (!this.formCreate.valid) {
      this.formCreate.markAllAsTouched();
      return;
    }

    try {
      const response = await this.applicationService.saveApplication(this.formCreate.value);
      this.router.navigate(['/dashboard/applications'])
    } catch (err) {
      console.log(err);
    }
  }

}
