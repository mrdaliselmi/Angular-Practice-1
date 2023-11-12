import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Person } from '../../models/person.model';
import { HiringService } from '../services/hiring.service';

@Component({
  selector: 'app-hiring',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hiring.component.html',
  styleUrl: './hiring.component.css'
})
export class HiringComponent implements OnInit {

  persons: Person[] = [];
  constructor(
    private hiringService: HiringService,
  ) { }

  ngOnInit() {
    this.persons = this.hiringService.getHired();
  }

}
