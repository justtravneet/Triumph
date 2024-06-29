import React from 'react'
import { motion } from "framer-motion";


const Herobutton = () => {
  return (
    <div>
        
       
        <div className='flex justify-center gap-[10px]  px-[10px] py-[10px] sm:px-[25px] sm:py-[5px] md:px-[35px] lg:px-[65px] xl:px-[100px] 2xl:justify-center 2xl:gap-[100px]'>

              <motion.div  ><button className=' bg-slate-300 py-[8px] px-[10px] rounded-xl'><p className='text-[13px] tracking-wider'>Indoor Lights</p></button></motion.div>
               <div><button  className='py-[8px] px-[10px] bg-slate-300 tracking-wider rounded-xl'><p className='text-[13px] tracking-wider'>Outdoor Lights</p></button></div>
        </div>

        
       

         
    </div>
  )
}

export default Herobutton