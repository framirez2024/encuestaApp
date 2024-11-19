import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RoleCreatePage } from './role-create.page';

describe('RoleCreatePage', () => {
  let component: RoleCreatePage;
  let fixture: ComponentFixture<RoleCreatePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(RoleCreatePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
