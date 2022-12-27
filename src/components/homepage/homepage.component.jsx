import React, { useContext, useState,useEffect } from 'react';
import Directory from '../directory/directory.component';
import './homepage.styles.scss';
import "../../../node_modules/slick-carousel/slick/slick.css"; 
import "../../../node_modules/slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { ProductContext } from '../contexts/product.context';
import { getCategoriesAndDocuments } from '../../utils/firebase/firebase.utils';
import ProductCard from '../product-card/product-card.component';
import { LoadingV1 } from '../loading/loading-v1.component';
import { IsExist } from '../../luan-library/check-exist-library';
import { useSelector } from 'react-redux';
import { LoadingV3 } from '../loading/loading-v3.component';
import { selectProductLoading } from '../../store/product/product.selector';
import { ProductArray } from '../../store/product/product.types';

const HomePage = (props) => {
    const {currentProductArray} = props;
    const {IsLoadingProduct} = useSelector(selectProductLoading);
    const settings = {
        slidesToShow: 5,
        // slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        //dots: true,
        // centerMode: true,
        className: "center",
        swipeToSlide: true,
        // touchThreshold: 100,
        infinite: true,
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
            {
                IsLoadingProduct ? <LoadingV3 /> :
                <div style={{paddingTop: "85px"}}>
                {              
                !IsExist(currentProductArray) ?
                <LoadingV1 />
                :
                <Slider {...settings}>
                    {
                        currentProductArray.map((_, index) => {
                            return (
                                <ProductCard key={`${_.category}-${_.id}`} product={_} index={1} category={_.category} imgSize={{width: "280px"}} />
                            )
                        })
                    }
                </Slider>
                }
                {
                <div className='homepage' style={{paddingTop: "15px"}}>
                    <Directory />
                </div>
                }
            </div>
            }
        </>
    )
}
export default HomePage
