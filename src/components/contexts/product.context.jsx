import ShopData from '../../shop-data.json';
import { createContext, useState } from 'react';

//Khởi tạo context => Gọi useContext(ProductContext) -> {products}
export const ProductContext = createContext(
    {
        products: null,
        setProducts: () => null
    }
);

//Truyền dữ liệu vào context
export const ProductProvider = ({children}) => {
    const [products, setProducts] = useState(ShopData);
    const value = {products, setProducts};

    return (
        <ProductContext.Provider value={value}>
            {children}
        </ProductContext.Provider>
    );
}