import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from '../list/list.component';
import { CvDetailsComponent } from '../cv-details/cv-details.component';
import { Person } from '../../models/person.model';
import { CvService } from '../services/cv.service';
import { HiringComponent } from '../hiring/hiring.component';
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-cv',
  standalone: true,
  imports: [CommonModule, ListComponent, CvDetailsComponent, HiringComponent, FormsModule],
  templateUrl: './cv.component.html',
  styleUrl: './cv.component.css',
})
export class CvComponent implements OnInit {
  isAuthenticated: boolean = false;
  persons: Person[] = [];
  selectedPerson?: Person;
  filteredPersons: Person[] = this.persons;
  ageGroup :string = "";
  searchPerson: string = '';
  constructor(private cvService: CvService) {}

  ngOnInit(): void {
    this.persons = this.cvService.getPersons("");
  }
  search() {
    this.persons= this.cvService.getPersons(this.searchPerson);
  }
  personSelected(person: Person) {
    console.log('Person selected', person);
    this.selectedPerson = person;
  }
  AgeGroup(ageGroup:string){
    this.ageGroup = ageGroup;
    console.log(this.ageGroup)
    if (ageGroup === 'junior') {
      // @ts-ignore
      this.filteredPersons = this.persons.filter(person => person.age < 18);
    } else if (ageGroup === 'senior') {
      // @ts-ignore
      this.filteredPersons = this.persons.filter(person => person.age >= 18);
    } else {
      this.filteredPersons = this.persons;
    }
  }
}
