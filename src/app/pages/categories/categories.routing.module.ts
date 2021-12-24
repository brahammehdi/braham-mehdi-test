import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Error404Component } from 'src/app/shared/components/error404/error404.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { CategoriesListComponent } from './crud-categories/categories-list/categories-list.component';
import { SingleCategorieFormComponent } from './crud-categories/single-categorie-form/single-categorie-form.component';
import { SingleCategorieViewComponent } from './crud-categories/single-categorie-view/single-categorie-view.component';

const categoriesRoutes: Routes = [
    {
        path: '',
        redirectTo: 'list',
        pathMatch: 'full'
    },
    {
        path: 'list',
        component: CategoriesListComponent
    },
    {
        path: 'add',
        component: SingleCategorieFormComponent
    },
    {
        path: ':categoryId',
        children: [
            {
                path: '',
                redirectTo: 'view',
                pathMatch: 'full'
            },
            {
                path: 'edit',
                component: SingleCategorieFormComponent
            },
            {
                path: 'products',
                loadChildren: () => import('./products/products.module').then(m => m.ProductsModule),
            },
        ] // add guard on categorie id
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
