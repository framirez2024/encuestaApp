import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ApplicationCreatePage } from './application-create.page';

describe('ApplicationCreatePage', () => {
  let component: ApplicationCreatePage;
  let fixture: ComponentFixture<ApplicationCreatePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ApplicationCreatePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
