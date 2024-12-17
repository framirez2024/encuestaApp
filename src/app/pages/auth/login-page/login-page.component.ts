import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Preferences } from '@capacitor/preferences';
import { ToastController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss'],
})
export class LoginPageComponent implements OnInit {

  public formLogin: FormGroup;
  public errors: string = '';

  constructor(
    private router: Router,
    private authService: AuthService,
    private toastController: ToastController
  ) {
    this.formLogin = new FormGroup({
      email: new FormControl('', [
        Validators.required
      ]),
      password: new FormControl('', [
        Validators.required
      ])
    });
  }

  ngOnInit() { }

  async presentToast(position: 'top' | 'middle' | 'bottom') {
    const toast = await this.toastController.create({
      message: "Ocurrio un error en la autenticación",
      duration: 1500,
      position: position,
    });

    await toast.present();
  }

  handleLogin() {

    // Se pregunta si el formulario no es valido
    if (!this.formLogin.valid) {
      this.formLogin.markAllAsTouched();
      return;
    }

    this.authService.login(this.formLogin.value).then(res => {
      if (res.token) {
        this.setToken(res.token)
        this.router.navigate(['/dashboard']);
      }

      if (res.status == 422) {
        this.errors = res.errors.email[0];
        this.presentToast("bottom");

      }

    })
      .catch(err => {
        console.log(err.error.message)
      });
  }

  async setToken(token: any) {
    await Preferences.set({
      key: 'token',
      value: token
    });
  }

}
