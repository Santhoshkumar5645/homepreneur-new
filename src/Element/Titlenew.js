import React from 'react'
import { motion } from 'framer-motion'


function Titlenew(props) {


  const textAnimate={
    offscreen:{y:-100, opacity:0},
    onscreen:{y:0,opacity:1,transition: {type:"spring",bounce:0.4,duration:2}
 }

}



  return (
    <>
    <motion.div  class="flex flex-col" viewport={{once:true}} initial={'offscreen'} whileInView={'onscreen'}  variants={textAnimate} transition={{staggerChildren:0.5}}  >
        {/* <p class="text-2xl sm:text-xl md:text-2xl lg:text-4xl xl:text-5xl capitalize font-bold -mb-6 sm:-mb-6 lg:-mb-7 xl:-mb-8  whitespace-nowrap font-style-border text-white/0" style={{ WebkitTextStroke: '0.5px #6A3051', WebkitTextFillColor: '#FFFFFF' }}>{props.title}</p> */}
        <p class="font-bold uppercase relative   text-3xl md:text-2xl lg:text-4xl xl:text-5xl z-10 text-primary">{props.title}</p>
    </motion.div>
</>
  )
}

export default Titlenew