import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Role } from 'src/app/models/Role';
import { RoleService } from 'src/app/services/role.service';

@Component({
  selector: 'app-role-edit-component',
  templateUrl: './role-edit-component.component.html',
  styleUrls: ['./role-edit-component.component.scss'],
})
export class RoleEditComponentComponent implements OnInit {

  public formEditRole: FormGroup
  roleId: any;
  public role: Role = { id: 0, name: '' };

  constructor(
    private activateRoute: ActivatedRoute,
    private roleService: RoleService,
    private router: Router
  ) {
    this.formEditRole = new FormGroup({
      name: new FormControl('Administrador2', Validators.required)
    })
    this.roleId = this.activateRoute.snapshot.paramMap.get('id');
  }

  ngOnInit() {
    this.roleService.getRole(this.roleId).then((response) => {
      this.formEditRole.controls['name'].setValue(response.data.name)
    })
  }

  handleUpdateRole() {
    this.roleService.updateRole(this.roleId, this.formEditRole.value).then((resp) => {
      this.router.navigate(['/dashboard/roles'])
    })
  }

}
