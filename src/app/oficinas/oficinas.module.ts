import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OficinasPageRoutingModule } from './oficinas-routing.module';

import { OficinasPage } from './oficinas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OficinasPageRoutingModule
  ],
  declarations: [OficinasPage]
})
export class OficinasPageModule {}
