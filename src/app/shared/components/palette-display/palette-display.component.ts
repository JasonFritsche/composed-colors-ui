import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { Color, ColorPalette } from '../../interfaces/Colors';

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

  getRgba(color: Color): string {
    const { red, blue, alpha, green } = { ...color.rgba };
    return `rbga(${this._twoDecimals(red)}, ${this._twoDecimals(
      blue
    )}, ${this._twoDecimals(green)}, ${this._twoDecimals(alpha)})`;
  }

  private _twoDecimals(colorNum: number): string {
    return colorNum % 1 === 0 ? colorNum.toString() : colorNum.toFixed(2);
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log(changes);
  }
}
