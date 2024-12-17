import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SchoolServiceService } from 'src/app/services/school-service.service';

@Component({
  selector: 'app-school-create',
  templateUrl: './school-create.page.html',
  styleUrls: ['./school-create.page.scss'],
})
export class SchoolCreatePage implements OnInit {

  public formCreate: FormGroup;

  constructor(
    private schoolService: SchoolServiceService,
    private router: Router
  ) {
    this.formCreate = new FormGroup({
      name: new FormControl('', Validators.required),
      description: new FormControl('')
    })
  }

  ngOnInit() {
  }

  async handleSaveForm() {
    if (!this.formCreate.valid) {
      this.formCreate.markAllAsTouched();
      return;
    }

    try {
      const response = await this.schoolService.saveSchool(this.formCreate.value);
      this.router.navigate(['/dashboard/schools'])
    } catch (err) {
      console.log(err);
    }
  }

}
