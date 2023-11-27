import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from '../list/list.component';
import { CvDetailsComponent } from '../cv-details/cv-details.component';
import { Person } from '../../models/person.model';
import { CvService } from '../services/cv.service';
import { HiringComponent } from '../hiring/hiring.component';
import {FormsModule} from "@angular/forms";
import {AutoCompleteComponent} from "../auto-complete/auto-complete.component";

@Component({
  selector: 'app-cv',
  standalone: true,
  imports: [CommonModule, ListComponent, CvDetailsComponent, HiringComponent, FormsModule, AutoCompleteComponent],
  templateUrl: './cv.component.html',
  styleUrl: './cv.component.css',
})
export class CvComponent implements OnInit {
  isAuthenticated: boolean = false;
  persons: Person[] = [];
  selectedPerson?: Person;
  filteredPersons: Person[] = this.persons;
  searchPerson: string = '';
  constructor(private cvService: CvService) {}

  ngOnInit(): void {
    this.persons = this.cvService.getPersons("");
  }
  search() {
    this.persons= this.cvService.getPersons(this.searchPerson);
  }
  personSelected(person: Person) {
    this.selectedPerson = person;
  }
  AgeGroup(ageGroup:string){
    if (ageGroup === 'junior') {
      // @ts-ignore
      this.filteredPersons = this.persons.filter(person => person.age < 40);
    } else if (ageGroup === 'senior') {
      // @ts-ignore
      this.filteredPersons = this.persons.filter(person => person.age >= 40);
    } else {
      this.filteredPersons = this.persons;
    }
  }
}
