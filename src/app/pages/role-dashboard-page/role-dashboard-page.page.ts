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

  public roles: Role[] = [
    {
      id: 1,
      name: "Administrador"
    },
    {
      id: 2,
      name: "rol 1"
    },
    {
      id: 3,
      name: "rol 2"
    },
    {
      id: 4,
      name: "rol 3"
    },
  ];

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

  constructor(private router: Router) { }

  ngOnInit() {
  }

  handleCreateRole() {
    this.router.navigate(["/dashboard/role-create"])
  }

  setResult(ev: any) {
    console.log(`Dismissed with role: ${ev.detail.role}`);
  }
}
