import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SchoolCreatePage } from './school-create.page';

describe('SchoolCreatePage', () => {
  let component: SchoolCreatePage;
  let fixture: ComponentFixture<SchoolCreatePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(SchoolCreatePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
