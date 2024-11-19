import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProfileCreatePagePage } from './profile-create-page.page';

describe('ProfileCreatePagePage', () => {
  let component: ProfileCreatePagePage;
  let fixture: ComponentFixture<ProfileCreatePagePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileCreatePagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
