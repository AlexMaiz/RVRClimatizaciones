import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MantencionPage } from './mantencion.page';

const routes: Routes = [
  {
    path: '',
    component: MantencionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MantencionPageRoutingModule {}
