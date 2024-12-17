import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SchoolEditPage } from './school-edit.page';

describe('SchoolEditPage', () => {
  let component: SchoolEditPage;
  let fixture: ComponentFixture<SchoolEditPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(SchoolEditPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
