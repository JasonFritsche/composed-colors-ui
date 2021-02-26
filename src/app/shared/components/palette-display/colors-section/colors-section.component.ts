import { Component, Input, OnInit } from '@angular/core';
import { Color } from '../../../interfaces/Colors';

interface DisplayOption {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-colors-section',
  templateUrl: './colors-section.component.html',
  styleUrls: ['./colors-section.component.scss'],
})
export class ColorsSectionComponent implements OnInit {
  @Input() colors: any;
  hoveredColorIndex = 99;
  colorValueType = 'rgba';
  colorValue = '';

  displayOptions: DisplayOption[] = [
    { value: 'rgba', viewValue: 'RGBA' },
    { value: 'hsva', viewValue: 'HSVA' },
  ];

  constructor() {}

  ngOnInit(): void {
    this.hoveredColorIndex = 99;
  }

  private _getRgba(color: Color): string {
    const { red, blue, alpha, green } = { ...color.rgba };
    return `rbga(${this._twoDecimals(red)}, ${this._twoDecimals(
      blue
    )}, ${this._twoDecimals(green)}, ${this._twoDecimals(alpha)})`;
  }

  private _getHsva(color: Color): string {
    const { red, blue, alpha, green } = { ...color.rgba };
    return `hsva(${this._twoDecimals(red)}, ${this._twoDecimals(
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

  getColorValue(color: Color): string {
    return this.colorValueType === 'rgba'
      ? this._getRgba(color)
      : this._getHsva(color);
  }

  onDisplayOptionChange(): void {
    this.colorValueType === 'hsva'
      ? (this.colorValueType = 'rgba')
      : (this.colorValueType = 'hsva');
  }
}
