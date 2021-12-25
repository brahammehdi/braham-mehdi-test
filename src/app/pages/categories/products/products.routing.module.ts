import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Error404Component } from 'src/app/shared/components/error404/error404.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ProductsComponent } from './products.component';
import { ViewSingleProductComponent } from './view-single-product/view-single-product.component';

const categoriesRoutes: Routes = [
    {
        path: '',
        component: ProductsComponent
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
                component: ViewSingleProductComponent,
            },
        ] // add guard on product id to grant access to the product
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
