import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaletteDisplayComponent } from './components/palette-display/palette-display.component';
<<<<<<< HEAD

@NgModule({
  declarations: [PaletteDisplayComponent],
=======
import { ColorsDisplayComponent } from './components/palette-display/colors-display/colors-display.component';

@NgModule({
  declarations: [PaletteDisplayComponent, ColorsDisplayComponent],
>>>>>>> main
  imports: [CommonModule],
  exports: [PaletteDisplayComponent],
})
export class SharedModule {}
