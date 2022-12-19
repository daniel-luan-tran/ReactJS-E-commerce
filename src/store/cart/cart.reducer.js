export const CART_ACTION_TYPES = {
    SET_CART_ITEMS: 'SET_CART_ITEMS',
    SET_CART_COUNT: 'SET_CART_COUNT',
  };

  const CART_INITIAL_STATE = {
    productChosen: [],
    cartCount: 0,
  };

export const cartReducer = (state = CART_INITIAL_STATE, action = {}) => {
    const { type, payload } = action;
    
    switch (type) {
        case CART_ACTION_TYPES.SET_CART_ITEMS:
            return {
                ...state,
                productChosen: payload,
            };
        case CART_ACTION_TYPES.SET_CART_COUNT:
            return {
                ...state,
                cartCount: payload,
            };
        default:
            return state
            //throw new Error(`Unhandled type ${type} in cartReducer`);
    }
};