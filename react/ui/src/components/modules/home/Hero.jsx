import React from 'react'
import HeroLeft from './HeroLeft'
import HeroRight from './HeroRight'

function Hero() {
  return (
    <div className='flex p-5  '>
        <HeroLeft />
        <HeroRight />
    </div> 
  )
}

export default Hero