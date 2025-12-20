import React from 'react'
import { easeOut, motion } from 'framer-motion'

const Hero = () => {
  return (
    <motion.div
    initial={{opacity:0,y:50}}
    whileInView={{opacity1,y:0}}
    transition={{duration:0.6,ease:easeOut}}
    viewport={{once:true}}
    id='home'
    className='min-h-screen flex items-center pd-16 pt-20'
    >
        
    </motion.div>
  )
}

export default Hero