import React from 'react'
import { useNavigate } from 'react-router'
import { useSearchParams } from 'react-router-dom';

function RegisterSuccessful() {


    const [Data] = useSearchParams();

    if (Data.get('name') === null) {
        window.location.href = '/';
    } else {
        console.log(Data.get('name'));
    }




    const navigate = useNavigate();
    return (
        <>
            <div className='brand-max-width h-screen mx-auto' style={{ backgroundImage: "url('assets/svg/background/people.svg')", backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'top' }}>
                <p className='text-center text-4xl my-5 font-semibold text-primary'>Registration Successful</p>
                <div className='w-full p-10 px-5 sm:px-[50px] md:px-[100px] lg:px-[200px] xl:px-[200px] flex flex-col-reverse  lg:flex-row xl:flex-row justify-center lg:flex-between xl:justify-between items-center gap-10'>

                    <div className='flex flex-col gap-3 w-full  lg:w-3/5  xl:w-3/5'>
                        <p className='text-4xl text-primary'>Dear, {Data.get('name')}</p>
                        {Data.get('flag') === '0' ?

                            // Student Edition Content
                            <p className='text-lg'>Thank You for registering for the Student Edition 2024</p>
                            :
                            // Registration Content
                            <p className='text-lg'>Thank You for registering for the 6th Edition of the
                                Hompreneur Awards/சுயசக்தி விருதுகள் 2024</p>

                        }


                        <div className='flex flex-col md:flex-row lg:flex-row xl:flex-row  gap-5'>
                            <Box show={'1'} title={'Your Id:'} content={Data.get('id')} />
                            <Box show={Data.get('flag')} title={'Your Category:'} content={Data.get('category')} />
                        </div>
                        <p className='text-[#000000] text-lg'> <span className='opacity-50'> Note:</span> Your Register Number will be used for all further communications with you</p>
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
                            <div className='flex items-center justify-center'>
                                <p onClick={() => navigate('/blog')} className='text-center cursor-pointer py-3 px-5 bg-primary rounded-[10px] active:opacity-50 w-fit text-white'>
                                    View More
                                </p>
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

export default RegisterSuccessful

const Box = (props) => {
    return (
        <>
            <div className={`flex gap-2 items-center border border-paragraph/20 w-fit py-2 px-3 rounded-[10px] ${props.show === '1' ? '' : 'hidden'}`}>
                <p className='text-md whitespace-nowrap text-paragraph'>{props.title}</p>
                <p className='text-primary whitespace-nowrap text-md font-semibold'>{props.content}</p>
            </div>
        </>
    )
}