import { createContext, useState } from "react";

export const ProductChosenContext = createContext(
    {
        productChosen : [],
        setProductChosen : () => null
    }
);

export const ProductChosenProvider = ({children}) => {
    const [productChosen, setProductChosen] = useState([]);
    const value = {productChosen, setProductChosen};

    return (
        <ProductChosenContext.Provider value={value}>{children}</ProductChosenContext.Provider>
    );
}