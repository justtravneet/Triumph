import React from 'react'

const About = () => {
    return (
        <div>
            <div className='  px-[10px] py-[5px] sm:px-[25px] sm:py-[5px] md:px-[35px] lg:px-[65px] xl:px-[100px] 2xl:justify-center 2xl:gap-[100px]  '>

                <div className='aboutresponsive w-[100%] h-[auto] bg-zinc-400 p-8'>
                   <div>
                      <img src="https://img.freepik.com/free-photo/photo-wood-texture-pattern_58702-13081.jpg?t=st=1720093767~exp=1720097367~hmac=3f7fbcba2ab6b7112744a613b6dae6903309e98962da75603901365fe363be6b&w=996" alt="" />
                   </div>

                   <div className='flex flex-col gap-[3px] py-[5px]'>
                         <p className='text-[18px] font-bold'>About Us</p>
                         <p className='text-[13px] font-normal'>Established in 2001, Surya Electronics is an electronics retail chain based in Pune. Over the course of years, we have become a one-stop shop for all home and personal electronic needs, making us a reliable brand. Presently, 10 stores in Pune and 1 Store in Satara are dedicated for Customer Service.</p>
                   </div>

                </div>

                <div className='aboutdesktop w-[100%] flex h-[auto] bg-zinc-400 p-8'>
                   <div className='w-[]'>
                      
                   </div>

                   <div className='flex flex-col gap-[3px] py-[5px]'>
                        
                   </div>

                </div>
            </div>
        </div>
    )
}

export default About