import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SponserCard from './SponserCard';

function Slidercommon(props) {
  const settings = {
    dots: false,
    fade: false,
    className: "center",
    centerMode: true,
    arrows: false,
    infinite: true,
    speed: 3000,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
    autoplaySpeed: 0,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      }
    ]

  };
  return (
    <>
      <Slider {...settings}>
        {
          props.data.map((item, index) =>
            <SponserCard key={index} img={item.icon} title={item.title} />
          )
        }


      </Slider>
    </>
  )
}

export default Slidercommon