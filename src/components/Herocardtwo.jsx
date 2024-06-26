import React from 'react'

const Herocardtwo = () => {

   const data =[
    {
        name:"Boat",
        title:"this the best product i have ever seen",
        image:"headphone.1.jpg",
        price:'Rs.999/-',
    },
    {
        name:"Boat",
        title:"this the best product i have ever seen",
        image:"headphone.1.jpg",
        price:'Rs.999/-',
    },
    {
        name:"Boat",
        title:"this the best product i have ever seen",
        image:"headphone.1.jpg",
        price:'Rs.999/-',
    },
    {
        name:"Boat",
        title:"this the best product i have ever seen",
        image:"headphone.1.jpg",
        price:'Rs.999/-',
    },
    {
        name:"Boat",
        title:"this the best product i have ever seen",
        image:"headphone.1.jpg",
        price:'Rs.999/-',
    },
   ]

    
  return (
    <div>
        <div  className='px-[10px] py-[5px] sm:px-[25px] sm:py-[5px] md:px-[35px] lg:px-[65px] xl:px-[100px] 2xl:justify-center 2xl:gap-[100px] flex gap-[10px] justify-center '>
             <div className='outdoor-back flex gap-[20px] py-[10px]'>
                     {data.map((d)=> (
                            <div className='card-container h-[280px] w-[160px] '>
                                 <div className='card-imageback h-[150px] w-[150px] flex'>
                                      <div className='card-image h-[140px] w-[140px]  '>
                                          <img className='lights-image object-cover h-[100%] w-[100%]' src={d.image} alt="" />
                                      </div>
                                 </div>
       
                                 <div className='card-information flex flex-col gap-[3px] mb-[3px]'>
                                        <p className=' text-[15px] ml-[9px] mt-[3px]'>{d.name}</p>
                                        <p className=' text-[8px] ml-[9px] font-light'>{d.title}</p>
                                        
                                        <div className='card-color'>
                                                <div><p className=' text-[12px] ml-[9px] font-regular'>Color</p></div>
                                        </div>
                                        <p className=' text-[14px] ml-[9px] pb-[3px] font-bold'>{d.price}</p>
                                 </div>
       
                                 <div className='addbutton  flex justify-center py-[6px]'>
                                     <button><p className='text-[10px] font-medium'>Add To Cart</p></button>
                                 </div>
       
       
                           </div>
  
                     ))}
                    
             </div>

    
        </div>
    </div>
  )
}

export default Herocardtwo