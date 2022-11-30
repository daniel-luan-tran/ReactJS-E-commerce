import { createContext, useState } from "react";

export const CartContext = createContext(
    {
        cart: [],
        toggleShow: "",
        setCart: () => null,
        setToggleShow: () => null
    }
)

export const CartProvider = ({children}) => {
    const [toggleShow, setToggleShow] = useState("d-none");
    const toggle = {toggleShow, setToggleShow};
    debugger
    return (
        <CartContext.Provider value={toggle}>
            {children}
        </CartContext.Provider>
    );
}