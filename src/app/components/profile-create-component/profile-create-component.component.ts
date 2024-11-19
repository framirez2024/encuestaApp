import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-profile-create-component',
  templateUrl: './profile-create-component.component.html',
  styleUrls: ['./profile-create-component.component.scss'],
})
export class ProfileCreateComponentComponent implements OnInit {

  public formCreateProfile: FormGroup

  constructor(

  ) {
    this.formCreateProfile = new FormGroup({
      name: new FormControl('', Validators.required)
    })
  }

  ngOnInit() { }

  handleSaveProfile() {
    console.log(this.formCreateProfile.value)
  }
}
