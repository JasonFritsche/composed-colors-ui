import { Component, OnInit, SimpleChanges } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ColorPalette } from 'src/app/shared/interfaces/Colors';
import { CreatePaletteDialogComponent } from './create-palette-dialog/create-palette-dialog.component';
import { ColorsService } from '../../../shared/services/colors.service';

@Component({
  selector: 'app-create-colors',
  templateUrl: './create-colors.component.html',
  styleUrls: ['./create-colors.component.scss'],
})
export class CreateColorsComponent implements OnInit {
  colorPalettes: Array<ColorPalette> = [];
  private _contentText: string = '';

  constructor(
    private _dialog: MatDialog,
    private _colorsService: ColorsService
  ) {}

  ngOnInit(): void {
    this._colorsService.getUserColorPalettes().subscribe((res) => {
      this.colorPalettes = res;
      this._setContentText();
    });
    this._colorsService.userColorPalette$.subscribe((res) => {
      this.colorPalettes.push(res);
      this._setContentText();
    });
  }

  private _setContentText(): void {
    this._contentText =
      this.colorPalettes.length > 0
        ? 'Your Palettes'
        : 'No palettes...click the button to create one!';
  }

  getContentText(): string {
    return this._contentText;
  }

  createPalette(): void {
    const dialogRef = this._dialog.open(CreatePaletteDialogComponent, {
      disableClose: true,
      width: '90vw',
      height: '95vh',
      data: {},
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed');
    });
  }

  ngOnChanges(changes: SimpleChanges) {}
}
