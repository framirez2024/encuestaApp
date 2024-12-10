import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Profile } from 'src/app/models/Profile';
import { ProfileService } from 'src/app/services/profile.service';

@Component({
  selector: 'app-profile-dashboard-page',
  templateUrl: './profile-dashboard-page.page.html',
  styleUrls: ['./profile-dashboard-page.page.scss'],
})
export class ProfileDashboardPagePage implements OnInit {

  public profiles: Profile[] = [];
  private profileSelected: any;

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
    private router: Router,
    private profileService: ProfileService
  ) { }

  ngOnInit() {
    const rolesResponse = this.profileService.listProfiles().then(r => {
      this.profiles = r.data
      console.log(r.data);
    })
  }

  handleCreateRole() {
    this.router.navigate(["/dashboard/profile-create"])
  }

  setResult(ev: any) {

    if (ev.detail.role == 'confirm') {
      this.profileService.deleteProfile(this.profileSelected).then(resp => {
        window.location.reload()
      })
    }
  }

  setProfileToDelete(id: any) {
    this.profileSelected = id;
  }

}
