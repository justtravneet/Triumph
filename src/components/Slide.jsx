import React from 'react'
import {ChevronRight} from "lucide-react"
const Slide = () => {
  return (
    <div  >
         <div >
            <div className='slideback fixed flex flex-col gap-[20px] py-[30px] px-[10px] rounded-lg mt-[5px]   w-[70%]'>
              <div className='sidebtn flex justify-between items-center py-[5px] w-[180px] ml-[10px]'>
                    <div><p className=' text-[18px] ml-[12px] '>Home</p></div>
                    <div><ChevronRight /></div>
              </div>
              <div className='sidebtn  flex justify-between items-center py-[5px] w-[180px] ml-[10px] '>
                    <div><p className=' text-[18px] ml-[12px] '>Shop</p></div>
                    <div><ChevronRight /></div>
              </div>
              <div className='sidebtn  flex justify-between items-center py-[5px] w-[180px]  ml-[10px]'>
                    <div><p className=' text-[18px] ml-[12px]'>Contact Us</p></div>
                    <div><ChevronRight /></div>
              </div>
              <div className='sidebtn  flex justify-between items-center py-[5px] w-[180px] ml-[10px]'>
                    <div><p className=' text-[18px] ml-[12px]'>About Us</p></div>
                    <div><ChevronRight /></div>
              </div>
            </div>

            
               
         </div>
    </div>
  )
}

export default Slide