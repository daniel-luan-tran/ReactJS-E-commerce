import { React, useContext } from "react";
import { ProductContext } from "../contexts/product.context";
import ProductCard from "../product-card/product-card.component";
import "../shop/shop.styles.scss"

export const Shop = (props) => {
    const {categorySelected} = props;
    const {products} = useContext(ProductContext);
    debugger
    return(
        <div id="product-list" className="products-container" style={{paddingTop: "85px"}}>
            {
                //Object.keys(categorySelected).length === 0 && products.constructor === Object
                categorySelected == "" || typeof categorySelected == "undefined"
                ?
                !(Object.keys(products).length === 0 && products.constructor === Object) &&
                Object.entries(products).map((item) => {
                    const category = item[0];
                    const _products = item[1];
                    return _products.map((product, index) => {
                        return (
                            <ProductCard key={`${category}-${product.id}`} product={product} index={index} category={category} />
                        )
                    })
                })
                :
                !(Object.keys(products).length === 0 && products.constructor === Object) &&
                Object.entries(products).map((item) => {
                    if (item[0] == categorySelected) {
                        const category = item[0];
                        const _products = item[1];
                        return _products.map((product, index) => {
                            return (
                                <ProductCard key={`${category}-${product.id}`} product={product} index={index} category={category} />
                            )
                        })
                    }
                })
            }
        </div>
    )

}