import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
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
    private route: Router,
    private toastController: ToastController
  ) {
    this.formCreateRole = new FormGroup({
      name: new FormControl('', Validators.required)
    })
  }

  ngOnInit() { }

  async presentToast(position: 'top' | 'middle' | 'bottom') {
    const toast = await this.toastController.create({
      message: "Ocurrio un error al crear el rol",
      duration: 1500,
      position: position,
    });

    await toast.present();
  }

  handleSaveRole() {
    if (!this.formCreateRole.valid) {
      this.formCreateRole.markAllAsTouched();
      return;
    }

    this.roleService.saveRole(this.formCreateRole.value).then((res) => {

      if (res.status == 422) {
        this.presentToast("bottom");
        return;
      }
      this.route.navigate(['/dashboard/roles'])
    })
  }
}
