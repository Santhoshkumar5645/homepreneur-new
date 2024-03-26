import React from 'react'

function TimerBox(props) {
  return (
   <>
    <div className='flex flex-col gap-3 items-center'>
      <div className='p-3 flex items-center justify-center  rounded-[10px] w-[50px] md:w-[100px] lg:w-[100px] xl:w-[100px]  bg-[#DCB7CD]/20'>
        <p className='text-white text-sm sm:text-xl md:text-2xl lg:text-5xl xl:text-5xl font-digital'>{props.value}</p>
      </div>
      <p className='text-xs sm:text-md md:text-lg lg:text-xl xl:text-xl text-[#DCB7CD]  capitalize '>{props.title}</p>
    </div>
   </>
  )
}

export default TimerBox