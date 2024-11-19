import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UserDashboardPagePage } from './user-dashboard-page.page';

describe('UserDashboardPagePage', () => {
  let component: UserDashboardPagePage;
  let fixture: ComponentFixture<UserDashboardPagePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(UserDashboardPagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
