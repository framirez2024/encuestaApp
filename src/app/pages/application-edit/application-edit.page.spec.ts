import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ApplicationEditPage } from './application-edit.page';

describe('ApplicationEditPage', () => {
  let component: ApplicationEditPage;
  let fixture: ComponentFixture<ApplicationEditPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ApplicationEditPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
