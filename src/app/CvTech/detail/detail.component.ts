import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Person } from '../../models/person.model';
import { CvService } from '../services/cv.service';
import { ActivatedRoute, Router } from '@angular/router';
import {DefaultImagePipe} from "../pipes/default-image.pipe";
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-detail',
  standalone: true,
  imports: [CommonModule, DefaultImagePipe],
  templateUrl: './detail.component.html',
  styleUrl: './detail.component.css',
})
export class DetailComponent implements OnInit {
  person?: Person;

  constructor(
    private cvService: CvService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private toaster: ToastrService,
  ) {}
  ngOnInit(): void {
     this.activatedRoute.data.subscribe(({person}) => {
      this.person = person;
      });
  }

  delete(): void {
    if (this.person?.id) this.cvService.deletePersonById(this.person?.id).subscribe({
      next: () => {
        this.router.navigate(['cv']);
        this.toaster.success(
          'Logout successful',
          'Success',
          {
            timeOut: 1000,
            toastClass:
              'absolute top-0 left-1/2 transform -translate-x-1/2 text-gray-900 p-4 rounded-md bg-green-200',
          }
        )
      },
      error: (err) => {
        this.toaster.error(err.message, 'Error', {
          timeOut: 1000,
          toastClass:
            'absolute top-0 left-1/2 transform -translate-x-1/2 text-gray-900 p-4 rounded-md bg-red-300',
        });
      },
    });
    this.router.navigate(['cv']);
  }
  update(): void {
    this.router.navigate(['updateCv'], {state: {person: this.person}});
  }
}
