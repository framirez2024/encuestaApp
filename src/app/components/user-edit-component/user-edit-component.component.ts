import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { Role } from 'src/app/models/Role';
import { RoleService } from 'src/app/services/role.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-edit-component',
  templateUrl: './user-edit-component.component.html',
  styleUrls: ['./user-edit-component.component.scss'],
})
export class UserEditComponentComponent implements OnInit {

  public formEditUser: FormGroup
  private userId: any;
  public user: any;
  public roles: Role[] = [];

  constructor(
    private activateRoute: ActivatedRoute,
    private roleService: RoleService,
    private userService: UserService,
    private router: Router,
    private toastController: ToastController
  ) {
    this.formEditUser = new FormGroup({
      name: new FormControl('Jhon', Validators.required),
      last_name: new FormControl('Doe', Validators.required),
      email: new FormControl('jhondoe@mail.com', Validators.required),
      password: new FormControl('password134', Validators.required),
      role_id: new FormControl('1', Validators.required),
    });

    this.userId = this.activateRoute.snapshot.paramMap.get('id');
  }

  async presentToast(position: 'top' | 'middle' | 'bottom') {
    const toast = await this.toastController.create({
      message: "Ocurrio un error al guardar los datos, verifica los datos",
      duration: 1500,
      position: position,
    });

    await toast.present();
  }

  ngOnInit() {
    const rolesResponse = this.roleService.listRoles().then(r => {
      this.roles = r.data
      console.log(r.data);
    })
    this.userService.getUser(this.userId).then((response) => {
      this.formEditUser.controls['name'].setValue(response.data.name)
      this.formEditUser.controls['last_name'].setValue(response.data.last_name)
      this.formEditUser.controls['email'].setValue(response.data.email)
      this.formEditUser.controls['role_id'].setValue(response.data.role_id)
    })
  }

  handleUpdateUser() {
    if (!this.formEditUser.valid) {
      this.formEditUser.markAllAsTouched();
      return;
    }

    this.userService.updateUser(this.userId, this.formEditUser.value).then((res) => {

      if (res.status == 422) {
        this.presentToast("bottom");
        return;
      }

      this.router.navigate(["/dashboard/users"])
    })

    console.log(this.formEditUser.value)
  }

}
