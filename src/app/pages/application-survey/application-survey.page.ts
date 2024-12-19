import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Application } from 'src/app/models/Application';
import { SurveyQuestion } from 'src/app/models/SurveyQuestion';
import { ApplicationsService } from 'src/app/services/applications.service';

@Component({
  selector: 'app-application-survey',
  templateUrl: './application-survey.page.html',
  styleUrls: ['./application-survey.page.scss'],
})
export class ApplicationSurveyPage implements OnInit {


  public formEditSurvey: FormGroup
  applicationId: any;
  public questions: SurveyQuestion[] = [];
  public application: Application;

  constructor(
    private applicationSurveyService: ApplicationsService,
    private activateRoute: ActivatedRoute
  ) {
    this.applicationId = this.activateRoute.snapshot.paramMap.get('id');
  }

  ngOnInit() {
    this.fetchApplicationSurvey();
  }

  async fetchApplicationSurvey() {

    try {
      const response = await this.applicationSurveyService.getSurveyToApplay(this.applicationId);
      this.application = response.data;

      console.log(this.application);
    } catch (err) {
      console.log(err);
    }
  }

}
