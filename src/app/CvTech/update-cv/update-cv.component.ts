import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ActivatedRoute} from "@angular/router";
import {CvService} from "../services/cv.service";
import {Person} from "../../models/person.model";
import {FormBuilder, FormControl, ReactiveFormsModule, Validators} from "@angular/forms";
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-update-cv',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './update-cv.component.html',
  styleUrl: './update-cv.component.css'
})
export class UpdateCvComponent {
  person?: Person;
  name:string="";

  constructor(private activatedRoute: ActivatedRoute, private cvService: CvService, private formBuilder: FormBuilder, private toastr: ToastrService) {
  }

  ngOnInit(): void {
    this.person= history.state.person;
    console.log(this.person)
  }

  updateCvForm = this.formBuilder.group({
    firstname: new FormControl(this.person?.firstName),
    name: new FormControl(this.person?.lastName),
    age: new FormControl(this.person?.age, ),
    job: new FormControl(this.person?.occupation),
    cin: new FormControl(this.person?.cin, ),
    path: new FormControl(this.person?.imagePath),
  });


  onSubmit() {
    this.cvService.updatePerson(this.person?.id, this.updateCvForm.value).subscribe(
      {
        next: (data) => {
          this.toastr.success('Person updated successfully', 'Success', {
            timeOut: 1000,
            toastClass:
              'absolute top-0 left-1/2 transform -translate-x-1/2 text-gray-900 p-4 rounded-md bg-green-200',
          });
        },
        error: (error) => {
          this.toastr.error('Person not updated', 'Error', {
            timeOut: 1000,
            toastClass:
              'absolute top-0 left-1/2 transform -translate-x-1/2 text-gray-900 p-4 rounded-md bg-green-200',
          });
        },
      })
  }
}
