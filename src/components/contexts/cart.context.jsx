import { createContext, useState } from "react";

export const CartContext = createContext(
    {
        toggleShow: "",
        setToggleShow: () => null,

        productChosen : [],
        setProductChosen : () => null,
        addItemToCart: () => {},
        cartCount: 0,
        setCartCount: () => {}
    }
)

export const CartProvider = ({children}) => {
    const [toggleShow, setToggleShow] = useState(false);
    const [productChosen, setProductChosen] = useState([]);
    const [cartCount, setCartCount] = useState(0);

    const addItemToCart = (product) => {
        debugger
        const newProduct = [...productChosen, product];
        setProductChosen(newProduct);
        setCartCount(productChosen.length+1);
        console.log(productChosen)
    }
    const value = {productChosen, setProductChosen, addItemToCart, toggleShow, setToggleShow, cartCount, setCartCount};

    debugger
    return (
        <CartContext.Provider value={value}>
            {children}
        </CartContext.Provider>
    );
}