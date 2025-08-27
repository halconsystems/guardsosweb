import React from 'react'
import { assets } from '../assets/assets'
import CountUp from '../utilities/animation_config.jsx'

const Testimonial = () => {
    return (
        <div className='min-h-screen my-10 flex justify-center items-center px-5 sm:px-10 md:px-20 mt-20'>
            <div className='flex flex-col md:flex-row gap-10 w-full'>

                {/* Left Text Section */}
                <div className='w-full lg:w-1/2 flex flex-col'>
                    <h1 className='font-semibold text-xl sm:text-2xl mb-5'>Testimonials</h1>
                    <h1 className='font-semibold text-3xl sm:text-5xl md:text-6xl mb-10 md:mb-16'>
                        Client Stories & Experiences
                    </h1>

                    <p className='border-t border-gray-300 pt-5 text-sm sm:text-base md:text-lg'>
                        “GuardsOS has completely transformed the way we work. Its powerful automation reduced days of effort into just minutes. The platform gives us unmatched transparency, real-time access to data, and full control over operations. GuardsOS isn’t just a tool, it’s the backbone of efficiency and growth.”
                    </p>

                    <div className='flex  sm:flex-row justify-between items-start sm:items-end border-b border-gray-300 py-5 mt-5'>
                        <div className='flex gap-2 items-start sm:items-end'>
                            <img src={assets.profile} alt="" className='w-14 sm:w-16' />
                            <div className='flex flex-col gap-1 justify-end'>
                                <h1 className='text-base sm:text-lg md:text-xl'>Mr. Karim Tariq</h1>
                                <p className='text-sm sm:text-base md:text-lg'>Business Owner</p>
                            </div>
                        </div>

                        <p className='mt-4 sm:mt-0 cursor-pointer text-red-500'>next</p>
                    </div>

                    <button className='px-5 py-2.5 bg-red-500 mt-8 sm:mt-12 text-white font-semibold rounded-lg w-60 '>
                        See All Testimonials
                    </button>
                </div>

                {/* Right Image + Stats */}
                <div className='w-full md:w-1/2 lg:flex flex-col items-center hidden '>
                    <img src={assets.Testimonial_img} className='w-full md:h-[80%] object-cover mb-5 md:mb-8' alt="" />

                    <div className='flex flex-col sm:flex-row justify-around w-full gap-4 md:gap-0'>
                        <div className='flex items-center gap-2'>
                            <h1 className='text-red-500 font-bold text-3xl sm:text-4xl md:text-5xl'>
                                <CountUp
                                    from={0}
                                    to={4.9}
                                    separator=","
                                    direction="up"
                                    duration={1}
                                    className="count-up-text"
                                />+
                            </h1>
                            <p className='text-sm sm:text-lg md:text-lg'>Star Rating</p>
                        </div>

                        <div className='flex items-center gap-2'>
                            <h1 className='text-red-500 font-bold text-3xl sm:text-4xl md:text-5xl'>
                                <CountUp
                                    from={0}
                                    to={20}
                                    separator=","
                                    direction="up"
                                    duration={1}
                                    className="count-up-text"
                                />K+
                            </h1>
                            <p className='text-sm sm:text-lg md:text-lg'>Satisfied Customers</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Testimonial
