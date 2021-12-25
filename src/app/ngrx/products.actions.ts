import { Action } from '@ngrx/store';
import { Product } from '../shared/models/product';

// ennumerate all product module possible actions
export enum ProductsActionsTypes {
    GET_ALL_PRODUCTS = '[Products] Get all products action type',
    GET_ALL_PRODUCTS_SUCCESS = '[Products] Get all products success action type',
    GET_ALL_PRODUCTS_ERROR = '[Products] Get all products error action type'
}

/**
 * definition of get all products action
 */
export class GetAllProductsAction implements Action {
    type: ProductsActionsTypes = ProductsActionsTypes.GET_ALL_PRODUCTS;
    constructor(public payload: any) {
    }
}

/**
 * definition of get all products success action
 */
export class GetAllProductsSuccessAction implements Action {
    type: ProductsActionsTypes =  ProductsActionsTypes.GET_ALL_PRODUCTS_SUCCESS;
    constructor(public payload: Product[]) {
    }
}

/**
 * definition of get all products error action
 */
export class GetAllProductsErrorAction implements Action {
    type: ProductsActionsTypes = ProductsActionsTypes.GET_ALL_PRODUCTS_ERROR;
    constructor(public payload: string) {
    }
}

export type ProductsActions = GetAllProductsAction | GetAllProductsSuccessAction | GetAllProductsErrorAction;
