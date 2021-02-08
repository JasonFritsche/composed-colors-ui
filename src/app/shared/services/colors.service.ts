import { Injectable } from '@angular/core';
import { from, Observable, of, Subject } from 'rxjs';
import { ColorPalette } from '../interfaces/Colors';

@Injectable({
  providedIn: 'root',
})
export class ColorsService {
  constructor() {}

  // userColorPalettes: Array<ColorPalette> = [];
  private userColorPaletteSubject = new Subject<ColorPalette>();

  userColorPalette$ = this.userColorPaletteSubject.asObservable();

  addUserColorPalette(palette: ColorPalette) {
    this.userColorPaletteSubject.next(palette);
  }
}
