import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';

const x = [MatSidenavModule, MatToolbarModule, MatIconModule];

@NgModule({
  declarations: [],
  imports: [CommonModule, ...x],
  exports: [...x],
})
export class MaterialModule {}
