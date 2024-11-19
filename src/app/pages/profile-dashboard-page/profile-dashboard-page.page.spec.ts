import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProfileDashboardPagePage } from './profile-dashboard-page.page';

describe('ProfileDashboardPagePage', () => {
  let component: ProfileDashboardPagePage;
  let fixture: ComponentFixture<ProfileDashboardPagePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileDashboardPagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
