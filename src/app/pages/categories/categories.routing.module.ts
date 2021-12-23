import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CategoriesListComponent } from './crud-categories/categories-list/categories-list.component';
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
        component: SingleCategorieViewComponent
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
                path: 'view',
                component: SingleCategorieViewComponent
            },
            {
                path: 'edit',
                component: SingleCategorieViewComponent
            },
            {
                path: 'products',
                loadChildren: () => import('./products/products.module').then(m => m.ProductsModule),
            },
        ]
    },
];

@NgModule({
    imports: [RouterModule.forChild(categoriesRoutes)],
    exports: [RouterModule]
})
export class CategoriesRoutingModule { }
