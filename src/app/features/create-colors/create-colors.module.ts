import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CreateColorsRoutingModule } from './create-colors-routing.module';
import { CreateColorsComponent } from './create-colors/create-colors.component';

@NgModule({
  declarations: [CreateColorsComponent],
  imports: [CommonModule, CreateColorsRoutingModule],
})
export class CreateColorsModule {}
