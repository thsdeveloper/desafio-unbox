import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PlanetasPageRoutingModule } from './planetas-routing.module';

import { PlanetasPage } from './planetas.page';
import {SortPipe} from '../../pipes/sort.pipe';
import {JwPaginationModule} from 'jw-angular-pagination';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PlanetasPageRoutingModule,
    JwPaginationModule,
  ],
  providers: [SortPipe],
  declarations: [PlanetasPage, SortPipe]
})
export class PlanetasPageModule {}
