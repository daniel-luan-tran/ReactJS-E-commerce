import { React, useContext } from "react";
import { ProductContext } from "../contexts/product.context";
import ProductCard from "../product-card/product-card.component";
import "../shop/shop.styles.scss"

export const Shop = () => {
    const {products} = useContext(ProductContext);
    
    return(
        <div id="product-list" className="products-container" style={{paddingTop: "85px"}}>
            {
                !(Object.keys(products).length === 0 && products.constructor === Object) &&
                Object.entries(products).map((item) => {
                    const category = item[0];
                    const _products = item[1];
                    //<div id="product-list" className="products-container" style={{paddingTop: "85px"}}>
                                        
                            return _products.map((product, index) => {
                                return (
                                    <>
                                        {/* {index == 0 && <h1>{category}</h1>} */}
                                        <ProductCard key={`${category}-${product.id}`} product={product} />
                                    </>
                                )
                            })
                        
                    // </div>
                })
            }
        </div>
    )

}