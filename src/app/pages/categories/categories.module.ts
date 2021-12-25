import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoriesRoutingModule } from './categories.routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { CategoriesService } from 'src/app/services/categories.service';
import { CategoriesComponent } from './categories.component';

@NgModule({
  imports: [
    CommonModule,
    CategoriesRoutingModule,
    SharedModule,
  ],
  declarations: [
    CategoriesComponent
  ],
  providers: [CategoriesService]
})
export class CategoriesModule { }
