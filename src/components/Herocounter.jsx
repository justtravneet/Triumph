import React, { useState } from 'react'
import ScrollTrigger from 'react-scroll-trigger'
import CountUp from 'react-countup'
function Herocounter ()  {
    
    const [counterstart,setcounterstart] = useState(false);

  return (

    <div>
        <ScrollTrigger  onEnter={() => setcounterstart(true)} onExit={() => setcounterstart(false)}>

        
         <div className='px-[10px] py-[5px] sm:px-[25px] sm:py-[5px] md:px-[35px] lg:px-[65px] xl:px-[100px] 2xl:justify-center 2xl:gap-[100px] '>
             
              <div className='flex  justify-center py-[20px]'><p className=' text-[14px] '>India's no.1 Lights Brand</p></div>

              <div className=' px-[10px] py-[5px] sm:px-[25px] sm:flex sm:gap-[-50px] sm:py-[5px] md:px-[35px] lg:px-[65px] xl:px-[100px] 2xl:justify-center 2xl:gap-[100px]   justify-around'>
                    <div className='py-[10px]'>
                           <div className=' flex flex-col items-center gap-[4px]'>
                                <img className='w-[55px] md:w-[50px] lg:w-[60px] ' src="warranty.png" alt="" />
                                <p className='text-[14px] md:text-[11px] text-center '>Warranty</p>
                           </div>

                           <div className='flex text-center flex-col justify-center '>
                                 <p className=' text-[23px] md:text-[22px] font-semibold'>2</p>
                                 <p className=' text-[17px] md:text-[14px]'>Years</p>
                           </div>
                    </div>

                    <div className='py-[10px]'>
                           <div className=' flex flex-col items-center gap-[4px]'>
                                <img className='w-[40px] md:w-[50px] lg:w-[60px]  ' src="order.png" alt="" />
                                <p className='text-[9px] md:text-[11px] text-center '>More Than</p>
                           </div>

                           <div className='flex text-center flex-col justify-center '>
                                 <p className=' text-[20px] md:text-[22px] font-semibold'>
                                    {counterstart &&  <CountUp start={0} end={4000} duration={2} delay={0} />}
                                   +
                                 </p>
                                 <p className=' text-[11px]  md:text-[14px] '>Orders</p>
                           </div>
                    </div>

                    <div className='py-[10px]'>
                           <div className=' flex flex-col items-center gap-[4px]'>
                                <img className='w-[40px] md:w-[50px] lg:w-[60px] ' src="customer.png" alt="" />
                                <p className='text-[9px]  md:text-[11px]  text-center '>Warranty</p>
                           </div>

                           <div className='flex text-center flex-col justify-center '>
                                 <p className=' text-[20px] md:text-[22px]  font-semibold'>24*7</p>
                                 <p className=' text-[11px] md:text-[14px]'>Years</p>
                           </div>
                    </div>
                    
              </div>


         </div>
        </ScrollTrigger>
    </div>
  )
}

export default Herocounter