import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { MiniWordComponent } from './mini-word/mini-word.component';
import { FormsModule } from '@angular/forms';
import { RainbowStyleWriterComponent } from './rainbow-style-writer/rainbow-style-writer.component';
import { CvComponent } from './CvTech/cv/cv.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    MiniWordComponent,
    FormsModule,
    RainbowStyleWriterComponent,
    CvComponent,
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'TP1';
}
