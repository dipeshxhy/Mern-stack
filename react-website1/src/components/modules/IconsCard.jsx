import React from 'react'
import { GoPaperAirplane } from "react-icons/go";

const IconsCard = ({title,description}) => {
  return (
    <div className='bg-gray-300 w-36 flex flex-col gap-1 text-center items-center rounded-md px-3'>
<GoPaperAirplane className='mt-3'/>
<h5 className='font-medium text-sm'>{title}</h5>
<p className='text-xs'>{description}</p>
    </div>
  )
}

export default IconsCard