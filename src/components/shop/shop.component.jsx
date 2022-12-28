import { React, useContext, useState, useEffect } from "react";
import { BoxSearch } from "../box-search/box-search.component";
import { SearchContext } from "../contexts/search.context";
import ProductCard from "../product-card/product-card.component";
import ProductCardV2 from "../product-card/product-card-v2.component";
import { chain, pluck } from "underscore";
import "../shop/shop.styles.scss"
import { IsExist } from "../../luan-library/check-exist-library";

export const Shop = (props) => {
    const {categorySelected} = props;
    const {currentProduct, currentProductArray} = props
    const {searchString} = useContext(SearchContext);
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [filteredProductsByKeyword, setFilteredProductsByKeyword] = useState([]);

    useEffect(() => {
        IsExist(currentProduct) && Object.entries(currentProduct).map((item) => {
            const category = item[0];
            const _products = item[1];
            return _products.map((product, index) => {
                return setFilteredProducts(currentProductArray && currentProductArray.filter((_) => _.name.toLowerCase().includes(searchString.toLowerCase())));
            })
        })
    }, [searchString])

    useEffect(() => {
        const result = chain(currentProductArray)
        .groupBy('category')
        .map((value, key) => {
            return {
                category: key,
                data: value
            }
        })
        .value();
        
        return setFilteredProductsByKeyword(result);
    }, [currentProductArray])

    useEffect(() => {
        const result = chain(filteredProducts)
        .groupBy('category')
        .map(function(value, key) {
            return {
                category: key,
                data: value
            }
        })
        .value();
        return setFilteredProductsByKeyword(result);
    }, [filteredProducts])

    const renderProductCard = (item) => { //Render with specific category
        const category = item[0];
        const _products = item[1];
        return _products.map((product, index) => {
            if (product.name.toLowerCase().includes(searchString.toLocaleLowerCase())) {
                return (
                    <ProductCard key={`${category}-${product.id}`} product={product} index={index} category={category} />
                )
            }
        })
    }

    const renderProductCardByFilteredProducts = (filteredProductsByKeyword) => { //Render with all categories
        return filteredProductsByKeyword.length > 0 
        ? 
        filteredProductsByKeyword.map((product, index) => {
            return <ProductCardV2 key={`${product.category}`} product={product.data} category={product.category} />
        } )
        : <></>
    }

    return(
        <>
            <div id="product-list" className="products-container" style={{paddingTop: "85px"}}>
                <BoxSearch />
                {
                    categorySelected == "" || typeof categorySelected == "undefined"
                    ?
                    renderProductCardByFilteredProducts(filteredProductsByKeyword)
                    :
                    // IsExist(products) ? Object.entries(products).map((item) => {
                    IsExist(currentProduct) ? Object.entries(currentProduct).map((item) => {
                        if (item[0] == categorySelected) {
                            return renderProductCard(item)
                        }
                    })
                    :
                    <></>
                }
            </div>
        </>
    )

}