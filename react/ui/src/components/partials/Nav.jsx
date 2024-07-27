import React from 'react'
import Button from './Button'

function Nav() {
  return (
    <div className='w-full  p-2 px-10  flex items-center justify-between '>
        <h1 className='uppercase text-xl font-bold text-[#E7B644]'>eatly</h1>
        <div className="nav-lists flex items-center gap-10">
            <h3 className='text-md font-medium text-gray-400  '>Programs</h3>
            <h3 className='text-md font-medium text-gray-400  '>Services</h3>
            <h3 className='text-md font-medium text-gray-400  '>News</h3>
            <h3 className='text-md font-medium text-gray-400  '>About Us</h3>
        </div>
        <Button text="Let's talk " />
    </div>
  )
}

export default Nav