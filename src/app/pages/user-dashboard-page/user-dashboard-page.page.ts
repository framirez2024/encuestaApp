import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/User';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-dashboard-page',
  templateUrl: './user-dashboard-page.page.html',
  styleUrls: ['./user-dashboard-page.page.scss'],
})
export class UserDashboardPagePage implements OnInit {

  public users: User[] = [];

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
    private router: Router,
    private userService: UserService
  ) { }

  ngOnInit() {
    const rolesResponse = this.userService.listUsers().then(r => {
      this.users = r.data
      console.log(r.data);
    })
  }

  handleCreateUser() {
    this.router.navigate(["/dashboard/user-create"])
  }

  setResult(ev: any) {
    console.log(`Dismissed with role: ${ev.detail.role}`);
  }
}
