import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UserEditPagePage } from './user-edit-page.page';

describe('UserEditPagePage', () => {
  let component: UserEditPagePage;
  let fixture: ComponentFixture<UserEditPagePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(UserEditPagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
