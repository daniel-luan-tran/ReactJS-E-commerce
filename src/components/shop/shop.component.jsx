import { React, useContext, useState, useEffect } from "react";
import { BoxSearch } from "../box-search/box-search.component";
import { ProductContext } from "../contexts/product.context";
import { SearchContext } from "../contexts/search.context";
import ProductCard from "../product-card/product-card.component";
import ProductCardV2 from "../product-card/product-card-v2.component";
import { chain, pluck } from "underscore";
import "../shop/shop.styles.scss"

export const Shop = (props) => {
    const {categorySelected} = props;
    const {productsArray, setProductsArray} = useContext(ProductContext);
    const {products, setProducts} = useContext(ProductContext);
    const {searchString} = useContext(SearchContext);
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [filteredProductsByKeyword, setFilteredProductsByKeyword] = useState([]);

    useEffect(() => {
        Object.entries(products).map((item) => {
            const category = item[0];
            const _products = item[1];
            return _products.map((product, index) => {
                return setFilteredProducts(productsArray.filter((_) => _.name.toLowerCase().includes(searchString.toLowerCase())));
            })
        })
    }, [searchString])

    useEffect(() => {
        var result = chain(productsArray)
        .groupBy('category')
        .map(function(value, key) {
            return {
                category: key,
                data: value
            }
        })
        .value();
        return setFilteredProductsByKeyword(result);
    }, [productsArray])

    useEffect(() => {
        debugger
        var result = chain(filteredProducts)
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

    // useEffect(() => {
    //     debugger
    //     var result = chain(filteredProducts)
    //     .groupBy('category')
    //     .map(function(value, key) {
    //         return {
    //             category: key,
    //             data: value
    //         }
    //     })
    //     .value();

    //     // if(categorySelected != "" && typeof categorySelected != "undefined") {
    //     //     result = result.filter(_ => _.category == categorySelected);
    //     // }

    //     return setFilteredProductsByKeyword(result);
    // }, [navigation])

    // useEffect(() => {
    //     debugger
    //     var result = chain(productsArray)
    //     .groupBy('category')
    //     .map(function(value, key) {
    //         return {
    //             category: key,
    //             data: value
    //         }
    //     })
    //     .value();

    //     // if(categorySelected != "" && typeof categorySelected != "undefined") {
    //     //     result = result.filter(_ => _.category == categorySelected);
    //     // }

    //     return setFilteredProductsByKeyword(result);
    // }, [])

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

    // const IsExistProduct = () => {
    //     const check = Object.keys(products).length === 0 && products.constructor === Object;
    //     return (Object.keys(products).length === 0 && products.constructor === Object) ? false : true
    // }
    // const IsExist = (items) => {
    //     const check = Object.keys(items).length === 0 && products.constructor === Object;
    //     return (Object.keys(items).length === 0 && products.constructor === Object) ? false : true
    // }
    return(
        <>
            <div id="product-list" className="products-container" style={{paddingTop: "85px"}}>
                <BoxSearch />
                {
                    categorySelected == "" || typeof categorySelected == "undefined"
                    ?
                    renderProductCardByFilteredProducts(filteredProductsByKeyword)
                    :
                    Object.entries(products).map((item) => {
                        if (item[0] == categorySelected) {
                            return renderProductCard(item)
                        }
                    })
                }
            </div>
        </>
    )

}