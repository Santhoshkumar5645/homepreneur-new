import React from 'react'
import { motion } from 'framer-motion'


function TitleGradient(props) {

    const textAnimate = {
        offscreen: { y: -100, opacity: 0 },
        onscreen: {
            y: 0, opacity: 1, transition: { type: "spring", bounce: 0.4, duration: 2 }
        }
    }

    return (
        <>
            <motion.div class="select-none" viewport={{once:true}} initial={'offscreen'} whileInView={'onscreen'}  variants={textAnimate} transition={{staggerChildren:0.5}}  >
                {/* <p class="text-2xl md:text-4xl -ml-10 lg:text-5xl xl:text-5xl font-bold -m-5  whitespace-nowrap font-style-border text-white/0" style={{ WebkitTextStroke: '0.1px #C6A560' }}>{props.title}</p>
                <p class="font-bold  text-xl md:text-2xl lg:text-3xl xl:text-4xl text-white/0 bg-clip-text bg-gradient-to-b from-[#A07941] via-[#EBEAB5] to-[#C6A560]">{props.title}</p> */}


                {/* <p class="text-2xl sm:text-xl md:text-2xl lg:text-4xl xl:text-5xl capitalize font-bold -mb-5 sm:-mb-6 lg:-mb-7 xl:-mb-8  whitespace-nowrap font-style-border text-white/0" style={{ WebkitTextStroke: '0.5px #C6A560' }}>{props.title}</p> */}
                <p class="font-bold uppercase relative text-3xl py-2 sm:text-xl md:text-2xl lg:text-4xl xl:text-5xl z-10 text-white/0 bg-clip-text bg-gradient-to-b from-[#A07941] via-[#EBEAB5] to-[#C6A560]">{props.title}</p>
            </motion.div>
        </>
    )
}

export default TitleGradient