import React from 'react'

const Features = () => {
  return (
    <div className="min-h-screen bg-[#0f0f0f] text-center flex flex-col items-center px-6 md:px-20">
      {/* main heading */}
      <h1 className="py-16 md:py-28 text-white font-semibold leading-tight">
        {/* First row*/}
        <div className="flex flex-col md:flex-row items-center md:items-baseline gap-4 md:gap-7">
          <span className="text-lg md:text-2xl w-auto md:w-20">One platform</span>
          <span className="text-5xl md:text-8xl">Endless</span>
        </div>

        {/* Second row */}
        <span className="block text-4xl md:text-7xl lg:text-8xl md:pl-40 mt-4 md:mt-0">
          Opportunities
        </span>
      </h1>

      {/* Features List */}
      <div className="w-full py-10 md:py-20 text-lg md:text-2xl text-white flex flex-col md:flex-row justify-center md:justify-around items-center gap-12 md:gap-0">
        {/* Left Column */}
        <div className="flex flex-col gap-6 md:gap-8 text-center md:text-left">
          <p>Cloud Platform</p>
          <p>Client Portal & Mobile App</p>
          <p>Supervisor App</p>
          <p>Automated Pay Roll</p>
          <p>Accounts & Finance</p>
        </div>

        {/* Right Column */}
        <div className="flex flex-col gap-6 md:gap-8 text-center md:text-left">
          <p>Inventory Management</p>
          <p>Guards Profile</p>
          <p>Multi Offices</p>
          <p>Multi-Roles</p>
          <p>24/7/365 Tech Support</p>
        </div>
      </div>
    </div>
  )
}

export default Features
