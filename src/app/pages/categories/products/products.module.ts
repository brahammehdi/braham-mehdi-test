import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsService } from 'src/app/services/produtcs.service';
import { SharedModule } from 'src/app/shared/shared.module';
import { ProductsRoutingModule } from './products.routing.module';
import { ProductsComponent } from './products.component';
import { ViewSingleProductComponent } from './view-single-product/view-single-product.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    ProductsRoutingModule
  ],
  declarations: [
    ProductsComponent,
    ViewSingleProductComponent
  ],
  providers: [
    ProductsService,
  ]

})
export class ProductsModule { }
