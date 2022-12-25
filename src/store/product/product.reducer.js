export const PRODUCT_ACTION_TYPES = {
  SET_CURRENT_PRODUCT: 'SET_CURRENT_PRODUCT',
  SET_CURRENT_PRODUCT_ARRAY: 'SET_CURRENT_PRODUCT_ARRAY',
  FETCH_PRODUCT_START: 'FETCH_PRODUCT_START',
  FETCH_PRODUCT_SUCCESS: 'FETCH_PRODUCT_SUCCESS',
  FETCH_PRODUCT_FAILED: 'FETCH_PRODUCT_FAILED',
};

export const PRODUCT_INITIAL_STATE = {
  currentProduct: null, 
  currentProductArray: [],
  isLoading: false,
  error: null,
};

export const productReducer = (state = PRODUCT_INITIAL_STATE, action = {}) => {
  const { type, payload } = action;
  
  switch (type) {
    case PRODUCT_ACTION_TYPES.FETCH_PRODUCT_START:
      return { ...state, isLoading: true };
    case PRODUCT_ACTION_TYPES.FETCH_PRODUCT_SUCCESS:
      const {categoryMap, arrayData} = payload;
      return { ...state, currentProduct: categoryMap, currentProductArray: arrayData, isLoading: false };
    case PRODUCT_ACTION_TYPES.FETCH_PRODUCT_FAILED:
      return { ...state, error: payload, isLoading: false };
    case PRODUCT_ACTION_TYPES.SET_CURRENT_PRODUCT:
      return { ...state, currentProduct: payload };
    case PRODUCT_ACTION_TYPES.SET_CURRENT_PRODUCT_ARRAY:
      return { ...state, currentProductArray: payload };
    default:
      return state;
  }
};