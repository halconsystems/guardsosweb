import React from 'react'
import { assets } from '../assets/assets'
const Contact = () => {
  return (
    <>
      <div className=' py-20 bg-[#0f0f0f] flex flex-col items-center text-white text-4xl'>
        <h1 className='font-bold'>No hidden fees <span className='text-red-500'>.</span> No development costs <span className='text-red-500'>.</span></h1>
        <h1>No more barriers to building your Business</h1>
      </div>

      <div className='flex min-h-screen gap-5 bg-[#0f0f0f] px-10 py-20'>
        <div className='w-[25%]  hidden lg:flex flex-col gap-15'>
          <div className='flex flex-col gap-3 items-start text-white'>
            <img src={assets.secured_icon} alt="" />
            <div>
              <h1 className='text-2xl font-semibold pb-3'>Expertise in Development</h1>
              <p className='text-gray-300'>Building scalable, reliable, and future-ready applications.</p>
            </div>
          </div>

          <div className='flex flex-col gap-3 items-start text-white'>
            <img src={assets.trophy_icon} alt="" />
            <div>
              <h1 className='text-2xl font-semibold pb-3'>The only premium cloud solution.</h1>
              <p className='text-gray-300'>Pakistan’s First and Only Premium Solution</p>
            </div>
          </div>

          <div className='flex flex-col gap-3 items-start text-white'>
            <img src={assets.standard_icon} alt="" />
            <div>
              <h1 className='text-2xl font-semibold pb-3'>Build your Standards
                & Grow</h1>
              <p className='text-gray-300'>We believe in forming positive habits as per international standards.</p>
            </div>
          </div>


          <div className='flex flex-col gap-3 items-start text-white'>
            <img src={assets.globe_icon} alt="" />
            <div>
              <h1 className='text-2xl font-semibold pb-3'>Business like a global scale.</h1>
              <p className='text-gray-300'>Start building credit and trust with your clients.</p>
            </div>
          </div>
        </div>

        <div className='lg:w-[75%] w-full '>

          <div className='text-center text-4xl text-white  '>
            <h1 className='text-5xl font-semibold mb-5 '>Have A Question ?</h1>
            <h1>We will get back to you asap !</h1>
          </div>

          <form className='mt-20'>
            <div className=' flex flex-col md:grid md:grid-cols-2 gap-x-30 gap-y-15'>
              <input type="text" placeholder='First Name' className='focus:outline-none text-white bg-transparent border-b border-gray-300 placeholder-gray-400 py-3 placeholder:text-lg' />
              <input type="text" placeholder='Last Name' className='focus:outline-none text-white bg-transparent border-b border-gray-300 placeholder-gray-400 py-3 placeholder:text-lg' />

              <input type="text" placeholder='Company Name' className='focus:outline-none text-white bg-transparent border-b border-gray-300 placeholder-gray-400 py-3 placeholder:text-lg' />
              <input type="text" placeholder='City/State' className='focus:outline-none text-white bg-transparent border-b border-gray-300 placeholder-gray-400 py-3 placeholder:text-lg' />

              <input type="text" placeholder='Email Address' className=' focus:outline-none text-white bg-transparent border-b border-gray-300 placeholder-gray-400 py-3 placeholder:text-lg' />
              <input type="text" placeholder='Address' className=' focus:outline-none text-white bg-transparent border-b border-gray-300 placeholder-gray-400 py-3 placeholder:text-lg' />
              <textarea placeholder='Message' className='overflow-hidden focus:outline-none col-span-2 text-white bg-transparent border-b border-gray-300 placeholder-gray-400 py-10 placeholder:text-lg'>

              </textarea>

              <button className='col-start-2 mt-5 bg-white px-5 py-3 rounded-lg font-medium text-xl w-50 justify-self-end'>Submit</button>
            </div>


          </form>

        </div>
      </div>
    </>
  )
}

export default Contact