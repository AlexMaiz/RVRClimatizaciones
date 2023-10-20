import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AirePageRoutingModule } from './aire-routing.module';

import { AirePage } from './aire.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AirePageRoutingModule
  ],
  declarations: [AirePage]
})
export class AirePageModule {}
