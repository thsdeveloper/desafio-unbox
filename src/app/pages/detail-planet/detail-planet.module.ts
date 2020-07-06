import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetailPlanetPageRoutingModule } from './detail-planet-routing.module';

import { DetailPlanetPage } from './detail-planet.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetailPlanetPageRoutingModule
  ],
  declarations: [DetailPlanetPage]
})
export class DetailPlanetPageModule {}
