import { setCurrentCartCount, setCurrentCartItems } from "./cart.action";
import {createSelector} from "reselect";

export const selectCartItemsReducer = (state) => {
    return state.cart.productChosen;
};

// const updateCartReducer = createSelector([selectCartItemsReducer], (productChosen) => {
//     debugger
//     return productChosen;
// })

const updateCartReducer = (productChosen) => {
    return productChosen;
}

export const updateCartCountReducer = createSelector([updateCartReducer], (productChosen) => {
    //return productChosen.length;
});

const checkExistProduct = (_product, productChosen) => {
    if (typeof productChosen != "undefined") {
        if (productChosen.filter(_ => _.id == _product.id).length > 0)
            return true;
        else
            return false;
    }
    else
        return false;
}

const setItem = (_product, productChosen) => {
    const setQuantity = (newProduct) => {
        return newProduct.map((item) => 
        item.id == _product.id 
            ? {...item, quantity: item.quantity + 1} //spread out all of properties except quantity is set new value
            : {...item}
        );
    }
    if (checkExistProduct(_product, productChosen)) {
        var newProduct = productChosen;
        return updateCartReducer(setQuantity(newProduct));
    } else {
        const newProduct = [...productChosen, _product];
        return updateCartReducer(newProduct);
    }
}

const setDecreaseItem = (_product, productChosen) => {
    const setQuantity = (newProduct) => {
        return newProduct.map((item) => 
        item.id == _product.id 
            ? {...item, quantity: _product.quantity} //spread out all of properties except quantity is set new value
            : {...item}
        );
    }

    if (checkExistProduct(_product, productChosen)) {
        var newProduct = productChosen;
        updateCartReducer(setQuantity(newProduct));
    } else {
        const newProduct = [...productChosen, _product];
        updateCartReducer(newProduct);
    }
    //////
}

export const setNewProductChosen = (_product) => { //For remove item
    return updateCartReducer(_product);
}

export const addItemToCart = (product, productChosen) => {
    const _product = {
        id: 0,
        name: "",
        price: 0,
        imageUrl: "",
        quantity: 0,
    }
    _product.id = product.id;
    _product.name = product.name;
    _product.price = product.price;
    _product.imageUrl = product.imageUrl;
    _product.quantity = 1;
    return setItem(_product, productChosen);
}

export const DecreaseItemFromCart = (product, productChosen) => {
    const _product = {
        id: 0,
        name: "",
        price: 0,
        imageUrl: "",
        quantity: 0,
    }
    _product.id = product.id;
    _product.name = product.name;
    _product.price = product.price;
    _product.imageUrl = product.imageUrl;
    _product.quantity = product.quantity;
    setDecreaseItem(_product, productChosen);
}