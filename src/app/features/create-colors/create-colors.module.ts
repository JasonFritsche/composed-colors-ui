import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../../shared/material/material.module';
import { ReactiveFormsModule } from '@angular/forms';

import { ColorPickerModule } from '@iplab/ngx-color-picker';

import { CreateColorsRoutingModule } from './create-colors-routing.module';
import { CreateColorsComponent } from './create-colors/create-colors.component';
import { CreatePaletteDialogComponent } from './create-colors/create-palette-dialog/create-palette-dialog.component';

@NgModule({
  declarations: [CreateColorsComponent, CreatePaletteDialogComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    CreateColorsRoutingModule,
    MaterialModule,
    ColorPickerModule,
  ],
})
export class CreateColorsModule {}
