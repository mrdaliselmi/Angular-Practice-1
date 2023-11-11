import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from '../list/list.component';
import { CvDetailsComponent } from '../cv-details/cv-details.component';

@Component({
  selector: 'app-cv',
  standalone: true,
  imports: [CommonModule, ListComponent, CvDetailsComponent],
  templateUrl: './cv.component.html',
  styleUrl: './cv.component.css'
})
export class CvComponent {

}
