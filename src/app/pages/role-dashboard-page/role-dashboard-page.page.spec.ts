import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RoleDashboardPagePage } from './role-dashboard-page.page';

describe('RoleDashboardPagePage', () => {
  let component: RoleDashboardPagePage;
  let fixture: ComponentFixture<RoleDashboardPagePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(RoleDashboardPagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
