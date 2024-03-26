import React from 'react'
import TitleGradient from '../../Element/TitleGradient'

function Jurymember() {

    const data=[
        {
            jname:"Akila",
            designation:"Project Lead, TANSIM",
            image:"assets/images/tinjury/tansim1.webp",
        },
        {
            jname:"Priya Mohan",
            designation:"AVP - TANSIM",
            image:"assets/images/tinjury/tansim2.webp",
        },
    ]
    return (
        <>
            <div className=' brand-max-width py-10 mx-auto' style={{ backgroundImage: "url(assets/svg/background/section-bg.svg)" }}>
                <div className='brand-container flex flex-col items-center md:items-start lg:items-start xl:items-start '>
                    <TitleGradient title={'TANSIM \ Startup TN Jury'} />

                    <div className='grid gap-16 py-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 w-full content-center justify-items-center'>
                        {data.map((item,index)=>
                    
                                <JuryCard key={index} image={item.image} designation={item.designation} jname={item.jname} />
                        )}
                  

                    </div>
                </div>
            </div>
        </>
    )
}

export default Jurymember


const JuryCard = (props) =>{
    return(
        <>
        <div className='w-fit group flex flex-col justify-center items-center m-2'>
            <img className='-mb-8 z-10 w-[200px] h-auto' src={props.image} alt="" />
            <div className='flex group-hover:-translate-y-4 transition-all duration-300 flex-col w-[230px] justify-center items-center gap-5 py-5 px-10 bg-[#D4A7C1] z-20 relative rounded-[10px]'>
                <p className='text-primary font-bold'>{props.jname}</p>
                <p className='text-primary/60 text-sm'>{props.designation}</p>
            </div>

        </div>
        </>
    )
}