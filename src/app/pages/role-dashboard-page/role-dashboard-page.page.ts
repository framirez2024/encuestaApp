import { RoleService } from './../../services/role.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { IonModal } from '@ionic/angular';
import { OverlayEventDetail } from '@ionic/core/components';
import { Role } from '../../models/Role';

@Component({
  selector: 'app-role-dashboard-page',
  templateUrl: './role-dashboard-page.page.html',
  styleUrls: ['./role-dashboard-page.page.scss'],
})
export class RoleDashboardPagePage implements OnInit {

  public roles: Role[] = [];
  public roleSelected: any = null;

  public alertButtons = [
    {
      text: 'Cancel',
      role: 'cancel',
      handler: () => {
        console.log('Alert canceled');
      },
    },
    {
      text: 'OK',
      role: 'confirm',
      handler: () => {
        console.log('Alert confirmed');
      },
    },
  ];

  constructor(
    private roleService: RoleService,
    private router: Router
  ) {

  }

  ngOnInit() {
    this.fetchRoles()
  }

  async fetchRoles() {
    try {
      const rolesResponse = await this.roleService.listRoles();
      this.roles = rolesResponse.data;
    } catch (err) {

    }
  }

  handleCreateRole() {
    this.router.navigate(["/dashboard/role-create"])
  }

  async deleteRole() {
    try {
      await this.roleService.deleteRole(this.roleSelected);
      this.fetchRoles();
    } catch (err) {

    }
  }

  setResult(ev: any) {
    console.log(ev.detail.role);

    if (ev.detail.role == 'confirm') {
      this.deleteRole()
    }
  }

  setRoleToDelete(id: any) {
    this.roleSelected = id;
  }
}
