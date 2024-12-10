import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RoleService } from 'src/app/services/role.service';

@Component({
  selector: 'app-role-create-component',
  templateUrl: './role-create.component.html',
  styleUrls: ['./role-create.component.scss'],
})
export class RoleCreateComponent implements OnInit {

  public formCreateRole: FormGroup

  constructor(
    private roleService: RoleService,
    private route: Router
  ) {
    this.formCreateRole = new FormGroup({
      name: new FormControl('', Validators.required)
    })
  }

  ngOnInit() { }

  handleSaveRole() {
    this.roleService.saveRole(this.formCreateRole.value).then((response) => {
      this.route.navigate(['/dashboard/roles'])
    })
  }
}
