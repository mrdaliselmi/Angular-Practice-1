import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-mini-word',
  standalone: true,
  templateUrl: './mini-word.component.html',
  styleUrls: ['./mini-word.component.css'],
  imports: [FormsModule, CommonModule],
})
export class MiniWordComponent {
  textColor: string = '#000000'; // couleur par défaut
  fontSize: number = 16; // taille par défaut
  selectedFont: string = 'Arial'; // police par défaut

  textStyles: any = {};
  applyStyles() {
    this.textStyles = {
      color: this.textColor,
      'font-size': this.fontSize + 'px',
      'font-family': this.selectedFont,
    };
  }
}
