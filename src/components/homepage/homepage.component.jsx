import React, { useContext, useState,useEffect } from 'react';
import Directory from '../../components/directory/directory.component';
import './homepage.styles.scss';
import "../../../node_modules/slick-carousel/slick/slick.css"; 
import "../../../node_modules/slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { ProductContext } from '../../components/contexts/product.context';
import { getCategoriesAndDocuments } from '../../utils/firebase/firebase.utils';
import ProductCard from '../product-card/product-card.component';

const HomePage = () => {
    const {productsArray, setProductsArray, setProducts} = useContext(ProductContext)

    useEffect(() => {
        const getDataFromFireStore = async () => {
            const data = await getCategoriesAndDocuments();
            let arrayData = [];

            Object.entries(data).map((_) => {
                _[1].map((__) => {
                    arrayData.push({...__, category: _[0]});
                });
            })
            
            console.log(arrayData);
            setProductsArray(arrayData);
            setProducts(data);
        }
        getDataFromFireStore();
    }, []);
    const IsExist = (items) => {
        const check = Object.keys(items).length === 0 && items.constructor === Object;
        return (Object.keys(items).length === 0 && items.constructor === Object) ? false : true
    }
    
    const settings = {
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        //dots: true,
        centerMode: true,
        responsive: [
            {
              breakpoint: 768,
              settings: {
                arrows: false,
                centerMode: true,
                // centerPadding: '40px',
                slidesToShow: 3
              }
            },
            {
              breakpoint: 480,
              settings: {
                arrows: false,
                centerMode: true,
                // centerPadding: '40px',
                slidesToShow: 1
              }
            }
        ]
    };

    return (
        <>
            <div style={{paddingTop: "85px"}}>
                <Slider {...settings}>
                    {/* {IsExist(productsArray) && productsArray.map((_) => <><img style={{height: "400px", width: "280px"}} src={`${_.imageUrl}`} /></>)} */}
                    {IsExist(productsArray) && 
                        productsArray.map((_, index) => {
                            return (
                                <ProductCard key={`${_.category}-${_.id}`} product={_} index={1} category={_.category} imgSize={{width: "280px"}} />
                            )
                        })
                    }
                </Slider>
            </div>
            <div className='homepage' style={{paddingTop: "15px"}}>
                <Directory />
            </div>
        </>
    )
}
export default HomePage
