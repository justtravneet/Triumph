import React from 'react'
import {Megaphone,AlignJustify,Search,Heart,ShoppingBag} from "lucide-react"
const Heroone = () => {
  return (
    <div>
          {/* Exclusive */}
          <div className='exclusive flex items-center justify-center gap-[2px] md:gap-[4px] md:py-[3px]  '>
                 <div>
                     <Megaphone size={20} strokeWidth={1} color="#fcf8f8" />
                 </div>
                 <div>
                     <p className='text-[10px] text-white'>Get exclusive deals upto <span className=' font-semibold'>25%</span> </p>
                 </div>
          </div>
          
          {/* navbar */}
          <div className='navback bg-white '>
                <div className='px-[10px] py-[5px] sm:px-[25px] sm:py-[5px] md:px-[35px] lg:px-[65px] xl:px-[100px] 2xl:justify-center 2xl:gap-[100px] flex items-center justify-between'>
                      <div>
                          <img className='w-[120px] sm:w-[150px] lg:w-[190px]' src="./public/vite.svg" alt="" />
                      </div>

                      <div className='menu'>
                           <ul className='flex gap-[25px]  mr-[0px]  tracking-wider'>
                               <li><a href="http://" className='info text-[13px] '>Home</a></li>
                               <li><a href="http://" className='info text-[13px]'>Shop</a></li>
                               <li><a href="http://"className='info text-[13px] '>Contact Us</a></li>
                               <li><a href="http://" className='info text-[13px] '>About Us</a></li>
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
                                 <Search className='w-[18px] sm:w-[22px] lg:w-[24px]' color='#ffffff' strokeWidth={1.5} />
                             </div>
                             <div>
                                <Heart className='w-[18px] sm:w-[22px] lg:w-[24px]' color='#ffffff'  strokeWidth={1.5} />
                             </div>
                             <div>
                                <ShoppingBag className='w-[18px] sm:w-[22px] lg:w-[24px]' color='#ffffff'  strokeWidth={1.5} />
                             </div>

                               <div className='menuicon'>
                                <AlignJustify size={25} className='  px-[1px] py-[2px] rounded-md' color='#ffffff'  strokeWidth={1.5} />
                              </div>
                      </div>

                     
                </div>
          </div>
    </div>
  )
}

export default Heroone