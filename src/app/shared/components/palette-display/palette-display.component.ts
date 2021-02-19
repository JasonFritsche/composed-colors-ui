import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { Color, ColorPalette } from '../../interfaces/Colors';

@Component({
  selector: 'app-palette-display',
  templateUrl: './palette-display.component.html',
  styleUrls: ['./palette-display.component.scss'],
})
export class PaletteDisplayComponent implements OnInit {
  @Input() colorPalettes: Array<ColorPalette> = [];

  constructor() {}

  ngOnInit(): void {}

  ngOnChanges(changes: SimpleChanges) {}
}
