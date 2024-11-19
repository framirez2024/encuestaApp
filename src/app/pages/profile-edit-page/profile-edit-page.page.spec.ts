import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProfileEditPagePage } from './profile-edit-page.page';

describe('ProfileEditPagePage', () => {
  let component: ProfileEditPagePage;
  let fixture: ComponentFixture<ProfileEditPagePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileEditPagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
