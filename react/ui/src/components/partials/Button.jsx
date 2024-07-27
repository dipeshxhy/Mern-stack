import React from 'react'

function Button(props) {
  return (
    <div>
        <button className='px-4 py-2 bg-[#E7B644] text-white font-medium rounded-xl border-none'>{props.text}</button>
    </div>
  )
}

export default Button