import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from '../list/list.component';
import { CvDetailsComponent } from '../cv-details/cv-details.component';
import { Person } from '../../models/person.model';
import { CvService } from '../services/cv.service';
import { HiringComponent } from '../hiring/hiring.component';

@Component({
  selector: 'app-cv',
  standalone: true,
  imports: [CommonModule, ListComponent, CvDetailsComponent, HiringComponent],
  templateUrl: './cv.component.html',
  styleUrl: './cv.component.css',
})
export class CvComponent implements OnInit {
  isAuthenticated: boolean = false;
  persons: Person[] = [];
  selectedPerson?: Person;
  constructor(private cvService: CvService,) {

  }

  ngOnInit(): void {
    this.persons = this.cvService.getPersons();
  }

  personSelected(person: Person) {
    console.log('Person selected', person);
    this.selectedPerson = person;
  }
}
