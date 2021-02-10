import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { ColorPalette } from '../interfaces/Colors';

@Injectable({
  providedIn: 'root',
})
export class ColorsService {
  constructor(private _http: HttpClient) {}
  private _options = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  private userColorPaletteSubject = new Subject<ColorPalette>();

  userColorPalette$ = this.userColorPaletteSubject.asObservable();

  addUserColorPalette(palette: ColorPalette) {
    console.log('sending?');
    return this._http
      .post('http://localhost:3000/colors', palette, this._options)
      .subscribe((res) => console.log(res));
  }
}
