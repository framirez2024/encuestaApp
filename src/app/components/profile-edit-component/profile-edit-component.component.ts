import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-profile-edit-component',
  templateUrl: './profile-edit-component.component.html',
  styleUrls: ['./profile-edit-component.component.scss'],
})
export class ProfileEditComponentComponent implements OnInit {

  public formEditProfile: FormGroup

  constructor(

  ) {
    this.formEditProfile = new FormGroup({
      name: new FormControl('Nombre del perfil', Validators.required)
    })
  }

  ngOnInit() { }

  handleEditProfile() {
    console.log(this.formEditProfile.value)
  }
}
