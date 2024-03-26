import React from 'react'
import { useNavigate } from 'react-router'
import { useSearchParams } from 'react-router-dom';

function CampaignSuccess() {
    const [Data] = useSearchParams();

    if (Data.get('name') === null) {
        // window.location.href = '/';
    } else {
        console.log(Data.get('name'));
    }

    const navigate = useNavigate();


    return (
        <>
            <div className='brand-max-width h-screen mx-auto' style={{ backgroundImage: "url('assets/svg/background/people.svg')", backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'top' }}>
                <p className='text-center text-4xl my-5 mt-16 font-semibold text-primary'>Registration Successful</p>
                <div className='w-full p-10 px-5 sm:px-[50px] md:px-[100px] lg:px-[200px] xl:px-[200px] flex flex-col-reverse  lg:flex-row xl:flex-row  justify-center lg:flex-between xl:justify-between items-center gap-10'>

                    <div className='flex flex-col gap-3 w-full  md:w-2/3 lg:w-2/3 xl:w-1/3'>
                        <p className='text-4xl text-primary capitalize font-semibold '>Thank you for your Support</p>

                            <p className='text-lg text-paragraph/80  '>Help us by letting other people know about our Campaign by Sharing! </p>
                           


                        <div className='flex flex-col md:flex-row lg:flex-row xl:flex-row  gap-5'>

                        </div>
                        <div className='flex items-center justify-start'>
                                <p onClick={() => navigate('/blog')} className='text-center cursor-pointer py-3 px-5 bg-primary rounded-[10px] active:opacity-50 w-fit text-white'>
                                    Share
                                </p>
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

export default CampaignSuccess