import { createAction } from '../../utils/reducer/reducer.utils';
import { PRODUCT_ACTION_TYPES } from './product.reducer';

export const setCurrentProduct = (product) => {
    return createAction(PRODUCT_ACTION_TYPES.SET_CURRENT_PRODUCT, product);
}
export const setCurrentProductArray = (productArray) => {
    return createAction(PRODUCT_ACTION_TYPES.SET_CURRENT_PRODUCT_ARRAY, productArray);
}