import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MantencionPageRoutingModule } from './mantencion-routing.module';

import { MantencionPage } from './mantencion.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MantencionPageRoutingModule
  ],
  declarations: [MantencionPage]
})
export class MantencionPageModule {}
