import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RainbowStyleDirective } from '../rainbow-style.directive';
@Component({
  selector: 'app-rainbow-style-writer',
  standalone: true,
  imports: [CommonModule, FormsModule, RainbowStyleDirective],
  templateUrl: './rainbow-style-writer.component.html',
  styleUrl: './rainbow-style-writer.component.css',
})
export class RainbowStyleWriterComponent {}
