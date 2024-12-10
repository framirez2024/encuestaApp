import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
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
    private router: Router,
    private toastController: ToastController
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

  async presentToast(position: 'top' | 'middle' | 'bottom') {
    const toast = await this.toastController.create({
      message: "Ocurrio un error al crear el rol",
      duration: 1500,
      position: position,
    });

    await toast.present();
  }

  handleUpdateRole() {

    if (!this.formEditRole.valid) {
      this.formEditRole.markAllAsTouched();
      return;
    }

    this.roleService.updateRole(this.roleId, this.formEditRole.value).then((res) => {

      if (res.status == 422) {
        this.presentToast("bottom");
        return;
      }
      this.router.navigate(['/dashboard/roles'])
    })
  }

}
