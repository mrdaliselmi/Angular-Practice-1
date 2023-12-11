import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListItemComponent } from '../list-item/list-item.component';
import { Person } from '../../models/person.model';
import {UserStore} from "../../store/user.store";

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [CommonModule, ListItemComponent],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css',
})
export class ListComponent {
  ageGroup :string = "";
  @Input() persons: Person[] = [];
  @Output() selected = new EventEmitter<Person>();
  isAuthenticated: boolean = !!localStorage.getItem('token');
  filteredPersons: Person[] = this.persons;

  constructor(private userStore: UserStore) {}
  ngOnInit(): void {
    this.userStore.isAuthenticated().subscribe(
      (isAuthenticated) => (this.isAuthenticated = isAuthenticated || !!localStorage.getItem('token')),
    );

  }
  personSelected(person: Person) {
    this.selected.emit(person);
  }

}
