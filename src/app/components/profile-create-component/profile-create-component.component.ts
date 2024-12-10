import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ProfileService } from 'src/app/services/profile.service';

@Component({
  selector: 'app-profile-create-component',
  templateUrl: './profile-create-component.component.html',
  styleUrls: ['./profile-create-component.component.scss'],
})
export class ProfileCreateComponentComponent implements OnInit {

  public formCreateProfile: FormGroup

  constructor(
    private profileService: ProfileService,
    private route: Router
  ) {
    this.formCreateProfile = new FormGroup({
      name: new FormControl('', Validators.required)
    })
  }

  ngOnInit() { }

  handleSaveProfile() {
    this.profileService.saveProfile(this.formCreateProfile.value).then((res) => {
      this.route.navigate(['/dashboard/profiles'])
    });
  }
}
