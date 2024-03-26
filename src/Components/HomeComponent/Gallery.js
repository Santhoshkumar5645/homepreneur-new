import React, { useRef, useState } from 'react'
import TitleGradient from '../../Element/TitleGradient'
import Slider from "react-slick";

function Gallery() {
  const [selectedGallery, setGallery] = useState(0)
  const GalleryData = [
    {
      title: 'Press meet 2023',
      image: [
        {
          img: "assets/images/gallery/pm2023-1.webp",
        },
        {
          img: "assets/images/gallery/pm2023-2.webp",
        },
        {
          img: "assets/images/gallery/pm2023-3.webp",
        },
        {
          img: "assets/images/gallery/pm2023-4.webp",
        },
        {
          img: "assets/images/gallery/pm2023-8.webp",
        },
        {
          img: "assets/images/gallery/pm2023-9.webp",
        },
        // {
        //   img: "assets/images/gallery/pm2023-7.webp",
        // },
        {
          img: "assets/images/gallery/pm2023-8.webp",
        },
       
       
      ]
    },
    {
      title: 'Moments From Previous Seasons',
      image: [
        // {
        //   img: "assets/images/gallery/ps1.jpeg",
        // },
        {
          img: "assets/images/gallery/ps2.jpeg",
        },
        {
          img: "assets/images/gallery/ps3.jpeg",
        },
        {
          img: "assets/images/gallery/ps4.jpeg",
        },
        {
          img: "assets/images/gallery/ps5.jpeg",
        },
        {
          img: "assets/images/gallery/ps6.jpeg",
        },
        
      ]
    },
    {
      title: 'Jury Interview 2024',
      image: [
        {
          img: "assets/images/gallery/pic7.jpeg",
        },
        {
          img: "assets/images/gallery/pic8.jpeg",
        },
        {
          img: "assets/images/gallery/pic9.jpeg",
        },
        {
          img: "assets/images/gallery/pic1.jpeg",
        },
        {
          img: "assets/images/gallery/pic2.jpeg",
        },
        {
          img: "assets/images/gallery/pic3.jpeg",
        },
        {
          img: "assets/images/gallery/pic4.jpeg",
        },
        {
          img: "assets/images/gallery/pic5.jpeg",
        },
        {
          img: "assets/images/gallery/pic6.jpeg",
        },
        
       
      ]
    },
    {
      title: 'Winners Gallery',
      image: [
        {
          img: "assets/images/gallery/winners/win-n-1.jpg",
        },
        {
          img: "assets/images/gallery/winners/win-n-2.jpg",
        },
        {
          img: "assets/images/gallery/winners/win-n-3.jpg",
        },
        {
          img: "assets/images/gallery/winners/win-n-4.jpg",
        },
        {
          img: "assets/images/gallery/winners/win-n-5.jpg",
        },
        {
          img: "assets/images/gallery/winners/win-n-6.jpg",
        },
        {
          img: "assets/images/gallery/winners/win-n-7.jpg",
        },
        {
          img: "assets/images/gallery/winners/win-n-8.jpg",
        },
        {
          img: "assets/images/gallery/winners/win-n-9.jpg",
        },
        {
          img: "assets/images/gallery/winners/win-n-10.jpg",
        },
       
      ]
    },
    {
      title: 'Moments from season 6',
      image: [
        {
          img: "assets/images/gallery/moments/mom-1.jpg",
        },
        {
          img: "assets/images/gallery/moments/mom-2.jpg",
        },
        {
          img: "assets/images/gallery/moments/mom-3.jpg",
        },
        {
          img: "assets/images/gallery/moments/mom-4.jpg",
        },
        {
          img: "assets/images/gallery/moments/mom-5.jpg",
        },
        {
          img: "assets/images/gallery/moments/mom-6.jpg",
        },
        {
          img: "assets/images/gallery/moments/mom-7.jpg",
        },
        {
          img: "assets/images/gallery/moments/mom-8.jpg",
        },
      
       
      ]
    },
    // {
    //   title: 'Moments from Press Meet 2022',
    //   image: [
    //     {
    //       img: "assets/images/gallery/me1.webp",
    //     },
    //     {
    //       img: "assets/images/gallery/me2.webp",
    //     },
    //     {
    //       img: "assets/images/gallery/me3.jpeg",
    //     },
    //     {
    //       img: "assets/images/gallery/me4.webp",
    //     },
    //     {
    //       img: "assets/images/gallery/me5.webp",
    //     },
    //     {
    //       img: "assets/images/gallery/me6.webp",
    //     },
       
    //   ]
    // }
  ]
  return (
    <>
      <div className='brand-container '>
        <div className=' bg-primary rounded-lg p-5  my-10  flex flex-col  gap-5 '>
          <div className='flex justify-center w-full'>
            <TitleGradient title={'Gallery'} />
          </div>
          <div className='flex justify-start gap-5 md:ga-5 lg:gap-24 xl:gap-24 w-full overflow-auto items-center  scrollbar-hide '>
            {GalleryData.map((item, index) =>
              <div key={index} className='group mx-0 md:mx-0 lg:mx-10 xl:mx-10' onClick={()=>{setGallery(index)}}>
                <p className='text-white whitespace-nowrap  cursor-pointer'>{item.title}</p>
                <div className={`group-hover:w-full h-1 bg-white rounded-full transition-all duration-200 ${selectedGallery === index? 'w-full ': 'w-0' }`} />
              </div>
            )}

          </div>
          <div className=''>
            <GallerySlider imageData={GalleryData[selectedGallery].image} />
          </div>
        </div>

      </div>
    </>
  )
}

export default Gallery



const GallerySlider = (props) => {

  const [nav1, setNav1] = useState();
  const [nav2, setNav2] = useState();

  const CustomHandling = useRef(null)

  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    centerMode: false,
    speed: 800,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
    autoplaySpeed: 5000,
    vertical: true,
    verticalSwiping: true,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 824,
        settings: {
          vertical: false,
          verticalSwiping: false,
          swipeToSlide: true,
        }
      },]

  };

  return (
    <>

      <div className='flex flex-col-reverse md:flex-col-reverse lg:flex-row xl:flex-row   gap-5 mx-0 md:mx-0 lg:mx-10 xl:mx-10 items-center'>
        <div className='w-full md:w-full lg:w-1/4 xl:w-1/4 h-full'>
          <Slider asNavFor={nav2} ref={(slider1) => setNav1(slider1)} {...settings} >
            {
              props.imageData.map((item, index) =>
                <div >
                  <img className='rounded-lg cursor-pointer px-1  ' src={item.img} alt="" />
                </div>
              )
            }
          </Slider>
        </div>

        <div className='w-full md:w-full lg:w-3/4 xl:w-3/4'>
          <Slider asNavFor={nav1} ref={(slider2) => setNav2(slider2)} slidesToShow={1} swipeToSlide={true} focusOnSelect={true} arrows={false}>
            {
              props.imageData.map((item, index) =>
                <div >
                  <img className=' w-full  rounded-lg  ' src={item.img} alt="" />
                </div>
              )
            }
          </Slider>
        </div>
      </div>

    </>
  )
}
