import React from 'react'
import { assets, featureData } from '../assets/assets'
import CountUp from '../utilities/animation_config.jsx'

const Pricing = () => {

  const CheckIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="mx-auto">
      <circle cx="12" cy="12" r="6" fill="#8B5CF6" />
    </svg>
  );

  // SVG Icon for information tooltip
  const InfoIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-400 ml-2">
      <circle cx="12" cy="12" r="10"></circle>
      <line x1="12" y1="16" x2="12" y2="12"></line>
      <line x1="12" y1="8" x2="12.01" y2="8"></line>
    </svg>
  );

  // Plan header icon component
  const PlanIcon = ({ icon, bgColor }) => (
    <div
      className={`w-16 h-16 rounded-full flex items-center justify-center ${bgColor} mb-3 shadow-lg`}
    >
      <img src={icon} alt="plan icon" className="w-12 h-12 object-contain" />
    </div>
  );

  

  const plans = [
    {
      name: 'Basic',
      icon: assets.basic_icon,
      bgColor: 'bg-gradient-to-br from-blue-400 to-cyan-500'
    },
    {
      name: 'Advanced',
      icon: assets.advance_icon,
      bgColor: 'bg-gradient-to-br from-cyan-400 to-sky-500'
    },
    {
      name: 'Enterprise',
      icon: assets.enterprise_icon,
      bgColor: 'bg-gradient-to-br from-purple-500 to-indigo-600'
    },
  ];




  return (
    <div className='min-h-screen flex flex-col justify-center items-center my-20'>

      <div className='text-center'>
        <p className='bg-blue-500 rounded-full inline px-5 py-2 text-white font-semibold'>Plans & Pricing</p>
        <h1 className='text-5xl py-4 font-semibold'>Transparent Pricing For All</h1>
        <p className='text-lg text-red-500 font-semibold'>Choose the best plan for your business. Change plans as you grow.</p>
      </div>

      <div className='flex items-center gap-15 pr-20 my-8  bg-gray-300 pl-2 py-1 rounded-full'>
        <button className=' bg-[#6941C6] px-4 py-2 rounded-full font-medium text-white text-md'> Monthly</button>
        <p className=' text-lg font-semibold'>Yearly</p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl w-full px-5">

        {/* Basic Card */}
        <div class="bg-white rounded-2xl shadow-lg p-6 flex flex-col">

          <div class="flex items-center mb-4">
            <div class="w-12  h-12 bg-blue-100 rounded-full  flex items-center justify-center">
              <img src={assets.basic_icon} alt="" />
            </div>
          </div>

          <h2 class="text-2xl font-semibold">Basic</h2>
          <div class="mt-2 text-5xl font-bold text-gray-800">
            $<CountUp
              from={0}
              to={3}
              separator=","
              direction="up"
              duration={0.2}
              className="count-up-text"
            />
            <span class="line-through text-red-500 text-lg ml-1">$6</span>
            <span class="text-sm text-gray-500">/guard/month</span>
          </div>
          <p class="mt-1 text-gray-500 text-sm">Minimum 50 guards</p>

          <ul class="mt-6 mb-8 space-y-2 text-gray-700">
            <li className='flex gap-2'><img src={assets.check_icon} alt="" /> Admin & Client Portal</li>
            <li className='flex gap-2'><img src={assets.check_icon} alt="" />  Admin & Supervisor Mobile App</li>
            <li className='flex gap-2'><img src={assets.check_icon} alt="" />  24/7 chat support</li>
            <li className='flex gap-2'><img src={assets.check_icon} alt="" />  Payroll Management</li>
            <li className='flex gap-2'><img src={assets.check_icon} alt="" /> Card/ Online Invoice Payment</li>
          </ul>

          <button class="mt-auto bg-gradient-to-r from-purple-500 to-blue-500 text-white py-2 rounded-lg hover:opacity-90 transition">
            Contact Us
          </button>
        </div>

        {/* Advance Card */}
        <div class="bg-white rounded-2xl shadow-lg p-6 flex flex-col">
          <div class="flex items-center mb-4">
            <div class="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
              <img src={assets.advance_icon} alt="" />
            </div>
          </div>
          <h2 class="text-2xl font-semibold">Advanced</h2>
          <div class="mt-2 text-5xl font-bold text-gray-800">
            $<CountUp
              from={0}
              to={5}
              separator=","
              direction="up"
              duration={1}
              className="count-up-text"
            /> <span class="line-through text-red-500 text-lg ml-1">$8</span>
            <span class="text-sm text-gray-500">/guard/month</span>
          </div>
          <p class="mt-1 text-gray-500 text-sm">Minimum 100 guards</p>

          <ul class="mt-6 mb-20 space-y-2 text-gray-700">
            <li className='flex gap-2'><img src={assets.check_icon} alt="" /> Admin & Client Portal</li>
            <li className='flex gap-2'><img src={assets.check_icon} alt="" />  Admin & Supervisor Mobile App</li>
            <li className='flex gap-2'><img src={assets.check_icon} alt="" />  Multi-Province Offices</li>
            <li className='flex gap-2'><img src={assets.check_icon} alt="" /> Enhanced 24/7 chat support</li>
            <li className='flex gap-2'><img src={assets.check_icon} alt="" /> Generate IBFT & IFT</li>
            <li className='flex gap-2'><img src={assets.check_icon} alt="" /> Guard Profile Ratings Module</li>
            <li className='flex gap-2'><img src={assets.check_icon} alt="" /> Inventory Module</li>
            <li className='flex gap-2'><img src={assets.check_icon} alt="" /> Accounts & Finance Module</li>
          </ul>

          <button class="bg-gradient-to-r from-purple-500 to-blue-500 text-white py-2 rounded-lg hover:opacity-90 transition">
            Contact Us
          </button>
        </div>

        <div class="rounded-2xl shadow-lg p-6 flex flex-col text-white bg-gradient-to-tr from-purple-500 via-purple-500  to-pink-500">
          <div class="flex items-center mb-4">
            <div class="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
              <img src={assets.enterprise_icon} alt="" />
            </div>
          </div>
          <h2 class="text-2xl font-semibold">Enterprise</h2>
          <p class="text-3xl font-bold mt-2">
            Call Us <span class="text-lg font-normal">For Details</span>
          </p>
          <p class="mt-1 text-sm opacity-80">For more complex businesses</p>

          <ul class="mt-6 mb-20 space-y-2">
            <li className='flex gap-2'><img src={assets.white_check} alt="" />  Admin & Client Portal</li>
            <li className='flex gap-2'><img src={assets.white_check} alt="" />  Admin & Supervisor Mobile App</li>
            <li className='flex gap-2'><img src={assets.white_check} alt="" />  Priority 24/7 phone support</li>
            <li className='flex gap-2'><img src={assets.white_check} alt="" />  Customized Reports</li>
            <li className='flex gap-2'><img src={assets.white_check} alt="" />  Unlimited staff accounts</li>
            <li className='flex gap-2'><img src={assets.white_check} alt="" />  Corporate Events Branding</li>
            <li className='flex gap-2'><img src={assets.white_check} alt="" />  Custom Development</li>
            <li className='flex gap-2'><img src={assets.white_check} alt="" />  Multi-Dashboards</li>
          </ul>

          <button class="mt-auto bg-white text-gray-800 py-2 rounded-lg hover:opacity-90 transition">
            Contact Us
          </button>
        </div>
      </div>

      <div className="hidden lg:block bg-white min-h-screen mt-20 font-sans antialiased text-gray-800 px-4 md:px-20 py-8">

        <h1 className="text-3xl sm:text-4xl font-bold text-left mb-8 sm:mb-12">
          Compare all plan features
        </h1>

        <div className="overflow-x-auto border border-gray-200 rounded-lg ">
          <div className="min-w-[1000px]">
            {/* Table Header */}
            <div className="grid grid-cols-4 gap-4 items-end py-6">
              <div className="col-span-1"></div> {/* Empty cell for alignment */}
              {plans.map((plan, index) => (
                <div key={plan.name} className={`flex flex-col items-center ${index < plans.length - 1 ? 'border-r border-gray-200' : ''}`}>
                  <PlanIcon icon={plan.icon} bgColor={plan.bgColor} />

                  <h2 className="text-lg font-semibold text-gray-700">{plan.name}</h2>
                </div>
              ))}
            </div>

            {/* Table Body */}
            <div className="border-t border-gray-200 mt-10">
              {featureData.map((feature, index) => {
                if (feature.type === 'heading') {
                  return (
                    <div key={index} className="grid grid-cols-4 gap-4 items-center bg-gray-50 py-4 px-4 border-t border-gray-200">
                      <h3 className="col-span-4 font-semibold text-gray-600">{feature.name}</h3>
                    </div>
                  );
                }

                return (
                  <div key={index} className="grid grid-cols-4 gap-4 items-center py-6 border-t border-gray-200">
                    {/* Feature Name Column */}
                    <div className="col-span-1 px-4">
                      <div className="flex items-center">
                        <span className="font-medium text-gray-600">{feature.name}</span>
                        {feature.link && <a href="#" className="text-purple-600 ml-1 text-sm whitespace-nowrap">{feature.link}</a>}
                        {feature.hasInfo && <InfoIcon />}
                      </div>
                    </div>

                    {Object.keys(feature.values).map(planKey => (
                      <div key={planKey} className="col-span-1 text-center px-4">
                        {typeof feature.values[planKey] === 'boolean' ? (
                          feature.values[planKey] ? (
                            <img
                              src={assets.check_icon}
                              alt="check"
                              className="mx-auto w-6 h-6"
                            />
                          ) : (
                            <img
                              src={assets.cross_icon}
                              alt="cross"
                              className="mx-auto w-7 h-7"
                            />
                          )
                        ) : (
                          <span className="text-gray-800 font-medium">
                            {feature.values[planKey]}
                          </span>
                        )}
                      </div>
                    ))}
                 
                  </div>
                );
              })}
            </div>

            {/* Table Footer with Buttons */}
            <div className="grid grid-cols-4 gap-4 items-center py-6 border-t border-gray-200">
              <div className="col-span-1"></div> {/* Empty cell */}
              {plans.map(plan => (
                <div key={plan.name} className="text-center">
                  <button className="bg-gray-100 hover:bg-gray-200 text-purple-700 font-semibold py-2 px-8 rounded-lg transition-colors border border-gray-300">
                    Book Now
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>



      </div>

    </div>
  )
}

export default Pricing