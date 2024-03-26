import React from 'react'
import { RedirectLink } from '../../Utility'
import { motion } from 'framer-motion'


function Footer() {

  const SocialLinkData = [
    {
      image: 'assets/svg/icons/instagram.svg',
      link: 'https://www.instagram.com/homepreneurawards/',
      whiteimage:'assets/svg/icons/instagram-white.svg',
    },
    {
      image: 'assets/svg/icons/twitter.svg',
      link: 'https://twitter.com/homepreneurawrd',
      whiteimage:'assets/svg/icons/twitter-white.svg',

    },
    {
      image: 'assets/svg/icons/facebook.svg',
      link: 'https://www.facebook.com/Homepreneurawards/',
      whiteimage:'assets/svg/icons/facebook-white.svg',

    },
    {
      image: 'assets/svg/icons/youtube.svg',
      link: 'https://www.youtube.com/channel/UC39bsscmosd76qejF8Osdpw/videos',
      whiteimage:'assets/svg/icons/youtube-white.svg',

    },
  ]

  return (
    <>

    <div className='bg-[#F7F0F6] py-10 brand-container w-full'>
      <div className='flex flex-col md:flex-col lg:flex-row xl:flex-row gap-5 justify-between  items-center md:items-center lg:items-start xl:items-start'>
        <div className='flex flex-col gap-5 w-full sm:w-4/5 md:w-4/5 lg:w-2/3 xl:w-2/3'>
          <img className='w-[300px] h-auto' src="assets/images/brandavatar.png" alt="" />
          <div>
            <p className='text-primary font-outfit text-[20px]'>Address</p>
            <p className='text-primary/60 font-outfit text-[15px]'>NO 1 KANDASAMY STREET, Chandrabagh Ave 2nd St, Dr Radha Krishnan Salai, OPPOSITE ROAD TO HOTEL CLARION, Mylapore, Chennai, Tamil Nadu 600004.
            </p>

          </div>

        </div>
        <div className='flex flex-row md:flex-row lg:flex-col xl:flex-col justify-center w-full items-end gap-5'>
          <div className='flex flex-col items-start gap-2'>
            <p className='capitalize text-primary/60 text-[16px]'>follow us</p>
            <ul className='flex gap-x-3'>
              {
                SocialLinkData.map((list, index) =>
                  <li onClick={()=> RedirectLink(list.link)} key={index}><SocialLink image={list.image} /></li>
                )
              }
            </ul>
          </div>
          <img className='w-24' src="assets/svg/icons/mail.svg" alt=""/>

        </div>
      </div>

      <p className='text-center text-primary mt-10'>2024, Homepreneur Awards, All Rights Reserved</p>

    </div>

    <motion.div initial={{x:500}} animate={{ x: 0 }} transition={{ type: "spring", stiffness: 150, delay:5  }} className='fixed bottom-5 right-5 p-3 bg-white rounded-full shadow-md select-none'>
      <a href="https://api.whatsapp.com/send/?phone=919150045593&text=&type=phone_number&app_absent=0" target={'_blank'}><img draggable={false} className='w-10' src="assets/svg/icons/whatsapp.svg" alt="whp" /></a>
    </motion.div>

    <Hanging linkData={SocialLinkData} />
    </>
  )
}

export default Footer

const SocialLink = (props) => {
  return (
    <>
      <div className='p-3 rounded-full w-fit bg-[#D4A7C1] cursor-pointer'>
        <img draggable='false' className='w-5 h-5' src={props.image} alt="" />
      </div>
    </>
  )
}
{}
const Hanging = (props) =>{
  return(
    <>
    <motion.div initial={{x:-500}} animate={{ x: 0 }} transition={{ type: "spring", stiffness: 150, delay:7  }} className='  bg-primary shadow-lg shadow-white/20  fixed top-2/4 z left-0 hidden md:block lg:block'>
        <div className='relative  overflow-hidden'>
          <ul className='flex flex-col justify-center items-center gap-5 py-3 px-4 '>
            {props.linkData.map((item, index)=>
            <li className='' key={index}><img onClick={()=> RedirectLink(item.link)} className='w-6 h-auto cursor-pointer hover:translate-x-2 transition-all duration-300' src={item.whiteimage} alt=""/></li>
            )}
          </ul> 
          <div className='w-3 h-3 bg-white/90 rounded-full absolute animate-ping duration-300 top-0 z-10   right-0'></div>
          <div className='w-5 h-5 bg-white/20 rounded-full absolute animate-ping delaty-2 duration-300 top-0 z-10  right-0'></div>

        </div>
    </motion.div>
    </>
  )
}