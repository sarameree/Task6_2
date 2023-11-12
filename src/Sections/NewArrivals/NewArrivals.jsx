import Slider from 'react-slick';
import React, { Component } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './NewArrivals.css'
import { AiFillStar } from 'react-icons/ai';
import { useEffect, useState } from 'react'

export const NewArrivals = () => {

    const [product, setProduct] = useState([]);

    const getProduct = async () => {
        const response = await fetch("https://dummyjson.com/products?limit=6");
        const FinalData = await response.json();
        setProduct(FinalData.products)
    }

    useEffect(() => {
        getProduct();
    }, [])

    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1220,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false
                }
            },
            {
                breakpoint: 920,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 610,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (
        <div className="py-4 my-5 d-flex flex-column align-items-center justify-content-center">
            <div className="d-flex flex-column align-items-center my-4 text-wrap">
                <h2 className="text-black text-center mb-4 fw-bold"> NEW ARRIVALS </h2>
                <p className="exp text-black-50 text-wrap"> FIND THE PERFECT PHONE </p>
            </div>
            <div className='w-100 vh-75 d-flex align-items-center justify-content-center'>
                <Slider {...settings} className='slideBody'>
                    {product.map((item) => (
                            <div key={item.id} className="product">
                                <div className="img-card">
                                    <img src={item.images[0]} alt="" />
                                </div>
                                <div className="body-card">
                                    <h5 className="text-center fw-bold">{item.title}</h5>
                                    <div className="text-center">
                                        <AiFillStar className="fa-solid fa-star text-black-50" />
                                        <AiFillStar className="fa-solid fa-star text-black-50" />
                                        <AiFillStar className="fa-solid fa-star text-black-50" />
                                        <AiFillStar className="fa-solid fa-star text-black-50" />
                                        <AiFillStar className="fa-solid fa-star text-black-50" />
                                    </div>
                                    <p className="price-mob text-center">{item.price}</p>
                                </div>
                            </div>
                        ))}
                </Slider>
            </div>
        </div>
    )
}
