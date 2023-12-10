import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormBuilder, FormControl, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {CvService} from "../services/cv.service";
import {ToastrService} from "ngx-toastr";
import {Observable} from 'rxjs';

@Component({
  selector: 'app-add-cv',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './add-cv.component.html',
  styleUrl: './add-cv.component.css'
})
export class AddCvComponent  {

  constructor(private formBuilder: FormBuilder, private cvService: CvService, private toastr: ToastrService) {
  }



  addCvForm = this.formBuilder.group({
    firstname: new FormControl(null, Validators.required),
    name: new FormControl(null, Validators.required),
    age: new FormControl(null, [Validators.min(30), Validators.max(60)]),
    job: new FormControl(null),
    cin: new FormControl(null, [Validators.min(1000000), Validators.max(9999999)]),
    path: new FormControl(null),
  });

  canExit(component: AddCvComponent): boolean {
    if (component.addCvForm.dirty) {
      return confirm('Are you sure you want to discard your changes?');
    }
    return true;
  }


  onSubmit() {
    this.cvService.addPerson(this.addCvForm.value).subscribe(
      {
        next: (data) => {
          this.toastr.success('Person added successfully', 'Success', {
            timeOut: 1000,
            toastClass:
              'absolute top-0 left-1/2 transform -translate-x-1/2 text-gray-900 p-4 rounded-md bg-green-200',
          });
          this.addCvForm.reset();
        },
        error: (error) => {
          this.toastr.error('Person not added', 'Error', {
            timeOut: 1000,
            toastClass:
              'absolute top-0 left-1/2 transform -translate-x-1/2 text-gray-900 p-4 rounded-md bg-green-200',
          });
        },
      })
  }

}
