import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Error404Component } from 'src/app/shared/components/error404/error404.component';
import { CategoriesComponent } from './categories.component';
const categoriesRoutes: Routes = [
    {
        path: '',
        component: CategoriesComponent
    },
    {
        path: ':categoryId',
        children: [
            {
                path: '',
                redirectTo: 'products',
                pathMatch: 'full'
            },
            {
                path: 'products',
                loadChildren: () => import('./products/products.module').then(m => m.ProductsModule),
            },
        ] // add guard on categorie id to grant aceess to category
    },
    {
        path: '**',
        component: Error404Component,
    },
];

@NgModule({
    imports: [
        RouterModule.forChild(categoriesRoutes)],
    exports: [RouterModule]
})
export class CategoriesRoutingModule { }
