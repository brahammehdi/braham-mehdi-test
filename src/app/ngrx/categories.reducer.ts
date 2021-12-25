import { Action } from '@ngrx/store';
import { Category } from '../shared/models/category';
import { CategoriesActions, CategoriesActionsTypes } from './categories.actions';

// ennumerate all category module possible states
export enum CategoriesStates {
    LOADING = 'loading',
    LOADED = 'loaded',
    ERROR = 'error',
    INITIAL = 'initial'
}

/**
 * set up categories state interface
 */
export interface CategoriesState {
    categories: Category[];
    dataState: CategoriesStates;
    errorMessage: string;
}

/**
 * initial categories state
 */
const categoriesInitialState: CategoriesState = {
    categories: [],
    dataState: CategoriesStates.INITIAL,
    errorMessage: ''
};
/**
 * categories reducer for intecpting actions
 * @param state: categories state
 * @param action: categories action
 * @returns! catefories state
 */
export function CategoriesReducer(state: CategoriesState = categoriesInitialState, action: Action   ): CategoriesState {
    switch (action.type) {
        case CategoriesActionsTypes.GET_ALL_CATEGORIES:
            return { ...state, dataState: CategoriesStates.LOADING };
        case CategoriesActionsTypes.GET_ALL_CATEGORIES_SUCCESS:
            return { ...state, dataState: CategoriesStates.LOADED, categories: (action as CategoriesActions).payload };
        case CategoriesActionsTypes.GET_ALL_CATEGORIES_ERROR:
            return { ...state, dataState: CategoriesStates.ERROR, errorMessage: (action as CategoriesActions).payload };
        default:
            return { ...state };
            break;
    }
}


