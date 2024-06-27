import React from 'react'

const Herolast = () => {
  return (
    <div>
           <div className='footerback flex gap-[5px] justify-between  px-[10px] py-[5px] sm:px-[25px] sm:py-[5px] md:px-[35px] lg:px-[65px] xl:px-[100px] 2xl:justify-center 2xl:gap-[100px] '>
                  <div className='flex flex-col gap-[10px] py-[15px] lg:py-[20px]'>
                         <div>
                             <img className='w-[80px] sm:w-[110px] md:w-[130px] lg:w-[160px]' src="logo.png" alt="" />
                         </div>

                         <div className='flex flex-col gap-[5px] lg:py-[12px]'>
                               <div><p className='text-[9px] sm:text-[12px]  md:text-[14px] lg:text-[16px] text-white'>Find Us On</p></div>
                               <div className='flex gap-[3px]'>
                                      <div>
                                            <img className='w-[22px] sm:w-[26px] md:w-[29px] lg:w-[32px]' src="instalogo.png" alt="" />
                                      </div>
                                      <div>
                                         <img className='w-[22px] sm:w-[26px] md:w-[29px] lg:w-[32px]' src="whatsapplogo.png" alt="" />
                                      </div>
                                      <div>
                                         <img className='w-[22px] sm:w-[26px] md:w-[29px] lg:w-[32px]' src="facebooklogo.png" alt="" />
                                      </div> 
                               </div>
                         </div>

                         <div className='flex flex-col gap-[3px] sm:gap-[5px] lg:gap-[10px] lg:py-[5px]'>
                               <div><p className='text-[10px] sm:text-[12px] md:text-[14px] lg:text-[16px]  text-white'>For Online Order</p></div>
                               <div className='flex flex-col gap-[4px] sm:gap-[6px] lg:gap-[12px]'>
                                     <div className='flex gap-[4px] '>
                                           <div><img className='w-[12px] sm:w-[15px] md:w-[17px] lg:w-[20px]' src="phone.png" alt="" /></div>
                                           <div>
                                            <p className='text-[8px] sm:text-[9px] md:text-[11px] lg:text-[13px] text-white'>+91966455888</p>
                                           </div>
                                     </div>

                                     
                               </div>
                               
                         </div>
                  </div>

                   

                 

                  {/* 2div */}


                  <div className='px-[5px] py-[15px]'>
                         <div className='mt-[5px] '>
                            <p className='text-[10px] sm:text-[13px] md:text-[15px] lg:text-[17px] text-white'>Usefull Links</p>
                         </div>

                         <div className='mt-[8px]'>
                             <ul className='flex flex-col gap-[3px] '>
                                 <li className='fade text-[9px] sm:text-[11px]  md:text-[13px] lg:text-[15px] text-white'><a href="http://">Term and Conditions</a></li>
                                 <li className='fade text-[9px] sm:text-[11px]  md:text-[13px] lg:text-[15px] text-white'><a href="http://">Privacy Policy</a></li>
                                 <li className='fade text-[9px] sm:text-[11px]  md:text-[13px]  lg:text-[15px] text-white'><a href="http://">Cancellation Policy</a></li>
                                 <li className='fade text-[9px] sm:text-[11px]  md:text-[13px] lg:text-[15px] text-white'><a href="http://">Shipping Policy</a></li>
                                 <li className='fade text-[9px] sm:text-[11px]  md:text-[13px] lg:text-[15px] text-white'><a href="http://">About Us</a></li>
                                 <li className='fade text-[9px] sm:text-[11px]  md:text-[13px] lg:text-[15px] text-white'><a href="http://">Contact Us</a></li>
                             </ul>
                         </div>
                       
                  </div>

                  {/* 3div */}

                  <div className='flex flex-col px-[5px]  py-[15px] gap-[5px]'>
                         <div className='mt-[5px] '>
                            <p className='text-[10px] sm:text-[13px] md:text-[15px] lg:text-[17px] text-white'>Easy And Secure Payments </p>
                         </div>


                         <div className='flex  items-center'>
                                 <div className='flex justify-start'>
                                     <img className='w-[32px] ml-[-5px] sm:w-[45px] md:w-[55px] lg:w-[60px]' src="protection.png" alt="" />
                                 </div>

                                 <div>
                                     <p className='text-[8px] sm:text-[13px] md:text-[15px] lg:text-[17px] text-white tracking-wide'>100% Placement Protection,Easy  <br />replacement Policy</p>
                                 </div>

                                
                         </div>

                         <div className='flex' >
                              <div><img className='w-[30px] md:w-[40px]' src="googlepay.png" alt="" /></div>
                              <div><img className='w-[30px] md:w-[40px]' src="googlepay.png" alt="" /></div>
                              <div><img className='w-[30px] md:w-[40px]' src="googlepay.png" alt="" /></div>
                              <div><img className='w-[30px] md:w-[40px] ' src="googlepay.png" alt="" /></div>
                              <div><img className='w-[30px] md:w-[40px]' src="googlepay.png" alt="" /></div>
                         </div>

                         
                  </div>
           </div>

           <div className='flex  items-center gap-[3px] exclusive px-[10px] py-[5px] sm:px-[25px] sm:py-[5px] md:px-[35px] lg:px-[65px] xl:px-[100px] 2xl:justify-center 2xl:gap-[100px]'>
                 <div>
                     <img className='w-[10px]' src="copyright.png" alt="" />
                 </div>
                 <div>
                    <p className='tracking-wide text-white text-[9px]'>2024 Triumph Lights ALL Right Reserved.</p>
                 </div>
           </div>

    </div>
  )
}

export default Herolast