import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { ProductsService } from '../services/produtcs.service';
import { GetAllProductsErrorAction, GetAllProductsSuccessAction, ProductsActionsTypes } from './products.actions';
@Injectable()
export class ProductsEffects {
  constructor(
    private productsService: ProductsService,
    private effectAction$: Actions
  ) { }

  @Effect()
  loadMovies$ = this.effectAction$
    .pipe(
      ofType(ProductsActionsTypes.GET_ALL_PRODUCTS),
      mergeMap(() => this.productsService.getProductsList()
        .pipe(
          map(products => new GetAllProductsSuccessAction(products),
            catchError((err) => of(new GetAllProductsErrorAction(err))
            ))
        )));
}
