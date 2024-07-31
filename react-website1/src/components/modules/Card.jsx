import React from 'react'
import { IoArrowForwardCircle } from "react-icons/io5";
import { MdOutlineStarPurple500 } from "react-icons/md";
const Card = ({title,img,price,rating}) => {
  return (
    <div className='w-40 h-[27vh] '>
        <div className='absolute flex items-center justify-end gap-1 text-white'>
            <p className='ml-28 font-medium'>{rating}</p>
<MdOutlineStarPurple500 />
        </div>
<img className='w-full object-cover rounded' src={img}alt="" />
<div className='bg-gray-300 p-2 text-center rounded-md  '>
    <h6 className='font-medium '>{title}</h6>
        <div className="icons flex items-center gap-5 justify-center  ">
            <p className='text-sm'>{price}</p>
< IoArrowForwardCircle/>
        </div>
    
</div>
    </div>
  )
}

export default Card