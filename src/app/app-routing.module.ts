import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'aire',
    loadChildren: () => import('./aire/aire.module').then( m => m.AirePageModule)
  },
  {
    path: 'oficinas',
    loadChildren: () => import('./oficinas/oficinas.module').then( m => m.OficinasPageModule)
  },
  
 
  {
    path: 'mantencion',
    loadChildren: () => import('./mantencion/mantencion.module').then( m => m.MantencionPageModule)
  },

  {
    path: 'reparacion',
    loadChildren: () => import('./reparacion/reparacion.module').then( m => m.ReparacionPageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
