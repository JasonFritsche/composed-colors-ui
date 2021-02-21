import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material/material.module';
import { PaletteDisplayComponent } from './components/palette-display/palette-display.component';
import { ColorsDisplayComponent } from './components/palette-display/colors-display/colors-display.component';

@NgModule({
  declarations: [PaletteDisplayComponent, ColorsDisplayComponent],
  imports: [CommonModule, MaterialModule],
  exports: [PaletteDisplayComponent],
})
export class SharedModule {}
