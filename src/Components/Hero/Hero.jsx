import './Hero.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React, { Component } from "react";
import Slider from "react-slick";


export const Hero = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return (
    <Slider {...settings} className='w-100 bg-opacity-25 bg-black '>
      <div className='d-flex align-items-center justify-content-end w-100 vh-100 slid1'>
        <div className="sl-1 d-flex flex-column align-items-center justify-content-center z-3 w-50 ">
          <h2 className="p m-2">ZANIA BLACK EDITION</h2>
          <h2 className="k m-2 text-center">CURVY BEVEL DUAL AUDIO</h2>
          <button className="butt-slide border-2 text-white py-2 px-4">SHOPE NOW</button>
        </div>
      </div>
      <div className='d-flex align-items-center w-100 vh-100 slid2'>
        <div className="sl-2 d-flex flex-column align-items-center justify-content-center">
          <h2 className="p m-2 text-black">4K</h2>
          <h2 className="k m-2 text-center text-black">EXCLUSIVE STEEL FRAME</h2>
          <button className="butt-slide2 border-2 text-black py-2 px-5">BUY NOW</button>
        </div>
      </div>
      <div className='d-flex align-items-center justify-content-end w-100 vh-100 slid3'>
        <div className="sl-1 d-flex flex-column align-items-center justify-content-center">
          <h2 className="p m-2">DELTA ZERTIGA PROCESSOR</h2>
          <h2 className="k m-2 text-center">FULL SCREEN DISPLAY</h2>
          <button className="butt-slide border-2 text-white py-2 px-4">SHOPE NOW</button>
        </div>
      </div>
    </Slider>

  )
}

