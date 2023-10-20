import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OficinasPage } from './oficinas.page';

const routes: Routes = [
  {
    path: '',
    component: OficinasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OficinasPageRoutingModule {}
