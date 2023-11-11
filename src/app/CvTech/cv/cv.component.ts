import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from '../list/list.component';
import { CvDetailsComponent } from '../cv-details/cv-details.component';
import { Person } from '../../models/person.model';

@Component({
  selector: 'app-cv',
  standalone: true,
  imports: [CommonModule, ListComponent, CvDetailsComponent],
  templateUrl: './cv.component.html',
  styleUrl: './cv.component.css'
})
export class CvComponent implements OnInit {

  persons: Person[] = [];
  selectedPerson?: Person;
  constructor() {}

  ngOnInit(): void {
    this.persons = [
      new Person(1, 'John', 'Smith', 45, 'Developer', 'assets/images/smith.png', 123456, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor.'),
      new Person(2, 'Jane', 'Doe', 25, 'Designer', 'assets/images/doe.png', 654321, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed gravida augue elit, vitae lobortis purus hendrerit at. Pellentesque fermentum id.'),
      new Person(3, 'Lightning', 'McQueen', 5, 'Racer', 'assets/images/mcQueen.png', 987654,'KA-CHOW!'),
      new Person(4, 'Buzz', 'Lightyear', 10, 'Space Ranger', 'assets/images/buzz.jpg', 456789,'To infinity, and beyond!'),
      new Person(5, 'Ken', 'Carson', 35, 'Beach', 'assets/images/ken.jpg', 159357,'I\'m trained to stand confidently here.')
    ];
  }

  personSelected(person: Person) {
    console.log('Person selected', person);
    this.selectedPerson = person;
  }
  
}
