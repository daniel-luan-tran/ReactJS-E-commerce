export const PRODUCT_ACTION_TYPES = {
  SET_CURRENT_PRODUCT: 'SET_CURRENT_PRODUCT',
  SET_CURRENT_PRODUCT_ARRAY: 'SET_CURRENT_PRODUCT_ARRAY',
};

export const PRODUCT_INITIAL_STATE = {
  currentProduct: null, currentProductArray: []
};

export const productReducer = (state = PRODUCT_INITIAL_STATE, action = {}) => {
  const { type, payload } = action;

  switch (type) {
    case PRODUCT_ACTION_TYPES.SET_CURRENT_PRODUCT:
      return { ...state, currentProduct: payload };
    case PRODUCT_ACTION_TYPES.SET_CURRENT_PRODUCT_ARRAY:
      return { ...state, currentProductArray: payload };
    default:
      return state;
  }
};