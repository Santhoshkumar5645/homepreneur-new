import React from 'react'
// import { LazyLoadImage } from "react-lazy-load-image-component";


function CustomCard(props) {
    return (
        <>
            <div className='hidden md:block lg:block xl:block group w-[200px] h-[200px] mx-2 my-5 overflow-hidden rounded-lg [perspective:1000px] cursor-pointer'  >
                <div className='w-full h-full relative transition-all duration-300 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)] ' style={{WebkitBackfaceVisibility:'hidden', backfaceVisibility:'hidden'}} >
                    <div className='absolute inset-0 bg-gradient-to-br from-[#A07941] via-[#EBEAB5] to-[#C6A560] p-1.5'>
                    {/* <LazyLoadImage key={props.img} effect='transition' placeholderSrc={props.img}     className='w-full h-full rounded-lg' threshold={100} src={props.img}  width={188} height={188} /> */}
                    <img  className='w-full h-full rounded-lg' src={props.img} alt="" />
                    </div>
                    <div className='absolute flex-col gap-4 items-center backdrop-blur-sm justify-center flex h-full p-3 inset-0 bg-heading/70 [transform:rotateY(180deg)] [backface-visibility:hidden] text-white'>
                        <p className='text-xl text-center capitalize'>{props.jname} </p>
                        <p className='text-sm text-center'>{props.designation}</p>
                        <p className='hidden'>Company</p>
                    </div>
                </div>

            </div>


            <div className='md:hidden lg:hidden xl:hidden   mx-2 my-5 overflow-hidden rounded-lg '>
            <div className='w-full h-full ' >
                    <div className='  bg-gradient-to-br from-[#A07941] via-[#EBEAB5] to-[#C6A560] p-1.5 rounded-lg'>
                    <img  className='w-full h-full rounded-lg' src={props.img} alt="" />
                    </div>
                    <div className='  mt-3  text-white'>
                        <p className='text-xl text-center capitalize'>{props.jname} </p>
                        <p className='text-sm text-center'>{props.designation}</p>
                        <p className='hidden'>Company</p>
                    </div>
                    </div>
                    
            </div>
        </>
    )
}

export default CustomCard

const Tempcard = ()=>{
    return(
        <>
        <div className='w-full bg-gradient-to-tr from-heading to-white h-full animate-pulse'>

        </div>
        </>
    )
}