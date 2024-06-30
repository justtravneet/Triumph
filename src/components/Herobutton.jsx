import React from 'react'
import { motion } from "framer-motion";
import Herocards from './Herocards';
import { Link, BrowserRouter, Routes, Route } from "react-router-dom";


const Herobutton = () => {
  return (
    <div>

      <BrowserRouter>

        <div className='flex justify-center gap-[10px]  px-[10px] py-[10px] sm:px-[25px] sm:py-[5px] md:px-[35px] lg:px-[65px] xl:px-[100px] 2xl:justify-center 2xl:gap-[100px]'>
          <Link to="/indoor"><motion.div  ><button className=' bg-slate-300 py-[8px] px-[10px] rounded-xl'><p className='text-[13px] tracking-wider'>Indoor Lights</p></button></motion.div></Link>

          <Link to="/outdoor"><div><button className='py-[8px] px-[10px] bg-slate-300 tracking-wider rounded-xl'><p className='text-[13px] tracking-wider'>Outdoor Lights</p></button></div></Link>

        </div>


        <div>
          <Routes>

            <Route path="/" />
            <Route path="/outdoor" element={<Herocards />} />


          </Routes>
        </div>




      </BrowserRouter>
    </div>
  )
}

export default Herobutton