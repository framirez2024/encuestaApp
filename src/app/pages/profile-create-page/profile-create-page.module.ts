import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProfileCreatePagePageRoutingModule } from './profile-create-page-routing.module';

import { ProfileCreatePagePage } from './profile-create-page.page';
import { ProfileCreateComponentComponent } from 'src/app/components/profile-create-component/profile-create-component.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProfileCreatePagePageRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [ProfileCreatePagePage, ProfileCreateComponentComponent]
})
export class ProfileCreatePagePageModule { }
