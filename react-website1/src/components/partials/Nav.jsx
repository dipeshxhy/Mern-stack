import React from 'react'
import { CgMenuRightAlt } from "react-icons/cg";
import { GiPolarStar } from "react-icons/gi";

const Nav = () => {
  return (
    <div className='flex items-center justify-between ml-5 py-2 '>
        <h1 className='text-xl font-bold flex '>island <GiPolarStar className='text-sm' /></h1>
        <div className="nav-item flex items-center gap-5">
            <h3 className='font-medium text-md cursor-pointer'>Our tours</h3>
            <h3 className='font-medium text-md cursor-pointer'>About us</h3>
            <h3 className='font-medium text-md cursor-pointer'>Booking</h3>
            <h3 className='font-medium text-md cursor-pointer   '>FAQ</h3>

        </div>
<CgMenuRightAlt className='text-2xl font-bold mr-4'/>
    </div>
  )
}

export default Nav