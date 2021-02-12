import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaletteDisplayComponent } from './components/palette-display/palette-display.component';

@NgModule({
  declarations: [PaletteDisplayComponent],
  imports: [CommonModule],
  exports: [PaletteDisplayComponent],
})
export class SharedModule {}
