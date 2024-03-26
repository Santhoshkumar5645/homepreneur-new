import React, { useContext } from 'react'
import Titlenew from '../../Element/Titlenew'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { AuthContext } from '../../ContextApi/AppContext';

function SponserBIg() {

  const { lang } = useContext(AuthContext);

  const settings = {
    dots: false,
    fade: false,
    className: "center",
    centerMode: true,
    arrows: false,
    infinite: true,
    speed: 3000,
    slidesToShow: 6,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
    autoplaySpeed: 0,
    cssEase: "linear",
    rtl: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
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
          slidesToScroll: 1,
          pauseOnHover: false,


        }
      }
    ]

  };
  const SponsersData = [


    // {
    //   icon:'assets/images/sponsers/sp3.webp',
    //   title:'Powered bys',
    // },
    // {
    //   icon:'assets/images/sponsers/new1.webp',
    //   title:'Powered bys',
    // },
    {
      icon: 'assets/images/sponsers/new3.webp',
      title: 'Powered by',
    },

    // {
    //   icon:'assets/images/sponsers/sp6.webp',
    //   title:'Powered by',
    // },
    {
      icon: 'assets/images/sponsers/new1.webp',
      title: 'Title Sponsor',
    },
    {
      icon: 'assets/images/sponsers/new2.webp',
      title: 'Co-initiated by',
    },
    // {
    //   icon:'assets/images/sponsers/sp5.webp',
    //   title:'Powered by',
    // },

    {
      icon: 'assets/images/sponsers/new4.webp',
      title: 'Associate Sponsor',
    },

    {
      icon: 'assets/images/sponsers/new3.webp',
      title: 'Powered by',
    },
    {
      icon: 'assets/images/sponsers/new1.webp',
      title: 'Title Sponsor',
    },
    {
      icon: 'assets/images/sponsers/new2.webp',
      title: 'Co-initiated by',
    },

    {
      icon: 'assets/images/sponsers/new4.webp',
      title: 'Associate Sponsor',
    },
    // {
    //   icon:'assets/images/sponsers/sp5.webp',
    //   title:'Powered by',
    // },
    {
      icon: 'assets/images/sponsers/new3.webp',
      title: 'Powered by',
    },
    {
      icon: 'assets/images/sponsers/new1.webp',
      title: 'Title Sponsor',
    },
    {
      icon: 'assets/images/sponsers/new2.webp',
      title: 'Co-initiated by',
    },

    {
      icon: 'assets/images/sponsers/new4.webp',
      title: 'Associate Sponsor',
    },

    {
      icon: 'assets/images/sponsers/new3.webp',
      title: 'Powered by',
    },
    {
      icon: 'assets/images/sponsers/new1.webp',
      title: 'Title Sponsor',
    },
    {
      icon: 'assets/images/sponsers/new2.webp',
      title: 'Co-initiated by',
    },

    {
      icon: 'assets/images/sponsers/new4.webp',
      title: 'Associate Sponsor',
    },

    {
      icon: 'assets/images/sponsers/new3.webp',
      title: 'Powered by',
    },
    {
      icon: 'assets/images/sponsers/new1.webp',
      title: 'Title Sponsor',
    },
    {
      icon: 'assets/images/sponsers/new2.webp',
      title: 'Co-initiated by',
    },

    {
      icon: 'assets/images/sponsers/new4.webp',
      title: 'Associate Sponsor',
    },
    // {
    //   icon:'assets/images/sponsers/sp5.webp',
    //   title:'Powered by',
    // },

  ]

  return (
    <>
      <div className='brand-max-width mx-auto py-10' style={{ backgroundImage: "url('assets/svg/background/people.svg')", backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'top' }}>
        <div className={`flex gap-5 justify-center items-center my-5`}>
          <Titlenew title={lang === 'english' ? 'Our Sponsors' : 'ஸ்பான்சர்கள்'} />
        </div>
        <Slider {...settings}>
          {
            SponsersData.map((item, index) =>
              <SponserCardBig key={index} img={item.icon} title={item.title} />
            )
          }


        </Slider>
      </div>
    </>
  )
}

export default SponserBIg

const SponserCardBig = (props) => {
  return (
    <>
      <div className='flex flex-col items-center justify-center p-3'>
        <p className='text-primary text-sm capitalize whitespace-nowrap'>{props.title}</p>
        <img className='  h-[150px] object-contain ' src={props.img} alt="" />
      </div>
    </>
  )
}