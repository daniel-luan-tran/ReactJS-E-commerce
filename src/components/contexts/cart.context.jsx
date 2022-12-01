import { createContext, useState, useEffect } from "react";

export const CartContext = createContext(
    {
        toggleShow: "",
        setToggleShow: () => {},

        productChosen : [],
        setProductChosen : () => {},
        addItemToCart: () => {},
        cartCount: 0,
        setCartCount: () => {},
    }
)

export const CartProvider = ({children}) => {
    debugger
    const [toggleShow, setToggleShow] = useState(false);
    const [productChosen, setProductChosen] = useState([]);
    const [cartCount, setCartCount] = useState(0);

    const checkExistProduct = (_product) => {
        if (typeof productChosen != "undefined") {
            if (productChosen.filter(_ => _.id == _product.id).length > 0)
                return true;
            else
                return false;
        }
        else
            return false;
    }

    const setItem = (_product) => {
        debugger
        const setQuantity = (newProduct) => {
            return newProduct.map((item) => 
            item.id == _product.id 
                ? {...item, quantity: item.quantity + 1} //spread out all of properties except quantity is set new value
                : {...item}
            );
        }

        if (checkExistProduct(_product)) {
            var newProduct = productChosen;
            setProductChosen(setQuantity(newProduct));
        } else {
            const newProduct = [...productChosen, _product];
            setProductChosen(newProduct);
            setCartCount(productChosen.length+1);
        }
    }

    const _product = {
        id: 0,
        name: "",
        price: 0,
        imageUrl: "",
        quantity: 0,
    }

    const addItemToCart = (product) => {
        debugger
        _product.id = product.id;
        _product.name = product.name;
        _product.price = product.price;
        _product.imageUrl = product.imageUrl;
        _product.quantity = 1;
        setItem(_product)

        console.log(productChosen)
    }

    const value = {productChosen, setProductChosen, addItemToCart, toggleShow, setToggleShow, cartCount, setCartCount};

    return (
        <CartContext.Provider value={value}>
            {children}
        </CartContext.Provider>
    );
}