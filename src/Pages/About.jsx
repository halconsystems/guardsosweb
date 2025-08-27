import React from 'react'
import { assets } from '../assets/assets'
import CountUp from '../utilities/animation_config.jsx'

const About = () => {
  return (
    <>

      {/* Top About Section */}
      <div className='bg-[#0f0f0f] px-6 md:px-20 py-16 flex flex-col gap-8'>
        <div>
          <h1 className='text-white text-lg'>About Us</h1>
          <h1 className='font-semibold text-white text-4xl md:text-6xl'>
            GuardsOS<span className='text-red-500'>.</span>
          </h1>
          <p className='text-white mt-5 text-base md:text-2xl'>
            Goes beyond workforce management by giving Security Firm Higher Management & Owners full visibility over operational performance, cash flow, payroll, and data management. With real-time monitoring and transparent reporting, it ensures value for money, develops trust between security firm & their client to drive higher profitability. By combining efficiency with accountability, GuardsOS helps security companies scale with confidence in a competitive market.
          </p>
        </div>

        {/* Flex layout changes to column on small screens */}
        <div className='flex flex-col md:flex-row justify-between items-start md:items-end gap-10'>
          <div className='text-white text-lg md:text-xl'>
            <img src={assets.image_box} alt="" className='mb-5 w-40 md:w-60' />
            <p>Security Guard Management Platform</p>
            <p>Boosts Business & Operations Growth</p>
          </div>

          <div className='text-white text-lg md:text-xl'>
            <p>Specially built For Physical</p>
            <p>Secuirty Agencies</p>
            <button className='mt-5 px-5 py-2 bg-red-500 text-white font-semibold rounded-lg'>
              See Get Started
            </button>
          </div>
        </div>
      </div>

      {/* Second Section */}
      <div className='py-10 px-6 md:px-20 w-full flex flex-col md:flex-row gap-10 md:gap-0 justify-between'>
        <div className='md:w-[40%]'>
          <p className='text-lg md:text-xl pb-5'>About Us</p>
          <h1 className='text-3xl md:text-5xl font-semibold'>
            Discover The Business Legacy
          </h1>
          <p className='py-5 text-base md:text-xl text-gray-800'>
            Grow beyond operations Build Efficiency, Client Trust, and Long-Term Profitability.
          </p>
          <button className='mt-5 px-5 py-3 bg-red-500 text-white font-semibold rounded-lg'>
            Learn More
          </button>
        </div>

        <div className='md:w-[50%]'>
          <img src={assets.about_img} alt="" className='relative w-full' />
        </div>
      </div>

      {/* Stats & Features */}
      <div className='px-6 md:px-20 my-20 flex flex-col md:flex-row gap-10 min-h-[60vh]'>
        <div className='md:w-[60%] flex flex-col md:flex-row items-start justify-between gap-10'>
          <div className='flex flex-col gap-10'>
            <div>
              <p className='bg-blue-500 rounded-full text-center w-12 md:w-14 text-white font-semibold'>01</p>
              <p className='text-2xl md:text-4xl font-semibold'>
                <CountUp from={0} to={100} separator="," direction="up" duration={1} />%
              </p>
              <p className='text-base md:text-lg'>Satisfied Client</p>
            </div>

            <div>
              <p className='bg-red-500 rounded-full text-center w-12 md:w-14 text-white font-semibold'>02</p>
              <p className='text-2xl md:text-4xl font-semibold'>
                <CountUp from={0} to={200} separator="," direction="up" duration={1} />+
              </p>
              <p>Total Accounts</p>
            </div>
          </div>

          <div>
            <img src={assets.app} alt="" className='w-full md:w-auto' />
          </div>
        </div>

        <div className='md:w-[30%] flex flex-col gap-4 justify-end items-center md:items-start'>
          <h1 className='text-2xl md:text-4xl font-semibold'>Customer-Centric Approach</h1>
          <div className='flex flex-col items-start'>
            <p className='flex gap-4 text-base md:text-xl'><img src={assets.tick_icon} alt="" />Real-Time Transparency</p>
            <p className='flex gap-4 text-base md:text-xl'><img src={assets.tick_icon} alt="" />Streamlined Communication</p>
            <p className='flex gap-4 text-base md:text-xl'><img src={assets.tick_icon} alt="" />Data-Driven Decisions</p>
            <p className='flex gap-4 text-base md:text-xl'><img src={assets.tick_icon} alt="" />Efficient Service Delivery</p>
            <p className='flex gap-4 text-base md:text-xl'><img src={assets.tick_icon} alt="" />Customizable Reporting</p>
          </div>
        </div>
      </div>

      {/* Why Choose Us */}
      <div className='w-full px-6 md:px-20 min-h-screen'>
        <h1 className='text-4xl md:text-6xl font-semibold pb-10 md:pb-20'>
          Why Choose Us <span className='text-red-500'>!</span>
        </h1>

        {/* Grid adjusts to 1 col on mobile, 2 on tablet, 3 on desktop */}
        <div className='mb-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 gap-y-20 border-t border-gray-300 pt-10'>
          <div className='flex gap-5 items-start'>
            <img src={assets.expert_icon} alt="" />
            <div>
              <h1 className='text-xl md:text-2xl font-semibold pb-3'>Expertise in Development</h1>
              <p>Building scalable, reliable, and future-ready applications.</p>
            </div>
          </div>

          <div className='flex gap-5 items-start'>
            <img src={assets.trained_icon} alt="" />
            <div>
              <h1 className='text-xl md:text-2xl font-semibold pb-3'>Highly Trained Team</h1>
              <p>Powered by a highly trained team, driven by innovation.</p>
            </div>
          </div>

          <div className='flex gap-5 items-start'>
            <img src={assets.record_icon} alt="" />
            <div>
              <h1 className='text-xl md:text-2xl font-semibold pb-3'>Proven Track Record</h1>
              <p>Trusted solutions, built on proven track record.</p>
            </div>
          </div>
          
          <div className='flex gap-5 items-start'>
            <img src={assets.security_icon} alt="" />
            <div>
              <h1 className='text-xl md:text-2xl font-semibold pb-3'>Security Guaranteed</h1>
              <p>Protecting your digital world, one click at a time.</p>
            </div>
          </div>

          <div className='flex gap-5 items-start'>
            <img src={assets.technology_icon} alt="" />
            <div>
              <h1 className='text-xl md:text-2xl font-semibold pb-3'>Modern Technology</h1>
              <p>Future-ready solution powered by modern technology.</p>
            </div>
          </div>

          <div className='flex gap-5 items-start'>
            <img src={assets.support_icon} alt="" />
            <div>
              <h1 className='text-xl md:text-2xl font-semibold pb-3'>24/7/365 Support Team</h1>
              <p>Always there for you, 24/7/365 support you can count on.</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default About
