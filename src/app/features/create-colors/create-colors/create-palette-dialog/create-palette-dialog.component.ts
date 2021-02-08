import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  Validators,
  FormArray,
  FormGroup,
  AbstractControl,
} from '@angular/forms';
import { ColorPickerControl, ColorsTable } from '@iplab/ngx-color-picker';
import { Color } from 'src/app/shared/interfaces/Colors';
import { ColorsService } from '../../../../shared/services/colors.service';
import { ColorPalette } from '../../../../shared/interfaces/Colors';

@Component({
  selector: 'app-create-palette-dialog',
  templateUrl: './create-palette-dialog.component.html',
  styleUrls: ['./create-palette-dialog.component.scss'],
})
export class CreatePaletteDialogComponent implements OnInit {
  chromeControl = new ColorPickerControl()
    .setValueFrom(ColorsTable.aquamarine)
    .hidePresets()
    .hideAlphaChannel();

  colorPaletteForm = this._formBuilder.group({
    paletteName: ['', Validators.required],
    colors: this._formBuilder.array([]),
    description: ['', Validators.required],
  });

  get colors() {
    return this.colorPaletteForm.get('colors') as FormArray;
  }

  addColor() {
    const newColor: Color = {
      hsva: this.chromeControl.value.getHsva(),
      rgba: this.chromeControl.value.getRgba(),
    };

    let newColorGroup: FormGroup = this._formBuilder.group({
      color: [newColor],
      colorName: [''],
    });

    this.colors.push(newColorGroup);
  }

  constructor(
    private _formBuilder: FormBuilder,
    private _colorsService: ColorsService
  ) {}

  ngOnInit(): void {}

  getCircleColor(circle: Color): string {
    const { alpha, blue, green, red } = { ...circle.rgba };
    return `rgba(${red},${green},${blue},${alpha})`;
  }

  savePalette(): void {
    const colorPalette: ColorPalette = {
      paletteName: this.colorPaletteForm.get('paletteName')?.value,
      colors: this.colorPaletteForm.get('colors')?.value,
      description: this.colorPaletteForm.get('description')?.value,
    };
    console.log(colorPalette);
    this._colorsService.addUserColorPalette(colorPalette);
  }

  onNoClick() {
    console.log('clicked');
  }

  onFocus() {
    console.log('focused now');
  }

  onBlur() {
    console.log('blurred now');
  }
}
