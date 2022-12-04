import { React, useContext, useState, useEffect } from "react";
import { BoxSearch } from "../box-search/box-search.component";
import { ProductContext } from "../contexts/product.context";
import { SearchContext } from "../contexts/search.context";
import ProductCard from "../product-card/product-card.component";
import "../shop/shop.styles.scss"

export const Shop = (props) => {
    const {categorySelected} = props;
    const {productsArray, setProductsArray} = useContext(ProductContext);
    const {products, setProducts} = useContext(ProductContext);
    const {searchString} = useContext(SearchContext);
    const [filteredProducts, setFilteredProducts] = useState([]);
    debugger
    useEffect(() => {
        return setFilteredProducts(productsArray);
    }, [productsArray])

    useEffect(() => {
        Object.entries(products).map((item) => {
            const category = item[0];
            const _products = item[1];
            return _products.map((product, index) => {
                if(product.name.toLowerCase().includes(searchString.toLowerCase())) {
                    return setFilteredProducts(productsArray.filter((_) => _.name.toLowerCase().includes(searchString.toLowerCase())));
                }
            })
        })
    }, [searchString])

    
    const IsExistProduct = () => {
        return (Object.keys(products).length === 0 && products.constructor === Object) ? false : true
    }
    const IsExist = (items) => {
        return (Object.keys(items).length === 0 && products.constructor === Object) ? false : true
    }
    debugger
    return(
        <>
            <div id="product-list" className="products-container" style={{paddingTop: "85px"}}>
                <BoxSearch />
                {
                    categorySelected == "" || typeof categorySelected == "undefined"
                    ?
                        IsExist(filteredProducts) || filteredProducts.length == 0 ?
                        (IsExistProduct) &&
                        Object.entries(products).map((item) => {
                            debugger
                            const category = item[0];
                            const _products = item[1];
                            return _products.map((product, index) => {
                                return (
                                    <ProductCard key={`${category}-${product.id}`} product={product} index={index} category={category} />
                                )
                            })
                        })
                        :
                        /// If Searching products by name
                        IsExist(filteredProducts) && filteredProducts.map((product, index) => <ProductCard key={`${product.category}-${product.id}`} product={product} index={index} category={product.category} />)
                        ///
                    :
                    IsExistProduct &&
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
                    
                    //IsExist(filteredProducts) && filteredProducts.map((product, index) => <ProductCard key={`${product.category}-${product.id}`} product={product} index={index} category={product.category} />)
                }
            </div>
        </>
    )

}