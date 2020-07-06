import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'planetas',
    pathMatch: 'full'
  },
  {
    path: 'planetas',
    loadChildren: () => import('./pages/planetas/planetas.module').then(m => m.PlanetasPageModule)
  },
  {
    path: 'detail-planet',
    loadChildren: () => import('./pages/detail-planet/detail-planet.module').then( m => m.DetailPlanetPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
