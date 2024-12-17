import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { School } from 'src/app/models/School';
import { SchoolServiceService } from 'src/app/services/school-service.service';

@Component({
  selector: 'app-school-edit',
  templateUrl: './school-edit.page.html',
  styleUrls: ['./school-edit.page.scss'],
})
export class SchoolEditPage implements OnInit {

  public formEditSchool: FormGroup
  schoolId: any;
  public questions: School[] = [];

  constructor(
    private activateRoute: ActivatedRoute,
    private schoolService: SchoolServiceService,
    private router: Router
  ) {
    this.formEditSchool = new FormGroup({
      name: new FormControl('', Validators.required),
      description: new FormControl('')
    })
    this.schoolId = this.activateRoute.snapshot.paramMap.get('id');
  }

  ngOnInit() {
    this.fetchSchool();
  }

  async fetchSchool() {
    try {
      const response = await this.schoolService.getSchool(this.schoolId)

      this.formEditSchool.controls['name'].setValue(response.data.name)
      this.questions = response.data.questions;
    } catch (err) {
      console.log(err)
    }
  }

  async handleUpdateSchool() {

    if (!this.formEditSchool.valid) {
      this.formEditSchool.markAllAsTouched();
      return;
    }

    try {
      const response = await this.schoolService.updateSchool(this.schoolId, this.formEditSchool.value);
      this.router.navigate(['/dashboard/schools'])
    } catch (err) {
      console.log(err);
    }
  }
}
