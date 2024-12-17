import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormListPagePage } from './form-list-page.page';

describe('FormListPagePage', () => {
  let component: FormListPagePage;
  let fixture: ComponentFixture<FormListPagePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(FormListPagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
