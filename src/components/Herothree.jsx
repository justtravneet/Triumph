import React from 'react'

const Herothree = () => {
  return (
    <div>
        <div className='flex justify-center px-[10px] py-[5px] sm:px-[25px] sm:py-[5px] md:px-[35px] lg:px-[65px] xl:px-[100px] 2xl:justify-center 2xl:gap-[100px] '>
              <div className='doorsbtn bg-white flex justify-around py-[5px]  rounded-[50px] w-[85%]'>
                     <div className='indoorbtn  py-[5px] px-[20px] flex items-center rounded-[50px]'>
                         <button className=' text-[20px]  tracking-wide'>Indoor</button>
                     </div>

                     <div  className='outdoorbtn  py-[5px] px-[20px] flex items-center  rounded-[50px]'>
                        <button className=' text-[20px]  tracking-wide'>Outdoor</button>
                     </div>
              </div>
        </div>
    </div>
  )
}

export default Herothree