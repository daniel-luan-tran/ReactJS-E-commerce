import { React, useContext } from "react";
import { ProductContext } from "../contexts/product.context";
import ProductCard from "../product-card/product-card.component";
import "../shop/shop.styles.scss"

export const Shop = () => {
    const {products} = useContext(ProductContext);
    return(
        <div id="product-list" className="products-container" style={{paddingTop: "85px"}}>
            {            
                products.map((product) => {
                    return (
                        <ProductCard key={product.id} product={product} />
                    )
                })
            }
        </div>
    )

}