import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { Color } from 'src/app/shared/interfaces/Colors';

@Component({
  selector: 'app-colors-display',
  templateUrl: './colors-display.component.html',
  styleUrls: ['./colors-display.component.scss'],
})
export class ColorsDisplayComponent implements OnInit, OnChanges {
  @Input() colorObj: any;
  circleColor: string;

  constructor() {
    this.circleColor = 'rgba(1,1,1,1)';
  }

  ngOnInit(): void {}

  private _generateColor(): void {
    const color: Color = this.colorObj.color;
    if (color.rgba) {
      this._setCircleColor(color.rgba);
    }
  }

  private _setCircleColor(rgba: Color['rgba']) {
    this.circleColor = `rgba(${rgba.red},${rgba.green},${rgba.blue},${rgba.alpha})`;
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.colorObj.currentValue) {
      this._generateColor();
    }
  }
}
