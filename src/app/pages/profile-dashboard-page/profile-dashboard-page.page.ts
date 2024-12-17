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
    this.fetchProfile()
  }

  async fetchProfile() {

    try {
      const rolesResponse = await this.profileService.listProfiles();
      this.profiles = rolesResponse.data;

    } catch (err) {
      console.log(err)
    }
  }

  handleCreateRole() {
    this.router.navigate(["/dashboard/profile-create"])
  }

  async deleteProfile() {
    try {
      this.profileService.deleteProfile(this.profileSelected);
      this.fetchProfile();
    } catch (err) {
      console.log(err)
    }
  }

  setResult(ev: any) {

    if (ev.detail.role == 'confirm') {
      this.deleteProfile();
    }
  }

  setProfileToDelete(id: any) {
    this.profileSelected = id;
  }

}
