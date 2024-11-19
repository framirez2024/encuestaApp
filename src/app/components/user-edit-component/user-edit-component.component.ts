import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-edit-component',
  templateUrl: './user-edit-component.component.html',
  styleUrls: ['./user-edit-component.component.scss'],
})
export class UserEditComponentComponent implements OnInit {

  public formEditUser: FormGroup

  constructor(

  ) {
    this.formEditUser = new FormGroup({
      name: new FormControl('Jhon', Validators.required),
      lastName: new FormControl('Doe', Validators.required),
      email: new FormControl('jhondoe@mail.com', Validators.required),
      password: new FormControl('password134', Validators.required),
      roleId: new FormControl('1', Validators.required),
    })
  }

  ngOnInit() { }

  handleSaveUser() {
    console.log(this.formEditUser.value)
  }

}
