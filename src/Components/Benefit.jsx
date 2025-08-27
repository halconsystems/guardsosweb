import React from 'react'
import { assets } from '../assets/assets'
import CountUp from '../utilities/animation_config.jsx'

const Benefit = () => {
    return (
        <div className='w-full bg-gray-100 
                        lg:h-screen lg:flex lg:justify-center lg:items-center'>

            {/* Wrapper */}
            <div className='flex flex-col lg:flex-row justify-around items-center lg:items-center  w-full px-6 py-10 lg:py-0'>

                {/* Left side - Main Heading */}
                <div className='flex flex-col justify-center text-center lg:text-left'>
                    <h1 className='text-4xl md:text-5xl lg:text-8xl font-bold leading-none'>
                        Drive
                    </h1>
                    <h1 className='flex justify-center lg:justify-start items-baseline text-4xl md:text-5xl lg:text-8xl font-bold leading-none mt-1'>
                        <img className='w-8 md:w-12 lg:w-30 mr-2' src={assets.chart_icon} alt="" />
                        Revenue
                    </h1>
                    <p className='text-base md:text-xl lg:text-3xl font-semibold text-red-500 mt-3'>
                        Scale Your Security Business!
                    </p>
                </div>


                {/* Right side - Cards */}
                <div className='flex flex-col md:flex-row lg:flex-col 
                                gap-8 md:gap-6 mt-10 lg:mt-0 
                                items-center lg:items-start text-center lg:text-left'>

                    {/* Card 1 */}
                    <div className='w-64 md:w-56 lg:w-auto'>
                        <h1 className='text-red-500 font-bold text-4xl lg:text-5xl'>
                            + $<CountUp
                                from={0}
                                to={87}
                                separator=","
                                direction="up"
                                duration={1}
                                className="count-up-text"
                            />%
                        </h1>
                        <p className='text-sm md:text-base lg:text-xl font-semibold'>
                            increased attendance & payroll transparency
                        </p>
                        <p className='text-xs md:text-sm lg:text-lg'>
                            system automation
                        </p>
                    </div>

                    {/* Card 2 */}
                    <div className='w-64 md:w-56 lg:w-auto'>
                        <h1 className='text-red-500 font-bold text-4xl lg:text-5xl'>
                            $<CountUp
                                from={0}
                                to={1.2}
                                separator=","
                                direction="up"
                                duration={1}
                                className="count-up-text"
                            />M
                        </h1>
                        <p className='text-sm md:text-base lg:text-xl font-semibold'>
                            saved by offering SaaS platform
                        </p>
                        <p className='text-xs md:text-sm lg:text-lg'>
                            Industry 4.O revolution
                        </p>
                    </div>

                    {/* Card 3 */}
                    <div className='w-64 md:w-56 lg:w-auto'>
                        <h1 className='text-red-500 font-bold text-4xl lg:text-5xl'>
                            +<CountUp
                                from={0}
                                to={80}
                                separator=","
                                direction="up"
                                duration={1}
                                className="count-up-text"
                            />%
                        </h1>
                        <p className='text-sm md:text-base lg:text-xl font-semibold'>
                            client satisfaction by data availability & access
                        </p>
                        <p className='text-xs md:text-sm lg:text-lg'>
                            by client portal & mobile app
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Benefit
