import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListItemComponent } from '../list-item/list-item.component';
import { Person } from '../../models/person.model';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [CommonModule, ListItemComponent],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  @Input() persons: Person[] = [];
  @Output() selected = new EventEmitter<Person>();
  constructor() { }
  
  personSelected(person: Person) {
    this.selected.emit(person);
  }

}
