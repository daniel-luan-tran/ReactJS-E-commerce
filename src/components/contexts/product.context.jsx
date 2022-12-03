import ShopData from '../../shop-data.json';
import SHOP_DATA from '../../shop-data.js';
import { createContext, useEffect, useState } from 'react';
import { addCollectionAndDocuments, getCategoriesAndDocuments } from '../../utils/firebase/firebase.utils';

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
    const [products, setProducts] = useState({});
    const [isShowShop, setIsShowShop] = useState(true);
    const value = {products, setProducts, isShowShop, setIsShowShop};

    useEffect(() => {
        //addCollectionAndDocuments("categories", SHOP_DATA);
        const getDataFromFireStore = async () => {
            const data = await getCategoriesAndDocuments();
            setProducts(data);
        }
        getDataFromFireStore();
    }, []);

    return (
        <ProductContext.Provider value={value}>
            {children}
        </ProductContext.Provider>
    );
}