import { Component, OnInit } from '@angular/core';
import { Application } from 'src/app/models/Application';
import { ApplicationsService } from 'src/app/services/applications.service';

@Component({
  selector: 'app-application-list',
  templateUrl: './application-list.page.html',
  styleUrls: ['./application-list.page.scss'],
})
export class ApplicationListPage implements OnInit {

  public applications: Application[] = [];
  private applicationSelected: any;

  constructor(
    private applicationService: ApplicationsService
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

  ngOnInit() {
    this.fetchApplications();
  }

  async fetchApplications() {
    try {
      const response = await this.applicationService.listApplications();
      this.applications = response.data;
      console.log(response.data);
    } catch (err) {
      console.log(err)
    }
  }

  async deleteApplication() {

    try {
      await this.applicationService.deleteApplication(this.applicationSelected);
      this.fetchApplications();
    } catch (err) {
      console.log(err)
    }
  }

  setResult(ev: any) {

    if (ev.detail.role == 'confirm') {
      this.deleteApplication()
    }
  }

  setApplicationToDelete(id: any) {
    this.applicationSelected = id;
  }

}
