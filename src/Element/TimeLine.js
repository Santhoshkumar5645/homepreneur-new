import React from 'react'

function TimeLine(props) {
    return (
        <>
            <div className='flex gap-5 items-center justify-center w-full'>
                <p className='text-paragraph capitalize'>{props.date}</p>
                <div className='w-3 h-3 bg-primary rounded-full'></div>
                <p className='text-heading capitalize'>{props.host}</p>
            </div>
        </>
    )
}

export default TimeLine