import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Survey } from 'src/app/models/Survey';
import { SurveyService } from 'src/app/services/survey.service';

@Component({
  selector: 'app-form-list',
  templateUrl: './form-list.page.html',
  styleUrls: ['./form-list.page.scss'],
})
export class FormListPage implements OnInit {

  public surveys: Survey[] = [];
  private profileSelected: any;

  constructor(
    private router: Router,
    private survesyService: SurveyService
  ) { }

  public alertButtons = [
    {
      text: 'Cancel',
      role: 'cancel',
      handler: () => {
        console.log('Alert canceled');
      },
    },
    {
      text: 'OK',
      role: 'confirm',
      handler: () => {
        console.log('Alert confirmed');
      },
    },
  ];

  async ngOnInit() {
    try {
      const response = await this.survesyService.listSurveys();
      this.surveys = response.data;
      console.log(response);
    } catch (err) {
      console.log(err)
    }
  }

  setResult(ev: any) {

    if (ev.detail.role == 'confirm') {
      this.survesyService.deleteSurvey(this.profileSelected).then(resp => {
        window.location.reload()
      })
    }
  }

  setSurveyToDelete(id: any) {
    this.profileSelected = id;
  }

}
