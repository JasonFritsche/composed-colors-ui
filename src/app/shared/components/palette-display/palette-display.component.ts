import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { ColorPalette } from '../../interfaces/Colors';

@Component({
  selector: 'app-palette-display',
  templateUrl: './palette-display.component.html',
  styleUrls: ['./palette-display.component.scss'],
})
export class PaletteDisplayComponent implements OnInit {
  @Input() colorPalettes: Array<ColorPalette> = [];

  constructor() {}

  ngOnInit(): void {}

  getColorDisplayStyles(colorsLength: number) {
    return {
      display: 'grid',
      'grid-template-columns': `repeat(${colorsLength}, calc(4em + 10%))`,
      'justify-items': 'start',
    };
  }

  ngOnChanges(changes: SimpleChanges) {}
}
