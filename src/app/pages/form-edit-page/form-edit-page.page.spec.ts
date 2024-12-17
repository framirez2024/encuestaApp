import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormEditPagePage } from './form-edit-page.page';

describe('FormEditPagePage', () => {
  let component: FormEditPagePage;
  let fixture: ComponentFixture<FormEditPagePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(FormEditPagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
