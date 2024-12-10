import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Role } from 'src/app/models/Role';
import { RoleService } from 'src/app/services/role.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-create-component',
  templateUrl: './user-create-component.component.html',
  styleUrls: ['./user-create-component.component.scss'],
})
export class UserCreateComponentComponent implements OnInit {

  public formCreateUser: FormGroup
  public roles: Role[] = [];

  constructor(
    private userService: UserService,
    private roleService: RoleService,
    private router: Router
  ) {
    this.formCreateUser = new FormGroup({
      name: new FormControl('', Validators.required),
      last_name: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
      role_id: new FormControl('', Validators.required),
    })
  }

  ngOnInit() {
    const rolesResponse = this.roleService.listRoles().then(r => {
      this.roles = r.data
      console.log(r.data);
    })
  }

  handleSaveUser() {
    this.userService.saveUser(this.formCreateUser.value).then((resp) => {
      this.router.navigate(["/dashboard/users"])
    })
    console.log(this.formCreateUser.value)
  }
}
