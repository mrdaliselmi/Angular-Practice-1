import { Injectable } from '@angular/core';
import { Person } from '../../models/person.model';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root',
})
export class HiringService {
  private persons: Person[] = [];
  constructor(
    private toastr: ToastrService
  ) {}

  getHired(): Person[] {
    return this.persons;
  }

  hire(person: Person): void {
    const index = this.persons.indexOf(person);
    if (index === -1) {
      this.persons.push(person);
    } else {
      this.toastr.warning(`${person.firstName} is already hired!`, '', { timeOut: 1000, toastClass: 'absolute top-0 left-1/2 transform -translate-x-1/2 text-gray-900 p-4 rounded-md bg-yellow-200' });
    }
  }

  fire(person: Person): void {
    const index = this.persons.findIndex((p) => p.id === person.id);
    if (index === -1) {
      this.toastr.warning(`${person.firstName} is not hired!`, '', { timeOut: 1000, toastClass: 'absolute top-0 left-1/2 transform -translate-x-1/2 text-gray-900 p-4 rounded-md bg-yellow-200' });
    } else {
      this.persons.splice(index, 1);
    }
  }
}
