import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Profile } from 'src/app/models/Profile';
import { ProfileService } from 'src/app/services/profile.service';

@Component({
  selector: 'app-profile-edit-component',
  templateUrl: './profile-edit-component.component.html',
  styleUrls: ['./profile-edit-component.component.scss'],
})
export class ProfileEditComponentComponent implements OnInit {

  public formEditProfile: FormGroup
  profileId: any;
  public profile: Profile = { id: 0, name: '' };

  constructor(
    private activateRoute: ActivatedRoute,
    private profileService: ProfileService,
    private router: Router
  ) {
    this.formEditProfile = new FormGroup({
      name: new FormControl('Nombre del perfil', Validators.required)
    })
    this.profileId = this.activateRoute.snapshot.paramMap.get('id');
  }

  ngOnInit() {
    this.profileService.getProfile(this.profileId).then((response) => {
      this.formEditProfile.controls['name'].setValue(response.data.name)
    })
  }

  handleEditProfile() {
    this.profileService.updateProfile(this.profileId, this.formEditProfile.value).then((resp) => {
      this.router.navigate(['/dashboard/profiles'])
    })
  }
}
