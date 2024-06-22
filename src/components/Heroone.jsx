import React, { useState } from 'react'
import {Megaphone,AlignJustify,Search,Heart,ShoppingBag} from "lucide-react"
import Slide from './Slide'
function Heroone (){
    const[status,setstatus] = useState(true)
  return (
    <div>
          {/* Exclusive */}
          <div className='exclusive  flex items-center justify-center gap-[2px] py-[3px] md:gap-[4px] md:py-[3px]  '>
                 <div>
                     <Megaphone size={25} strokeWidth={1.5} color="#fcf8f8" />
                 </div>
                 <div>
                     <p className='text-[14px] text-white'>Get exclusive deals upto <span className=' font-semibold'>25%</span> </p>
                 </div>
          </div>
          
          {/* navbar */}

      <div>

         <div className='navback bg-white  sticky'>
                <div className='px-[10px] py-[5px] sm:px-[25px] sm:py-[5px] md:px-[35px] lg:px-[65px] xl:px-[100px] 2xl:justify-center 2xl:gap-[100px] flex items-center justify-between'>
                      <div>
                            <img   className='w-[150px] sm:w-[180px] lg:w-[220px]' src="logo.png" alt="" />
                      </div>

                      <div className='menu'>
                           <ul className='flex gap-[25px]  mr-[0px]  tracking-wider'>
                               <li><a href="http://" className='info text-[16px] '>Home</a></li>
                               <li><a href="http://" className='info text-[16px]'>Shop</a></li>
                               <li><a href="http://"className='info text-[16px] '>Contact Us</a></li>
                               <li><a href="http://" className='info text-[16px] '>About Us</a></li>
                           </ul>
                      </div>

                      <div className='inputback w-[350px] flex gap-[5px] items-center justify-between'>
                           <div className='inputs'>
                              <input className='searchbar' type="text" placeholder='Search products' />
                           </div>
                           <div>
                              <Search className=' w-[18px] ' color='#ffffff' strokeWidth={1.5} />
                           </div>
                      </div>

                    

                      <div className='flex gap-[15px]'>
                            <div className='searchicon'>
                                 <Search className='w-[25px] sm:w-[30px] lg:w-[35px]' color='#ffffff' strokeWidth={1.5} />
                             </div>
                             <div>
                                <Heart className='w-[25px] sm:w-[30px] lg:w-[35px] xl:w-[45px]' color='#ffffff'  strokeWidth={1.5} />
                             </div>
                             <div>
                                <ShoppingBag className='w-[25px] sm:w-[30px] lg:w-[35px] xl:w-[45px]' color='#ffffff'  strokeWidth={1.5} />
                             </div>

                               <div className='menuicon ' onClick={()=> setstatus(!status)}  >
                                <AlignJustify size={28} className=' border  px-[1px] py-[2px] rounded-md' color='#ffffff'  strokeWidth={1.5} />
                              </div>

                      </div>

                     
                </div>
         </div>

                <div>
                  
                  {
                        status ?  <Slide />  : null
                  }
                    
                     
                </div>

     </div>
    </div>
  )
}

export default Heroone