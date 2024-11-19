import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Profile } from 'src/app/models/Profile';

@Component({
  selector: 'app-profile-dashboard-page',
  templateUrl: './profile-dashboard-page.page.html',
  styleUrls: ['./profile-dashboard-page.page.scss'],
})
export class ProfileDashboardPagePage implements OnInit {

  public profiles: Profile[] = [
    {
      id: 1,
      name: 'perfil 1'
    },
    {
      id: 2,
      name: 'perfil 2'
    },
    {
      id: 3,
      name: 'perfil 3'
    },
    {
      id: 4,
      name: 'perfil 4'
    },
    {
      id: 5,
      name: 'perfil 5'
    },
  ];

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
    private router: Router
  ) { }

  ngOnInit() {
  }

  handleCreateRole() {
    this.router.navigate(["/dashboard/profile-create"])
  }

  setResult(ev: any) {
    console.log(`Dismissed with role: ${ev.detail.role}`);
  }

}
