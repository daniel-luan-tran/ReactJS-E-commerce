import { createContext, useState } from "react";

export const ProductChosenContext = createContext(
    {
        productChosen : [],
        setProductChosen : () => null,
        addItemToCart: () => {}
    }
);

export const ProductChosenProvider = ({children}) => {
    const [productChosen, setProductChosen] = useState([]);
    
    const addItemToCart = (product) => {
        productChosen.push(product);
        setProductChosen(productChosen);
        console.log(productChosen)
    }
    const value = {productChosen, setProductChosen, addItemToCart};

    return (
        <ProductChosenContext.Provider value={value}>{children}</ProductChosenContext.Provider>
    );
}