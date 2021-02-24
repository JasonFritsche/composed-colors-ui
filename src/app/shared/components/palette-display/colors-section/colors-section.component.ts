import { Component, Input, OnInit } from '@angular/core';
import { Color } from '../../../interfaces/Colors';

@Component({
  selector: 'app-colors-section',
  templateUrl: './colors-section.component.html',
  styleUrls: ['./colors-section.component.scss'],
})
export class ColorsSectionComponent implements OnInit {
  @Input() colors: any;
  hoveredColorIndex: number = 99;

  constructor() {}

  ngOnInit(): void {}

  getRgba(color: Color): string {
    const { red, blue, alpha, green } = { ...color.rgba };
    return `rbga(${this._twoDecimals(red)}, ${this._twoDecimals(
      blue
    )}, ${this._twoDecimals(green)}, ${this._twoDecimals(alpha)})`;
  }

  private _twoDecimals(colorNum: number): string {
    return colorNum % 1 === 0 ? colorNum.toString() : colorNum.toFixed(2);
  }

  onMouseEnter(index: number): void {
    this.hoveredColorIndex = index;
  }

  onMouseLeave(): void {
    this.hoveredColorIndex = 99;
  }
}
