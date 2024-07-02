import React from 'react'

import { Input } from 'antd';
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
    ]


    return (
        <div className='  px-[10px] py-[5px] sm:px-[25px] sm:py-[5px] md:px-[35px] lg:px-[65px] xl:px-[100px] xl:justify-center flex 2xl:justify-center 2xl:gap-[100px] '>
            <div className='w-[700px] md:w-[1000px] lg:w-[1200px] h-[500px] flex bg-slate-400'>

                <div className='w-[40%] sm:w-[25%] md:w-[20%] h-[500px] bg-slate-500'>

                </div>

                <div className='w-[100%] bg-slate-100 h-[500px]'>
                    <div className='px-[10px] py-[5px]'>
                        <Input placeholder="Search For Lights" variant="filled" />
                    </div>


                    <div>

                       

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Search