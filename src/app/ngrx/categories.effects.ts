import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { CategoriesService } from '../services/categories.service';
import { CategoriesActionsTypes, GetAllCategoriesErrorAction, GetAllCategoriesSuccessAction } from './categories.actions';
@Injectable()
export class CategoriesEffects {
  constructor(
    private categoriesService: CategoriesService,
    private effectAction$: Actions
  ) { }

  @Effect()
  loadMovies$ = this.effectAction$
    .pipe(
      ofType(CategoriesActionsTypes.GET_ALL_CATEGORIES),
      mergeMap((action) => this.categoriesService.getCategoriesList()
        .pipe(
          map((categories) => new GetAllCategoriesSuccessAction(categories)),
            catchError((err) => of(new GetAllCategoriesErrorAction(err)))
        )));
}
