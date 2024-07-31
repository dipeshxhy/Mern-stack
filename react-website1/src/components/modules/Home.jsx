import React from 'react'
import Nav from '../partials/Nav'
import HeroSection from './HeroSection'
import IconsCard from './IconsCard'
import Card from './Card'
import Button from './Button'
import Footer from '../partials/Footer'

const Home = () => {
  return (
    <div className='overflow-x-hidden'>
        <Nav />
        <HeroSection />
      <div className='text-center'>
        <h1 className='text-3xl font-medium '>Top Values for you</h1>
        <p className='text-xs text-gray-400 mt-1'> Try variety of benefits when using our services</p>
      </div>
      <div className='flex gap-20 justify-center mt-7'>
      <IconsCard title="Airport Pickup" description="we provide export from the airport" />
      <IconsCard  title="Easy Booking" description="Quick ans easy booking of tours for upcoming dates"/>
      <IconsCard  title="Best Tour Guide" description="Our best tour guide is ready to guide your trip" />
      <IconsCard title="Lots of promos" description="Various promotions and drawing of tours" />

      </div>
      <h2 className='font-medium ml-[10%] text-2xl mt-10 '>Choose your tour</h2>
      <div className='flex gap-28 ml-32 mt-8'>
      <Card title="Alone with nature " img="https://cdn.pixabay.com/photo/2019/04/26/15/33/child-4157865_1280.jpg" price="$200/person" rating="5.0"/>
      <Card title="Jeep ride" img="https://cdn.pixabay.com/photo/2017/06/22/18/52/wrangler-2432059_1280.jpg" price="$150/person" rating="4.9" />
      <Card title="Hiking Tour" img="https://cdn.pixabay.com/photo/2016/11/22/19/25/man-1850181_1280.jpg" price=" $100/person" rating="5.0 " />
      <Card title="Corners of island" img="https://cdn.pixabay.com/photo/2019/06/12/21/09/ocean-4270249_1280.jpg" price="$250/person" rating="4.8" />

      </div>
      <div className='m-auto text-center mt-20'>

      <button style={{border:"1px solid"}} className='px-5 py-2 m-auto bg-gray-300 text-black text-center rounded-full'> see all</button>
      </div>

<div className='w-full h-[90vh] p-5'>
    <div className='absolute flex flex-col gap-6 ml-10 text-white mt-[15%]'>
<h1 className='text-6xl font-medium '>Enjoy your travel</h1>
<p className='text-sm text-gray-300'>Discover the most unique and vibrant experience the Azoros have to after</p>
    </div>
    <div style={{border:"1px solid white"}} className='w-[30%] h-52 absolute right-10 mt-[10%] rounded-md p-5'>
<p className='text-white text-sm'>Beautiful island <br />coconut tree sea around</p>
    </div>
<img className='w-full h-full object-cover object-center rounded-md' src="https://cdn.pixabay.com/photo/2020/11/28/02/17/island-5783440_1280.jpg" alt="" />
</div>
<div className='flex justify-between items-center  '>
<h2 className='w-[35%] text-2xl ml-10'>Blog about travelling</h2>
<div  className='ml-[50%]'>
<p className='text-sm text-gray-400'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero voluptatem quasi amet nam optio voluptatibus laboriosam ex cupiditate saepe repellendus.</p>
<button style={{border:"1px solid"}} className='px-5 py-2 m-auto bg-gray-300 text-black text-center rounded-full mt-2'> Read all articles</button>

</div>

</div>

<div className='w-[40%] ml-6   '>
   
    <img className='rounded-md' src="https://cdn.pixabay.com/photo/2019/08/06/12/15/beach-4388225_1280.jpg" alt="" />
</div>
  
    <div className='w-[60%] flex absolute right-0 mt-[-20%] gap-10'>
<img className='w-[38%] object-cover rounded-md' src="https://cdn.pixabay.com/photo/2017/03/27/13/33/beach-2178747_1280.jpg" alt="" />
<img className='w-[50%] h-[70%] object-cover rounded-md'  src="https://cdn.pixabay.com/photo/2015/01/13/13/21/paradise-598201_1280.jpg" alt="" />
    </div>
<div >
<Footer />

</div>
    </div>
  )
}

export default Home