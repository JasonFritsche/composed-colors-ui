import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { ColorPalette, Color } from '../interfaces/Colors';

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
    return this._http
      .post<ColorPalette>(
        'http://localhost:3000/colors',
        palette,
        this._options
      )
      .subscribe((res) => {
        // TODO handle bad response
        this.userColorPaletteSubject.next(res);
      });
  }

  /**
   * Get all Palettes for a User
   * TODO pass in user credentials once authentication is set up
   */
  getUserColorPalettes() {
    return this._http.get<ColorPalette[]>('http://localhost:3000/colors');
  }
}
