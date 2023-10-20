import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AirePage } from './aire.page';

const routes: Routes = [
  {
    path: '',
    component: AirePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AirePageRoutingModule {}
