import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ApplicationSurveyPage } from './application-survey.page';

describe('ApplicationSurveyPage', () => {
  let component: ApplicationSurveyPage;
  let fixture: ComponentFixture<ApplicationSurveyPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ApplicationSurveyPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
