import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormCreatePagePage } from './form-create-page.page';

describe('FormCreatePagePage', () => {
  let component: FormCreatePagePage;
  let fixture: ComponentFixture<FormCreatePagePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(FormCreatePagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
