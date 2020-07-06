import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetailPlanetPage } from './detail-planet.page';

const routes: Routes = [
  {
    path: '',
    component: DetailPlanetPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetailPlanetPageRoutingModule {}
