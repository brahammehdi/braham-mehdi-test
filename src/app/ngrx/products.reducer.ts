import { Product } from '../shared/models/product';
import { ProductsActions, ProductsActionsTypes } from './products.actions';

// ennumerate all product module possible states
export enum ProductsStates {
    LOADING = 'loading',
    LOADED = 'loaded',
    ERROR = 'error',
    INITIAL = 'initial'
}

/**
 * set up products state interface
 */
export interface ProductsState {
    products: Product[];
    dataState: ProductsStates;
    errorMessage: string;
}

/**
 * initial products state
 */
const productsInitialState: ProductsState = {
    products: [],
    dataState: ProductsStates.INITIAL,
    errorMessage: ''
};

/**
 * products reducer for intecpting actions
 * @param state: products state
 * @param action: products action
 * @returns! catefories state
 */
export function ProductsReducer(state: ProductsState = productsInitialState, action: ProductsActions): ProductsState {
    switch (action.type) {
        case ProductsActionsTypes.GET_ALL_PRODUCTS:
            return { ...state, dataState: ProductsStates.LOADING };
        case ProductsActionsTypes.GET_ALL_PRODUCTS_SUCCESS:
            return { ...state, dataState: ProductsStates.LOADED, products: action.payload };
        case ProductsActionsTypes.GET_ALL_PRODUCTS_ERROR:
            return { ...state, dataState: ProductsStates.ERROR, errorMessage: action.payload };
        default:
            return { ...state };
            break;
    }
}


