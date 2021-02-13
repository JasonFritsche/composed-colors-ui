import { Component, OnInit, HostListener } from '@angular/core';
import { FormBuilder, Validators, FormArray, FormGroup } from '@angular/forms';
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

  selectedColor: Color | undefined;
  selectedIndex!: number;
  isColorSelected: boolean = false;

  get colors() {
    return this.colorPaletteForm.get('colors') as FormArray;
  }

  constructor(
    private _formBuilder: FormBuilder,
    private _colorsService: ColorsService
  ) {}

  ngOnInit(): void {}

  @HostListener('click', ['$event']) onClick(e: MouseEvent) {
    const target = e.target as Element;
    if (
      target.parentNode?.nodeName.includes('CHROME-PICKER') ||
      target.parentNode?.nodeName.includes('RGBA-INPUT-COMPONENT') ||
      target.parentElement?.className.includes('column')
    ) {
      // keep selected color selected if the color picker is clicked
      return;
    } else if (!target?.className?.includes('color-circle')) {
      this.isColorSelected = false;
    }
  }

  addColor() {
    const newColor: Color = {
      hsva: this.chromeControl.value.getHsva(),
      rgba: this.chromeControl.value.getRgba(),
    };

    if (this.isColorSelected) {
      this.colors.at(this.selectedIndex).get('color')?.patchValue(newColor);
    } else {
      let newColorGroup: FormGroup = this._formBuilder.group({
        color: [newColor],
        colorName: [''],
      });

      this.colors.push(newColorGroup);
    }
  }

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
    this._colorsService.addUserColorPalette(colorPalette);
  }

  /**
   * Called when clicking a color
   * Sets the selectedColorObj so that the selected color can be edited/updated
   * @param index
   */
  selectColor(index: number): void {
    this.isColorSelected = true;
    this.selectedIndex = index;
  }
}
