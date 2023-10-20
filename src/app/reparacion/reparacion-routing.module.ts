import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReparacionPage } from './reparacion.page';

const routes: Routes = [
  {
    path: '',
    component: ReparacionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReparacionPageRoutingModule {}
