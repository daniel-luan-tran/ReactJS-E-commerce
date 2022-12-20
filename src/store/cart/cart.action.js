import { useDispatch } from 'react-redux';
import { createAction } from '../../utils/reducer/reducer.utils';
import { CART_ACTION_TYPES } from './cart.reducer';
import { addItemToCart, DecreaseItemFromCart, setNewProductChosen, updateCartCountReducer } from './cart.selector';

//Các component sẽ gọi vào các action này, các action này sẽ callback các selector
export const addItemToCartAction = (product, productChosen) => {
    const payload = addItemToCart(product, productChosen);
    return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, payload);
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
export const setCurrentCartCount = (productChosen) => {
    debugger
    const newCartCount = updateCartCountReducer(productChosen);
    return createAction(CART_ACTION_TYPES.SET_CART_COUNT, newCartCount);
}