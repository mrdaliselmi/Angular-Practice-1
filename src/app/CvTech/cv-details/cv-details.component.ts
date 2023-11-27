import {Component, Input, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import { Person } from '../../models/person.model';
import { HiringService } from '../services/hiring.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import {DefaultImagePipe} from "../pipes/default-image.pipe";

@Component({
  selector: 'app-cv-details',
  standalone: true,
  imports: [CommonModule, DefaultImagePipe],
  templateUrl: './cv-details.component.html',
  styleUrl: './cv-details.component.css',
})
export class CvDetailsComponent{
  @Input() person?: Person;

  constructor(
    private hiringService: HiringService,
    private router: Router,
  ) {}


  hire() {
    if (this.person) {
      this.hiringService.hire(this.person);
    }
  }
  moreDetails() {
    const link = ['cv', this.person?.id];
    this.router.navigate(link);
  }
}
