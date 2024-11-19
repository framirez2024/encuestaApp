import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UserCreatePagePage } from './user-create-page.page';

describe('UserCreatePagePage', () => {
  let component: UserCreatePagePage;
  let fixture: ComponentFixture<UserCreatePagePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(UserCreatePagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
