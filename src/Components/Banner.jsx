import React from 'react'
import { assets } from '../assets/assets'

const Banner = () => {
  return (
    <div className='bg-gray-200 flex items-center justify-center mt-40'>
      <div className='w-full flex flex-col md:flex-row items-center justify-center h-[600px] md:h-[600px] lg:h-auto'>

        {/* Left Image */}
        <div className='hidden md:hidden lg:block w-[40%]'>
          <img src={assets.banner_bg} alt="" className='w-full h-full object-cover'/>
        </div>

        {/* Right Content */}
        <div className='w-full lg:w-[60%] flex flex-col justify-center items-center gap-4'>
          <h1 className='text-6xl md:text-8xl font-semibold w-full px-5 '>
            Integrate
          </h1>
          <h1 className='flex items-end text-6xl md:text-8xl font-semibold px-5 w-full'>
            <img className=' lg:inline-block w-28 sm:w-40' src={assets.banner} alt="" /> Your Data
          </h1>
          <p className='lg:w-full text-lg sm:text-xl md:text-2xl lg:text-2xl mt-4  px-5 md:px-10'>
            Integration with your existing platforms to sync the data seamlessly without disturbing business operations
          </p>
        </div>
      </div>
    </div>
  )
}

export default Banner
