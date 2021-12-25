import { Action } from '@ngrx/store';
import { Category } from '../shared/models/category';

// ennumerate all category module possible actions
export enum CategoriesActionsTypes {
    GET_ALL_CATEGORIES = '[Categories] Get all categories action type',
    GET_ALL_CATEGORIES_SUCCESS = '[Categories] Get all categories success action type',
    GET_ALL_CATEGORIES_ERROR = '[Categories] Get all categories error action type'
}

/**
 * definition of get all categories action
 */
export class GetAllCategoriesAction implements Action {
    type: CategoriesActionsTypes = CategoriesActionsTypes.GET_ALL_CATEGORIES;
    constructor(public payload: any) {
    }
}

/**
 * definition of get all categories success action
 */
export class GetAllCategoriesSuccessAction implements Action {
    type: CategoriesActionsTypes = CategoriesActionsTypes.GET_ALL_CATEGORIES_SUCCESS;
    constructor(public payload: Category[]) {
    }
}

/**
 * definition of get all categories error action
 */
export class GetAllCategoriesErrorAction implements Action {
    type: CategoriesActionsTypes = CategoriesActionsTypes.GET_ALL_CATEGORIES_ERROR;
    constructor(public payload: string) {
    }
}

export type CategoriesActions = GetAllCategoriesAction | GetAllCategoriesSuccessAction | GetAllCategoriesErrorAction;
