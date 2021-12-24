import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoriesRoutingModule } from './categories.routing.module';
import { SingleCategorieFormComponent } from './crud-categories/single-categorie-form/single-categorie-form.component';
import { SingleCategorieViewComponent } from './crud-categories/single-categorie-view/single-categorie-view.component';
import { CategoriesListComponent } from './crud-categories/categories-list/categories-list.component';

@NgModule({
  imports: [
    CommonModule,
    CategoriesRoutingModule
  ],
  declarations: [
    SingleCategorieFormComponent,
    SingleCategorieViewComponent,
    CategoriesListComponent
  ]
})
export class CategoriesModule { }
