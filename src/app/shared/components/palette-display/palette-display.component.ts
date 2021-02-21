import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { ColorPalette } from '../../interfaces/Colors';

@Component({
  selector: 'app-palette-display',
  templateUrl: './palette-display.component.html',
  styleUrls: ['./palette-display.component.scss'],
})
export class PaletteDisplayComponent implements OnInit {
  @Input() colorPalettes: Array<ColorPalette> = [];
  panelOpenState = false;

  constructor() {}

  ngOnInit(): void {}

  getDescriptionIconClass(): object {
    const transformValue = this.panelOpenState
      ? `rotate(360deg)`
      : `rotate(270deg)`;
    return {
      transform: `${transformValue}`,
      transition: 'transform .5s ease',
    };
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log(changes);
  }
}
