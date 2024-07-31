import React from 'react'

const Button = ({text}) => {
  return (
    <div>
<button className='bg-white text-black border-none px-3 py-1 rounded-lg'>{text}</button>
    </div>
  )
}

export default Button