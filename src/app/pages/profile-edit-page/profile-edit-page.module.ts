import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProfileEditPagePageRoutingModule } from './profile-edit-page-routing.module';

import { ProfileEditPagePage } from './profile-edit-page.page';
import { ProfileEditComponentComponent } from 'src/app/components/profile-edit-component/profile-edit-component.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProfileEditPagePageRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [ProfileEditPagePage, ProfileEditComponentComponent]
})
export class ProfileEditPagePageModule { }
