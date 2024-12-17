import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { School } from 'src/app/models/School';
import { SchoolServiceService } from 'src/app/services/school-service.service';

@Component({
  selector: 'app-school-list',
  templateUrl: './school-list.page.html',
  styleUrls: ['./school-list.page.scss'],
})
export class SchoolListPage implements OnInit {

  public schools: School[] = [];
  public schoolSelected: any = null;

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

  constructor(
    private schoolService: SchoolServiceService,
    private router: Router
  ) { }

  ngOnInit() {
    this.fetchSchools();
  }

  async fetchSchools() {
    try {
      const response = await this.schoolService.listSchools();
      this.schools = response.data;
    } catch (err) {
      console.log(err)
    }
  }

  async deleteSchool() {
    try {
      const response = await this.schoolService.deleteSchool(this.schoolSelected);
      this.fetchSchools();
    } catch (err) {
      console.log(err);
    }
  }

  setResult(ev: any) {
    console.log(ev.detail.role);

    if (ev.detail.role == 'confirm') {
      this.deleteSchool();
    }
  }

  setSchoolToDelete(id: any) {
    this.schoolSelected = id;
  }

}
