import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Person } from '../../models/person.model';
import {DefaultImagePipe} from "../pipes/default-image.pipe";

@Component({
  selector: 'app-list-item',
  standalone: true,
  imports: [CommonModule, DefaultImagePipe],
  templateUrl: './list-item.component.html',
  styleUrl: './list-item.component.css',
})
export class ListItemComponent {
  @Input() person?: Person;
  @Output() selected = new EventEmitter<Person>();

  constructor() {}

  sendPerson() {
    this.selected.emit(this.person);
  }
}
