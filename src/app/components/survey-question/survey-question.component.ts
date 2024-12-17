import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SurveyQuestion } from 'src/app/models/SurveyQuestion';
import { QuestionService } from 'src/app/services/question.service';

@Component({
  selector: 'app-survey-question',
  templateUrl: './survey-question.component.html',
  styleUrls: ['./survey-question.component.scss'],
})
export class SurveyQuestionComponent implements OnInit {

  @Input() question?: SurveyQuestion;
  @Output() questionDeleted = new EventEmitter<boolean>();

  public options: string[] = [];
  formQuestion: FormGroup;

  constructor(
    private fb: FormBuilder,
    private questionService: QuestionService
  ) {

  }

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    const group: any = {};

    group['name'] = [this.question.name, this.question.isRequired ? Validators.required : null];
    group['type'] = [this.question.type, this.question.isRequired ? Validators.required : null];

    if (this.question.type == 'options') {
      this.options = this.question.options;
    }

    this.formQuestion = this.fb.group(group);
  }

  addOption() {
    this.options.push(`Opcion ${this.options.length + 1}`);
  }

  deleteOption(pos: number) {
    this.options = this.options.filter((item, index) => pos !== index);
  }

  changeType(e: any) {
    this.question.type = e.detail.value;
    console.log(e)
  }

  updateOptions(index: number, evt: any) {
    this.options[index] = evt.detail.value;

    console.log(this.options)
  }

  async handleSubmitQuestion() {

    if (!this.formQuestion.valid) {
      this.formQuestion.touched;
      return;
    }

    const formData = this.formQuestion.value;

    if (this.question.type == 'options') {
      formData['options'] = this.options
    } else {
      formData['options'] = [];
    }

    try {
      await this.questionService.updateQuestion(this.question.id, formData);
      console.log(formData);
    } catch (err) {
      console.log(err)
    }
  }

  async handleDeleteQuestion() {
    try {
      await this.questionService.deleteQuestion(this.question.id);
      this.questionDeleted.emit(true)
    } catch (err) {

    }
  }
}
