import { useDispatch } from 'react-redux';
import { createAction } from '../../utils/reducer/reducer.utils';
import { CART_ACTION_TYPES } from './cart.reducer';
import { addItemToCart, DecreaseItemFromCart, setNewProductChosen } from './cart.selector';

export const addItemToCartAction = (product, productChosen) => {
    const _cartItems = addItemToCart(product, productChosen);
    return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, _cartItems);
}
export const setNewProductChosenAction = (_productArray) => { //for remove item
    const _cartItems = setNewProductChosen(_productArray);
    return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, _cartItems);
}
export const DecreaseItemFromCartAcion = (product, productChosen) => {
    const _cartItems = DecreaseItemFromCart(product, productChosen);
    return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, _cartItems);
}
export const setCurrentCartItems = (cartItems) => {
    return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, cartItems);
}

export const setCurrentCartCount = (newCartCount) => {
    return createAction(CART_ACTION_TYPES.SET_CART_COUNT, newCartCount);
}