import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/User';

@Component({
  selector: 'app-user-dashboard-page',
  templateUrl: './user-dashboard-page.page.html',
  styleUrls: ['./user-dashboard-page.page.scss'],
})
export class UserDashboardPagePage implements OnInit {

  public users: User[] = [
    {
      id: 1,
      name: "jhon",
      lastName: "doe",
      email: "jhondoe@mail.com",
      password: "12345",
      roleId: 1
    },
    {
      id: 2,
      name: "jhon",
      lastName: "smith",
      email: "smithj@mail.com",
      password: "12345",
      roleId: 2
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

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  handleCreateUser() {
    this.router.navigate(["/dashboard/user-create"])
  }

  setResult(ev: any) {
    console.log(`Dismissed with role: ${ev.detail.role}`);
  }
}
