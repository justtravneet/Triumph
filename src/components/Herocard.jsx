import React from 'react'

const Herocard = () => {
  return (
    <div>
        <div className='outdoor flex gap-[15px] px-[10px] py-[5px] sm:px-[25px] sm:py-[5px] md:px-[35px] lg:px-[65px] xl:px-[100px] 2xl:justify-center 2xl:gap-[100px] '>
            <div className=' pics cardsback w-[140px] h-[210px]     '>
                 <div className='w-[140px] h-[140px] '>
                       <img className='imgborder w-[100%] h-[100%]' src="headphone.1.jpg" alt="" />
                 </div>

                 <div className='pics flex flex-col gap-[5px] mt-[5px]  '>
                       <div><p className='text-[11px] font-medium ml-[8px] text-white'>Boat</p></div>
                       <div>
                        <p  className='text-[11px] font-semibold ml-[8px]  text-white' >Color</p>
                       </div>
                       <div><p className='text-[11px] ml-[8px]  text-white'>Rs.999/-</p></div>
                       
                 </div>
            </div>

            <div className=' pics cardsback w-[140px] h-[210px]     '>
                 <div className='w-[140px] h-[140px] '>
                       <img className='imgborder w-[100%] h-[100%]' src="headphone.1.jpg" alt="" />
                 </div>

                 <div className='pics flex flex-col gap-[5px] mt-[5px]  '>
                       <div><p className='text-[11px] font-medium ml-[8px] text-white'>Boat</p></div>
                       <div>
                        <p  className='text-[11px] font-semibold ml-[8px]  text-white' >Color</p>
                       </div>
                       <div><p className='text-[11px] ml-[8px]  text-white'>Rs.999/-</p></div>
                       
                 </div>
            </div>

            <div className=' pics cardsback w-[140px] h-[210px]     '>
                 <div className='w-[140px] h-[140px] '>
                       <img className='imgborder w-[100%] h-[100%]' src="headphone.1.jpg" alt="" />
                 </div>

                 <div className='pics flex flex-col gap-[5px] mt-[5px]  '>
                       <div><p className='text-[11px] font-medium ml-[8px] text-white'>Boat</p></div>
                       <div>
                        <p  className='text-[11px] font-semibold ml-[8px]  text-white' >Color</p>
                       </div>
                       <div><p className='text-[11px] ml-[8px]  text-white'>Rs.999/-</p></div>
                       
                 </div>
            </div>

        </div>
    </div>
  )
}

export default Herocard