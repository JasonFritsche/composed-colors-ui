import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateColorsComponent } from './create-colors/create-colors.component';

const routes: Routes = [
  {
    path: '',
    component: CreateColorsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CreateColorsRoutingModule {}
