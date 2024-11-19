import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-role-edit-component',
  templateUrl: './role-edit-component.component.html',
  styleUrls: ['./role-edit-component.component.scss'],
})
export class RoleEditComponentComponent implements OnInit {

  public formEditRole: FormGroup

  constructor() {
    this.formEditRole = new FormGroup({
      name: new FormControl('Administrador2', Validators.required)
    })
  }

  ngOnInit() { }

  handleUpdateRole() {

  }

}
