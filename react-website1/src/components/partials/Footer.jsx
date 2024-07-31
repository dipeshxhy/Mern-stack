import React from 'react'
import { GrInstagram } from "react-icons/gr";
import { BsFacebook } from "react-icons/bs";
import { FaYoutube } from "react-icons/fa";
function Footer() {
  return ( 
    <div className='  flex justify-between items-center p-8 mt-[19%] bg-blue-300'>
 <h3 className='font-bold'> ©2024 All rights reserved</h3>
 <div className="logos flex items-center gap-7 text-xl ">
< GrInstagram/>
< BsFacebook />
< FaYoutube/>
 </div>
    </div>
  )
}

export default Footer