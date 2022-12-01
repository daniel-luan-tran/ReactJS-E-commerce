import { React, useContext } from "react";
import Checkout from "../check-out/check-out.component";
import { ProductContext } from "../contexts/product.context";
import ProductCard from "../product-card/product-card.component";
import "../shop/shop.styles.scss"
import {CartContext} from '../../components/contexts/cart.context';

export const Shop = () => {
    const {products, isShowShop} = useContext(ProductContext);

    return(
        isShowShop ?
        <div id="product-list" className="products-container">
            {            
                products.map((product) => {
                    return (
                        <ProductCard key={product.id} product={product} />
                    )
                })
            }
        </div>
        :
        <Checkout />
    )

}