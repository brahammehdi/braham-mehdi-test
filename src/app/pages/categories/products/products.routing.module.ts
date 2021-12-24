import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Error404Component } from 'src/app/shared/components/error404/error404.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ProductsListComponent } from './crud-product/products-list/products-list.component';
import { SingleProductFormComponent } from './crud-product/single-product-form/single-product-form.component';
import { SingleProductViewComponent } from './crud-product/single-product-view/single-product-view.component';

const categoriesRoutes: Routes = [
    {
        path: '',
        redirectTo: 'list',
        pathMatch: 'full'
    },
    {
        path: 'list',
        component: ProductsListComponent
    },
    {
        path: 'add',
        component: SingleProductFormComponent
    },
    {
        path: ':ProductId',
        children: [
            {
                path: '',
                redirectTo: 'view',
                pathMatch: 'full'
            },
            {
                path: 'view',
                component: SingleProductViewComponent
            },
            {
                path: 'edit',
                component: SingleProductFormComponent
            },
        ] // add guard on product id
    },
    {
        path: '**',
        component: Error404Component,
      },
];

@NgModule({
    imports: [RouterModule.forChild(categoriesRoutes), SharedModule],
    exports: [RouterModule]
})
export class ProductsRoutingModule { }
