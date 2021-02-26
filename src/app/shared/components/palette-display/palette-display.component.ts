import { Component, Input, OnInit } from '@angular/core';
import { ColorPalette } from '../../interfaces/Colors';

@Component({
  selector: 'app-palette-display',
  templateUrl: './palette-display.component.html',
  styleUrls: ['./palette-display.component.scss'],
})
export class PaletteDisplayComponent implements OnInit {
  @Input() colorPalettes: Array<ColorPalette> = [];
  panelOpenState = false;
  colorValueType: string = 'rgba';

  constructor() {}

  ngOnInit(): void {}

  onDisplayOptionChange(displayValue: string): void {
    console.log(displayValue);
    displayValue === 'hsva'
      ? (this.colorValueType = 'hsva')
      : (this.colorValueType = 'rgba');
  }
}
