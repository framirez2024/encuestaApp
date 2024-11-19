import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-role-create-component',
  templateUrl: './role-create.component.html',
  styleUrls: ['./role-create.component.scss'],
})
export class RoleCreateComponent implements OnInit {

  public formCreateRole: FormGroup

  constructor(

  ) {
    this.formCreateRole = new FormGroup({
      name: new FormControl('', Validators.required)
    })
  }

  ngOnInit() { }

  handleSaveRole() {
    console.log(this.formCreateRole.value)
  }
}
