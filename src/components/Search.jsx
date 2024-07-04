import React from 'react'

import { Input } from 'antd';
import { ChevronDown } from 'lucide-react';
const Search = () => {

    const data = [
        {
            name: "Boat Heaphones",
            title: "Rounded surface with SOFT CUSHIONS",
            image: "https://i.pinimg.com/originals/9e/e0/ed/9ee0ed3fd1380ccd7ded429b56c1d8b3.jpg",
            price: "Rs.000/-",
        },
        {
            name: "Boat Heaphones",
            title: "Rounded surface with SOFT CUSHIONS",
            image: "https://i.pinimg.com/originals/9e/e0/ed/9ee0ed3fd1380ccd7ded429b56c1d8b3.jpg",
            price: "Rs.000/-",
        },
        {
            name: "Boat Heaphones",
            title: "Rounded surface with SOFT CUSHIONS",
            image: "https://i.pinimg.com/originals/9e/e0/ed/9ee0ed3fd1380ccd7ded429b56c1d8b3.jpg",
            price: "Rs.000/-",
        },
        {
            name: "Boat Heaphones",
            title: "Rounded surface with SOFT CUSHIONS",
            image: "https://i.pinimg.com/originals/9e/e0/ed/9ee0ed3fd1380ccd7ded429b56c1d8b3.jpg",
            price: "Rs.000/-",
        },
        {
            name: "Boat Heaphones",
            title: "Rounded surface with SOFT CUSHIONS",
            image: "https://i.pinimg.com/originals/9e/e0/ed/9ee0ed3fd1380ccd7ded429b56c1d8b3.jpg",
            price: "Rs.000/-",
        },
        {
            name: "Boat Heaphones",
            title: "Rounded surface with SOFT CUSHIONS",
            image: "https://i.pinimg.com/originals/9e/e0/ed/9ee0ed3fd1380ccd7ded429b56c1d8b3.jpg",
            price: "Rs.000/-",
        },
        {
            name: "Boat Heaphones",
            title: "Rounded surface with SOFT CUSHIONS",
            image: "https://i.pinimg.com/originals/9e/e0/ed/9ee0ed3fd1380ccd7ded429b56c1d8b3.jpg",
            price: "Rs.000/-",
        },
        
        {
            name: "Boat Heaphones",
            title: "Rounded surface with SOFT CUSHIONS",
            image: "https://i.pinimg.com/originals/9e/e0/ed/9ee0ed3fd1380ccd7ded429b56c1d8b3.jpg",
            price: "Rs.000/-",
        },
        {
            name: "Boat Heaphones",
            title: "Rounded surface with SOFT CUSHIONS",
            image: "https://i.pinimg.com/originals/9e/e0/ed/9ee0ed3fd1380ccd7ded429b56c1d8b3.jpg",
            price: "Rs.000/-",
        },
        {
            name: "Boat Heaphones",
            title: "Rounded surface with SOFT CUSHIONS",
            image: "https://i.pinimg.com/originals/9e/e0/ed/9ee0ed3fd1380ccd7ded429b56c1d8b3.jpg",
            price: "Rs.000/-",
        },
        

    ]


    return (
        <div className='  px-[10px] py-[5px] sm:px-[25px] sm:py-[5px] md:px-[35px] lg:px-[65px] xl:px-[100px] xl:justify-center flex 2xl:justify-center 2xl:gap-[100px]'>
           <div className='responsivesearch  w-[700px] md:w-[1000px] lg:w-[1200px] h-[500px]  bg-slate-100'>
                  
                  <div className='filtersres w-[100%] h-[40px]   bg-slate-400'>
                        <div className='px-[2px] flex   justify-around w-[50%] '>
                            <div className=' filterbutton flex  items-center gap-[3px] px-[6px] border'>
                                 <div><p className='text-[13px]'>Color</p> </div>
                                 <div className='w-[16px] flex items-center'> <ChevronDown /></div>
                            </div>
                            

                            <div className=' filterbutton flex  items-center gap-[3px] px-[6px]  '>
                                 <div><p className='text-[13px]'>Color</p> </div>
                                 <div className='w-[16px] flex items-center'> <ChevronDown /></div>
                            </div>
                        </div>

                        <div className=' w-[50%] px-[4px]'>
                           <Input placeholder="Search here" />
                        </div>
                  </div>

                  <div className='drop'>
                     
                  </div>

                 
           </div>

           

          


            <div className='desktopsearch w-[700px] md:w-[1000px] lg:w-[1200px] h-[500px] flex bg-slate-400'>

                <div className='w-[30%] sm:w-[20%] md:w-[20%] h-[500px] bg-slate-500 px-[8px] py-[5px] flex flex-col gap-[10px]'>
                            <div className=' filterbutton flex   justify-between gap-[3px] px-[8px]  '>
                                 <div><p className='text-[14px]'>Color</p> </div>
                                 <div className='w-[18px] flex items-center'> <ChevronDown /></div>
                            </div>

                            <div className=' filterbutton flex   justify-between gap-[3px] px-[8px]  '>
                                 <div><p className='text-[14px]'>Color</p> </div>
                                 <div className='w-[18px] flex items-center'> <ChevronDown /></div>
                            </div>
                     
                </div>

                <div className=' w-[100%] bg-slate-200 h-[500px]'>
                    <div className='px-[10px] py-[5px]'>
                        <Input placeholder="Search For Lights" variant="filled" />
                    </div>


                    <div>

                    <div className='w-[100%] h-[100%] flex flex-wrap gap-[5px] px-[10px] py-[5px] '>
                             {data.map((d) => (
                                   <div className='w-[auto] h-[150px] bg-slate-400'>

                                    </div>
                                    

                             ))}
                         </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Search