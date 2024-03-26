import React from 'react'
import { toast } from 'react-toastify'
import {
    FacebookMessengerShareButton,
    FacebookShareButton,
    TwitterShareButton,
    WhatsappShareButton,
  } from "react-share";
import { useNavigate } from 'react-router';


function SupportCampaign() {
    const navigate = useNavigate();

    const linkData = 'https://homepreneurawards.com/blog'; //live url

const LinkCopy = () =>{

    navigator.clipboard.writeText(linkData);

    toast.info('Link Copied', {
        position: "bottom-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });

}

    return (
        <>
  <div className='brand-max-width h-screen mx-auto' style={{ backgroundImage: "url('assets/svg/background/people.svg')", backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'top' }}>
                <p className='text-center text-4xl my-5 font-semibold text-primary'>Thank you for your support</p>
                <div className='w-full p-10 px-5 sm:px-[50px] md:px-[100px] lg:px-[200px] xl:px-[200px] flex flex-col-reverse  lg:flex-row xl:flex-row justify-center lg:flex-between xl:justify-between items-center gap-10'>

                    <div className='flex flex-col gap-3 w-full  lg:w-3/5  xl:w-3/5'>
                        


                       
                        <div className='bg-[#F8E6F0] w-fit p-5 flex flex-col gap-5 rounded-[5px] shadow-md'>
                            <div className='flex gap-5 items-center'>
                                <img className='w-10 h-auto' src="assets/svg/icons/support.svg" alt="" />
                                <p className='text-xl text-[#000000]'>Lend your support to Our Campaign</p>
                            </div>
                            <p className='text-[#666666] leading-7'>
                                India, a country with a population of over 1.4 billion people, is rapidly becoming one
                                of the world's fastest-growing economies. While India has seen a significant rise in
                                entrepreneurship in recent years, it's unfortunate that the majority of entrepreneurs
                                are men. Women entrepreneurs, on the other hand, have been an underrepresented group in
                                the Indian entrepreneurial ecosystem...
                            </p>
                            <div className='flex flex-col items-center gap-5 w-full'>

<div className='max-w-[500px] w-full'>
    <button onClick={LinkCopy} className='capitalize px-2 py-2 w-full border rounded-md active:opacity-50 border-paragraph/80'>
        <div className='flex  gap-2 justify-center'>
            <img className='w-5 ' src="assets/svg/link.svg" alt="" />
            <p>copy link</p>
        </div>
    </button>
</div>
<div className='max-w-[500px] w-full'>
    <div className='flex gap-x-5'>
    <button className='capitalize px-2 py-2 w-full border rounded-md active:opacity-50 border-paragraph/80'>
        <FacebookShareButton url={linkData}>
        <div className='flex  gap-2 justify-center'>
            <img className='w-5 ' src="assets/svg/faceb.svg" alt="" />
            <p>facebook</p>
        </div>
        </FacebookShareButton>
    </button>
    <button className='capitalize px-2 py-2 w-full border rounded-md active:opacity-50 border-paragraph/80'>
        <WhatsappShareButton url={linkData}>
        <div className='flex  gap-2 justify-center items-center'>
            <img className='w-5 ' src="assets/svg/wht.svg" alt="" />
            <p>whtsapp</p>
        </div>
        </WhatsappShareButton>
    </button>
    </div>
</div>
<div className='max-w-[500px] w-full'>
    <div className='flex gap-x-5'>
    <button className='capitalize px-2 py-2 w-full border rounded-md active:opacity-50 border-paragraph/80'>
        <FacebookMessengerShareButton url={linkData}>
        <div className='flex  gap-2 justify-center'>
            <img className='w-5 ' src="assets/svg/mess.svg" alt="" />
            <p>messenger</p>
        </div>
        </FacebookMessengerShareButton>
    </button>
    <button className='capitalize px-2 py-2 w-full border rounded-md active:opacity-50 border-paragraph/80'>
    <TwitterShareButton url={linkData}>
        <div className='flex  gap-2 justify-center'>
            <img className='w-5 ' src="assets/svg/twit.svg" alt="" />
            <p>twitter</p>

        </div>
    </TwitterShareButton>
    </button>
    
    </div>
</div>
<div className='max-w-[500px] w-full hidden'>
    <div className='flex gap-x-5'>
    <button className='capitalize px-2 py-2 w-full border rounded-md active:opacity-50 border-paragraph/80'>
        <div className='flex  gap-2 justify-center'>
            <img className='w-5 ' src="assets/svg/insta.svg" alt="" />
            <p>instagram</p>
        </div>
    </button>
    
    </div>
</div>
</div>
                            

                        </div>

                    </div>

                    <div className=' w-fit' style={{ backgroundImage: "url('assets/gif/bgsuc.gif')", backgroundRepeat: 'no-repeat', backgroundPosition: 'left' }}>
                        <img className='h-[400px] object-contain' src="assets/images/honortick.png" alt="" />
                    </div>

                </div>
            </div>


     
        </>
    )
}

export default SupportCampaign