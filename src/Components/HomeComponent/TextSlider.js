import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function TextSlider(props) {

    const settings = {
        dots: false,
        fade: false,
        arrows: false,
        infinite: true,
        speed: 3000,
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 0,
        autoplay: true,
        centerMode: true,
        autoplaySpeed: 3000,
        pauseOnHover:false,
        vertical: true,
        cssEase: "linear",

    };
    return (
        <>

            <Slider {...settings}>
                {props.data.map((item, index) =>
                    <div key={index} className='w-full py-1 flex justify-center'>
                        <p className='text-md sm:text-lg md:text-3xl lg:text-3xl xl:text-5xl py-5 sm:py-3 md:py-5 lg:py-10 xl:py-10 text-center lg:text-left xl:text-left text-white'>{item.title}</p>
                    </div>
                )}
            </Slider>
        </>
    )
}

export default TextSlider

