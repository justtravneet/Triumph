import React ,{useState} from 'react'
import {ChevronLeft , ChevronRight } from "lucide-react"
import bg1 from "/public/back.jpg"
import bg2 from "/public/6003842.jpg"
import bg3 from "/public/1653.jpg"
const Herotwo = () => {
  

  const images = [bg1,bg2 ,bg2]

 const [slides ,setslides]= useState(0);
 const next = () =>{
    setslides(slides ===2? 0 : slides + 1)
 }

 const prev = () =>{
  setslides(slides ===0? 2  : slides - 1)
 }

  return (
    <div>
          <div className='content w-[100%] h-[180px]'>
                 
                 <div className='slides ' >
                      <img src={images[slides] } alt="" />
                 </div>

                 <div className='flex justify-between '>
                     <div className='prev' onClick={prev} >
                        <ChevronLeft />
                      </div>
                      <div className='next'  onClick={next} >
                      <ChevronRight />
                     </div>
                 </div>
                 
          </div>

    </div>
  )
}

export default Herotwo