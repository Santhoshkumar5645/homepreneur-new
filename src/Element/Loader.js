import React from 'react'

function Loader() {
  return (
    <>
    <div className='fixed inset-0 bg-heading/50 backdrop-blur-md w-full h-full  z-50 flex justify-center items-center'>
        <div className='flex justify-center items-center flex-col gap-2'>
            <img className='w-20 animate-spin' src="assets/svg/icons/loader.svg" alt="" />
            <p className='text-primary font-bold capitalize'>sit tight your application getting saved</p>
        </div>
    </div>
    </>
  )
}

export default Loader