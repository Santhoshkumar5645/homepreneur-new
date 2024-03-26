import React from 'react'

function SponserCard(props) {
    return (
        <>
            <div className='flex flex-col items-center p-3'>
                <p className='text-primary text-md capitalize whitespace-nowrap'>{props.title}</p>
                <img  className='w-auto h-[180px]  aspect-square object-contain  ' src={props.img} alt="" />
            </div>
        </>
    )
}

export default SponserCard