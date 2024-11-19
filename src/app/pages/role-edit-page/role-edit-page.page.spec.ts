import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RoleEditPagePage } from './role-edit-page.page';

describe('RoleEditPagePage', () => {
  let component: RoleEditPagePage;
  let fixture: ComponentFixture<RoleEditPagePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(RoleEditPagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
