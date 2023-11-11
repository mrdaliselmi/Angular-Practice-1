import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appRainbowStyle]',
  standalone: true,
})
export class RainbowStyleDirective {
  @HostBinding('style.color') textColor: string;
  @HostBinding('style.borderColor') borderColor: string;

  constructor() {
    this.textColor = 'gray';
    this.borderColor = 'gray';
  }
  @HostListener('keyup') onKeyUp() {
    this.changeColor();
  }

  private changeColor() {
    const randomR = Math.floor(Math.random() * 256);
    const randomG = Math.floor(Math.random() * 256);
    const randomB = Math.floor(Math.random() * 256);

    const rgbColor = `rgb(${randomR}, ${randomG}, ${randomB})`;

    this.textColor = rgbColor;
    this.borderColor = rgbColor;
  }
}
