import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-create-component',
  templateUrl: './user-create-component.component.html',
  styleUrls: ['./user-create-component.component.scss'],
})
export class UserCreateComponentComponent implements OnInit {

  public formCreateUser: FormGroup

  constructor(

  ) {
    this.formCreateUser = new FormGroup({
      name: new FormControl('', Validators.required),
      lastName: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
      roleId: new FormControl('', Validators.required),
    })
  }

  ngOnInit() { }

  handleSaveUser() {
    console.log(this.formCreateUser.value)
  }
}
