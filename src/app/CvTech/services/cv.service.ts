import { Injectable } from '@angular/core';
import { Person } from '../../models/person.model';

@Injectable({
  providedIn: 'root',
})
export class CvService {
  private persons: Person[] = [];
  constructor() {
    this.persons = [
      new Person(
        1,
        'John',
        'Smith',
        45,
        'Developer',
        'assets/images/smith.png',
        123456,
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus.'
      ),
      new Person(
        2,
        'Jane',
        'Doe',
        25,
        'Designer',
        'assets/images/doe.png',
        654321,
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
      ),
      new Person(
        3,
        'Lightning',
        'McQueen',
        5,
        'Racer',
        'assets/images/mcQueen.png',
        987654,
        'KA-CHOW!'
      ),
      new Person(
        4,
        'Buzz',
        'Lightyear',
        10,
        'Space Ranger',
        'assets/images/buzz.jpg',
        456789,
        'To infinity, and beyond!'
      ),
      new Person(
        5,
        'Ken',
        'Carson',
        35,
        'Beach',
        'assets/images/ken.jpg',
        159357,
        "I'm trained to stand confidently here."
      ),
    ];
  }

  getPersons(): Person[] {
    return this.persons;
  }
}
