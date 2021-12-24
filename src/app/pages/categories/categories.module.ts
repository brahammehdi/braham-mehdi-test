import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoriesRoutingModule } from './categories.routing.module';
import { SingleCategorieFormComponent } from './crud-categories/single-categorie-form/single-categorie-form.component';
import { SingleCategorieViewComponent } from './crud-categories/single-categorie-view/single-categorie-view.component';
import { CategoriesListComponent } from './crud-categories/categories-list/categories-list.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { MatCardModule } from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    CategoriesRoutingModule,
    SharedModule
  ],
  declarations: [
    SingleCategorieFormComponent,
    SingleCategorieViewComponent,
    CategoriesListComponent
  ]
})
export class CategoriesModule { }
