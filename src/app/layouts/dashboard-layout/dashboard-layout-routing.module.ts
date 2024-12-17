import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardLayoutPage } from './dashboard-layout.page';

const routes: Routes = [
  {
    path: '',
    component: DashboardLayoutPage
  },
  {
    path: 'roles',
    component: DashboardLayoutPage,
    loadChildren: () => import('../../pages/role-dashboard-page/role-dashboard-page.module').then(m => m.RoleDashboardPagePageModule)
  },
  {
    path: 'role-create',
    loadChildren: () => import('../../pages/role-create/role-create.module').then(m => m.RoleCreatePageModule)
  },
  {
    path: 'role-edit/:id',
    loadChildren: () => import('../../pages/role-edit-page/role-edit-page.module').then(m => m.RoleEditPagePageModule)
  },
  {
    path: 'users',
    component: DashboardLayoutPage,
    loadChildren: () => import('../../pages/user-dashboard-page/user-dashboard-page.module').then(m => m.UserDashboardPagePageModule)
  },
  {
    path: 'user-create',
    loadChildren: () => import('../../pages/user-create-page/user-create-page.module').then(m => m.UserCreatePagePageModule)
  },
  {
    path: 'user-edit/:id',
    loadChildren: () => import('../../pages/user-edit-page/user-edit-page.module').then(m => m.UserEditPagePageModule)
  },
  {
    path: 'profiles',
    component: DashboardLayoutPage,
    loadChildren: () => import('../../pages/profile-dashboard-page/profile-dashboard-page.module').then(m => m.ProfileDashboardPagePageModule)
  },
  {
    path: 'profile-create',
    loadChildren: () => import('../../pages/profile-create-page/profile-create-page.module').then(m => m.ProfileCreatePagePageModule)
  },
  {
    path: 'profile-edit/:id',
    loadChildren: () => import('../../pages/profile-edit-page/profile-edit-page.module').then(m => m.ProfileEditPagePageModule)
  },
  // {
  //   path: 'forms',
  //   component: DashboardLayoutPage,
  //   loadChildren: () => import('../../pages/form-list/form-list-routing.module').then(m => m.FormListPageRoutingModule)
  // },
  {
    path: 'forms',
    component: DashboardLayoutPage,
    loadChildren: () => import('../../pages/form-list-page/form-list-page.module').then(m => m.FormListPagePageModule)
  },
  {
    path: 'form-create',
    loadChildren: () => import('../../pages/form-create-page/form-create-page.module').then(m => m.FormCreatePagePageModule)
  },
  {
    path: 'form-edit/:id',
    loadChildren: () => import('../../pages/form-edit-page/form-edit-page.module').then(m => m.FormEditPagePageModule)
  },
  {
    path: 'schools',
    component: DashboardLayoutPage,
    loadChildren: () => import('../../pages/school-list/school-list.module').then(m => m.SchoolListPageModule)
  },
  {
    path: 'school-create',
    loadChildren: () => import('../../pages/school-create/school-create.module').then(m => m.SchoolCreatePageModule)
  },
  {
    path: 'school-edit/:id',
    loadChildren: () => import('../../pages/school-edit/school-edit.module').then(m => m.SchoolEditPageModule)
  },
  {
    path: 'applications',
    component: DashboardLayoutPage,
    loadChildren: () => import('../../pages/application-list/application-list.module').then(m => m.ApplicationListPageModule)
  },
  {
    path: 'application-create',
    loadChildren: () => import('../../pages/application-create/application-create.module').then(m => m.ApplicationCreatePageModule)
  },
  {
    path: 'application-edit',
    loadChildren: () => import('../../pages/application-edit/application-edit.module').then(m => m.ApplicationEditPageModule)
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardLayoutPageRoutingModule { }
