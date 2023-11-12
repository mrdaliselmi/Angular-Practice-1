import { Injectable } from '@angular/core';
import { Person } from '../../models/person.model';

@Injectable({
  providedIn: 'root',
})
export class HiringService {
  private persons: Person[] = [];
  constructor() {}

  getHired(): Person[] {
    return this.persons;
  }

  hire(person: Person): void {
    const index = this.persons.indexOf(person);
    if (index === -1) {
      this.persons.push(person);
    } else {
      alert(`${person.firstName} is already hired!`);
    }
  }

  fire(person: Person): void {
    const index = this.persons.findIndex((p) => p.id === person.id);
    if (index === -1) {
      alert(`${person.firstName} is not hired!`);
    } else {
      this.persons.splice(index, 1);
    }
  }
}
