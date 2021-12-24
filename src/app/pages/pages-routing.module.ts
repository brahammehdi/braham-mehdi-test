import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Error404Component } from '../shared/components/error404/error404.component';
import { SharedModule } from '../shared/shared.module';

const PagesRoutes: Routes = [
  {
    path: '',
    redirectTo: 'categories',
    pathMatch: 'full'
  },
  {
    path: 'categories',
    loadChildren: () => import('./categories/categories.module').then(m => m.CategoriesModule),
  },
  {
    path: '**',
    component: Error404Component,
  },
];

@NgModule({
  imports: [RouterModule.forChild(PagesRoutes), SharedModule],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
