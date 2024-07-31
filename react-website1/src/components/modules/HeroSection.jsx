import React from 'react'
import Button from './Button'
import { IoArrowBackCircle } from "react-icons/io5";
import { IoArrowForwardCircle } from "react-icons/io5";
import { IoArrowDownOutline } from "react-icons/io5";

const HeroSection = () => {
  return (
    <div className='w-full h-[91vh] p-5 '>
        <div className='absolute flex flex-col gap-6 ml-10'>
<h1 className='text-6xl w-[60%] text-white font-bold mt-20'>Explore the sights of the Azores</h1>
<p className='text-white  '>A place where nature and adventure unite</p>
<Button text="Book now" />
<div className='flex mt-[5%] text-white text-4xl gap-10 justify-between items-center  '>
    <div className='flex '>
<IoArrowBackCircle  />
< IoArrowForwardCircle />

    </div>
<div className='mr-[-20%] ' >
<h4 className='text-sm'> Scroll down</h4>
  <button className='px-5 py-2 bg-gray-100 text-black text-center rounded-full'> <IoArrowDownOutline className='text-sm' /></button>
</div>
</div>


        </div>
        <img className='w-full h-full   rounded-2xl' src="https://cdn.pixabay.com/photo/2021/10/18/19/04/mountains-6721870_1280.jpg" alt="" />
    </div>
  )
}

export default HeroSection