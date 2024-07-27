import React from 'react'
import Button from '../../partials/Button'
import { FaCirclePlay } from "react-icons/fa6";

function HeroLeft() {
  return (
    <div className='w-1/2 px-7 flex flex-col gap-8'>
        <h1 className='text-8xl font-medium text-gray-300 leading-none  '>Changing your <span className='text-[#E7B644]'>eating</span> habits</h1>
        <p className='text-gray-400 text-lg font-normal leading-tight'>Always take care of your health starting from your food menu that you consume everyday</p>
        <div className='flex items-center gap-32 '>
        <Button  text="Explore Menu"/>
        <div className='flex items-center gap-2'>
        <FaCirclePlay className='text-5xl text-[#E7B644]' /> 
        <h3 className='text-lg font-bold text-gray-400'>Watch Video</h3>

        </div>
        </div>
    </div>
  ) 
}

export default HeroLeft