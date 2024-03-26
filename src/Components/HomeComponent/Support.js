import React from 'react'
import { useNavigate } from 'react-router'

function Support() {
    const navigate = useNavigate();
    return (
        <>
            
            <div className='brand-container '>
                <div className=' bg-primary rounded-lg p-5 flex flex-col sm:flex-row md:flex-row lg:flex-row xl:flex-row gap-5 justify-center sm:justify-between md:justify-between lg:justify-between xl:justify-between my-10  items-center'>
                <div className='flex gap-5 items-center'>
                    <img className='w-10 h-auto' src="assets/svg/icons/support.svg" alt="" />
                    <p className='text-sm md:text-lg lg:text-xl xl:text-xl capitalize text-white'> The Rise of Women Entrepreneurs: Why Recognizing Success is More Important Than Ever.</p>
                </div>

                <p onClick={()=> navigate('/campaign')} className='px-5 py-4 cursor-pointer select-none active:bg-white rounded-lg capitalize bg-white text-primary whitespace-nowrap'>I Support</p>
                </div>

            </div>
        </>
    )
}

export default Support