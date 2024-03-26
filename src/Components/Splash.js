import React from 'react'

function Splash(props) {
    return (
        <>
            <div className={props.active? 'fixed  inset-0 bg-primary z-50 transition-all translate-y-0 duration-200' : 'hidden'}>
                <video lazyload className='h-screen w-screen object-cover object-top ' src="assets/video/hero-section-1.mp4" onEnded={()=> props.EndHangler(false)} autoPlay={true} muted  />
                <div className='w-full h-full fixed inset-0 bg-gradient-to-br from-primary/0 via-primary/0 to-primary/0 '>
                    <div className='brand-container flex justify-end py-10 items-start w-screen h-screen'>
                    <button onClick={props.Handler} type='button' className='bg-white text-primary capitalize px-5 py-3 rounded-lg border border-primary hover:bg-primary/20 hover:text-white hover:border-white hover:border transition-all duration-500'>Skip</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Splash