import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Person } from '../../models/person.model';
import { CvService } from '../services/cv.service';
import { ActivatedRoute, Router } from '@angular/router';
import {DefaultImagePipe} from "../pipes/default-image.pipe";

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
  ) {}
  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      const id = params['id'];
      // console.log("id",id);
      this.person = this.cvService.getPersonById(id);
      // console.log("found it",this.person);
    });
  }

  delete(): void {
    if (this.person?.id) this.cvService.deletePersonById(this.person?.id);
    this.router.navigate(['cv']);
  }
}
