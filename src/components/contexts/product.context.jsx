import ShopData from '../../shop-data.json';
import { createContext, useState } from 'react';

//Khởi tạo context => Gọi useContext(ProductContext) -> {products}
export const ProductContext = createContext(
    {
        products: null,
        setProducts: () => null,
        isShowShop: null,
        setIsShowShop: () => {}
    }
);

//Truyền dữ liệu vào context
export const ProductProvider = ({children}) => {
    const [products, setProducts] = useState(ShopData);
    const [isShowShop, setIsShowShop] = useState(true);
    const value = {products, setProducts, isShowShop, setIsShowShop};

    return (
        <ProductContext.Provider value={value}>
            {children}
        </ProductContext.Provider>
    );
}