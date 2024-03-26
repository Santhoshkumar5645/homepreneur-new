import React from 'react'

function Title(props) {
    return (
        <>
            <div class="relative">
                <p class="font-bold capitalize relative text-3xl z-10 text-primary">{props.title}</p>
                <p class="text-5xl font-bold absolute -left-28 -top-5 capitalize whitespace-nowrap font-style-border text-white/0" style={{ WebkitTextStroke: '0.2px #6A3051', WebkitTextFillColor: '#FFFFFF' }}>{props.title}</p>
            </div>
        </>
    )
}

export default Title