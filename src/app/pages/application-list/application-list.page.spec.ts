import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ApplicationListPage } from './application-list.page';

describe('ApplicationListPage', () => {
  let component: ApplicationListPage;
  let fixture: ComponentFixture<ApplicationListPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ApplicationListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
