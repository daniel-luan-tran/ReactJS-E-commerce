import { Action, ActionWithPayload, createAction } from '../../utils/reducer/reducer.utils';
import { Product, PRODUCT_ACTION_TYPES } from './product.types';


export type fetchProductStart = Action<PRODUCT_ACTION_TYPES.FETCH_PRODUCT_START>;

export type fetchProductSuccess = ActionWithPayload<PRODUCT_ACTION_TYPES.FETCH_PRODUCT_SUCCESS, Product>;

export type fetchProductFailed = ActionWithPayload<PRODUCT_ACTION_TYPES.FETCH_PRODUCT_FAILED, Product>

export type ProductAction = fetchProductStart | fetchProductSuccess | fetchProductFailed;

// export const fetchProductStart = () => {
//     return createAction(PRODUCT_ACTION_TYPES.FETCH_PRODUCT_START);
// }

// export const fetchProductSuccess = (product) => {
//     return createAction(PRODUCT_ACTION_TYPES.FETCH_PRODUCT_SUCCESS, product);
// }

// export const fetchProductFailed = (error) => {
//     return createAction(PRODUCT_ACTION_TYPES.FETCH_PRODUCT_FAILED, error)
// }

// export const setCurrentProduct = (product: Product) => {
//     return createAction(PRODUCT_ACTION_TYPES.SET_CURRENT_PRODUCT, product);
// }

// export const setCurrentProductArray = (productArray: productArray) => {
//     return createAction(PRODUCT_ACTION_TYPES.SET_CURRENT_PRODUCT_ARRAY, productArray);
// }