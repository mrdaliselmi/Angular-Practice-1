import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListItemComponent } from '../list-item/list-item.component';
import { Person } from '../../models/person.model';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [CommonModule, ListItemComponent],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css',
})
export class ListComponent {
  @Input() persons: Person[] = [];
  @Output() selected = new EventEmitter<Person>();
  isAuthenticated: boolean = false;
  constructor(private authService: AuthService) {}
  ngOnInit(): void {
    this.authService.isAuthenticated$.subscribe(
      (isAuthenticated) => (this.isAuthenticated = isAuthenticated),
    );
    // Affiche l'identifiant de l'utilisateur
  }
  personSelected(person: Person) {
    this.selected.emit(person);
  }
}
