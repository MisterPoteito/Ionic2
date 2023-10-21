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
    path: 'verdura',
    loadChildren: () => import('./verdura/verdura.module').then( m => m.VerduraPageModule)
  },
  {
    path: 'fruta',
    loadChildren: () => import('./fruta/fruta.module').then( m => m.FrutaPageModule)
  },
  {
    path: 'item-detail',
    loadChildren: () => import('./item/item-detail/item-detail.module').then( m => m.ItemDetailPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
