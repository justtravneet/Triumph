import React from 'react'
import {ChevronRight} from "lucide-react"
import {motion} from "framer-motion"
const Slide = () => {
  return (
    <div>
       
            
         <motion.div  className='sidenav bg-white w-[220px] sm:w-[290px] md:w-[320px]'
            initial={{x: -250}}
            animate={{x: 0}}
            transition={{
                  ease: "linear",
                  duration: 1,
                  x: { duration: 0.5 }
                }}
         >
             
             <div>
                  <img src="back.jpg" alt="" />
             </div>

              <div className='intext px-[20px] sm:px-[30px]  flex justify-between py-[10px] border '>
                     <div><p className=''>Home</p></div>
                     <div><ChevronRight /></div>
              </div>

              <div className='intext px-[20px] sm:px-[30px] flex justify-between py-[10px] border'>
                     <div><p>Shop</p></div>
                     <div><ChevronRight /></div>
              </div>

              <div className='intext px-[20px] sm:px-[30px] flex justify-between py-[10px] border'>
                     <div><p>Contact Us</p></div>
                     <div><ChevronRight /></div>
              </div>

              <div className='intext px-[20px] sm:px-[30px] flex justify-between py-[10px] border'>
                     <div><p>About Us</p></div>
                     <div><ChevronRight /></div>
              </div>

         </motion.div>
      
    </div>
  )
}

export default Slide