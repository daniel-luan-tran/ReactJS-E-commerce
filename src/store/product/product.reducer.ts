import { ProductAction } from "./product.action";
import { Product, productArray, PRODUCT_ACTION_TYPES } from "./product.types";

export type Payload = {
  categoryMap: Product,
  arrayData: Product[],
}

export type ProductState = {
  currentProduct: Product, 
  currentProductArray: Product[],
  isLoading: boolean,
  error: Error | null,
}

export const PRODUCT_INITIAL_STATE : ProductState = {
  currentProduct: {} as Product, 
  currentProductArray: [],
  isLoading: false,
  error: null,
};

export const productReducer = (state = PRODUCT_INITIAL_STATE, action = {} as ProductAction) => {
  // const { type, payload } = action;
  
  switch (action.type) {
    case PRODUCT_ACTION_TYPES.FETCH_PRODUCT_START:
      return { ...state, isLoading: true };
    case PRODUCT_ACTION_TYPES.FETCH_PRODUCT_SUCCESS:
      // const {categoryMap, arrayData} = payload;
      return { ...state, currentProduct: action.payload, currentProductArray: action.payload, isLoading: false };
    case PRODUCT_ACTION_TYPES.FETCH_PRODUCT_FAILED:
      return { ...state, error: action.payload, isLoading: false };
    // case PRODUCT_ACTION_TYPES.SET_CURRENT_PRODUCT:
    //   return { ...state, currentProduct: payload };
    // case PRODUCT_ACTION_TYPES.SET_CURRENT_PRODUCT_ARRAY:
    //   return { ...state, currentProductArray: payload };
    default:
      return state;
  }
};