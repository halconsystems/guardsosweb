import React from 'react'
import { assets } from '../assets/assets'

const Process = () => {
    return (
        <div className='my-20 w-full flex flex-col justify-center items-center'>
            {/* Top section */}
            <div className='flex flex-col md:flex-row px-5 md:px-10 lg:px-0 justify-between items-center w-full max-w-7xl'>
                
                {/* Heading */}
                <h1 className='text-6xl md:text-7xl lg:text-8xl font-semibold mb-6 md:mb-0'>
                    How it <br />Works
                </h1>

                {/* hide desc + button on sm */}
                <div className='hidden md:block px-5 md:px-0 w-full md:w-1/2'>
                    <p className='text-2xl font-medium'>
                        Manage your experience from start to finish, from integrations to registration and from interactive stage elements to post-event data, it’s all here.
                    </p>
                    <button className='mt-5 bg-red-500 px-5 py-2 rounded-lg font-medium text-white text-lg'>
                        Book Now
                    </button>
                </div>
            </div>

            {/* Steps container */}
            <div className='w-full max-w-7xl flex flex-col gap-8'>

                {/* Step 1 */}
                <div className='flex flex-col md:flex-row justify-between gap-6 border-t border-gray-400 mt-8 pt-8 px-5 md:px-0'>
                    <div className='w-full md:w-[40vw] lg:w-[25vw] flex flex-col justify-center gap-3'>
                        <p className='text-xl md:text-2xl'>Step 1</p>
                        <h1 className='text-3xl md:text-4xl font-semibold flex items-end'>
                            Create
                            <img src={assets.arrow} alt="" className='relative bottom-[-6px] md:bottom-[-10px] w-9 h-9 md:w-13 md:h-13'/>
                        </h1>
                        <p className='text-lg md:text-xl'>
                            Create your GuardsOS account and unlock a world of seamless security management.
                        </p>
                    </div>
                    {/* image scales with text card height */}
                    <div className='hidden md:w-[50vw] lg:w-[60vw] md:flex  items-stretch'>
                        <img src={assets.create_bg} alt="" className='w-full object-cover md:rounded-4xl'/>
                    </div>
                </div>

                {/* Step 2 */}
                <div className='flex flex-col md:flex-row justify-between gap-6 border-t border-gray-400 mt-8 pt-8 px-5 md:px-0'>
                    <div className='w-full md:w-[40vw] lg:w-[25vw] flex flex-col justify-center gap-3'>
                        <p className='text-xl md:text-2xl'>Step 2</p>
                        <h1 className='text-3xl md:text-4xl font-semibold flex items-end'>
                            Engage
                            <img src={assets.arrow} alt="" className='relative bottom-[-6px] md:bottom-[-10px] w-9 h-9 md:w-13 md:h-13'/>
                        </h1>
                        <p className='text-lg md:text-xl'>
                            Create your GuardsOS account and unlock a world of seamless security management.
                        </p>
                    </div>
                    <div className='hidden  md:w-[50vw] lg:w-[60vw] md:flex items-stretch'>
                        <img src={assets.engage_bg} alt="" className='w-full object-cover md:rounded-4xl'/>
                    </div>
                </div>

                {/* Step 3 */}
                <div className='flex flex-col md:flex-row justify-between gap-6 border-t border-gray-400 mt-8 pt-8 px-5 md:px-0'>
                    <div className='w-full md:w-[40vw] lg:w-[25vw] flex flex-col justify-center gap-3'>
                        <p className='text-xl md:text-2xl'>Step 3</p>
                        <h1 className='text-3xl md:text-4xl font-semibold flex items-end'>
                            Grow
                            <img src={assets.arrow} alt="" className=' md:rounded-4xl relative bottom-[-6px] md:bottom-[-10px] w-9 h-9 md:w-13 md:h-13'/>
                        </h1>
                        <p className='text-lg md:text-xl'>
                            Create your GuardsOS account and unlock a world of seamless security management.
                        </p>
                    </div>
                    <div className='hidden  md:w-[50vw] lg:w-[60vw] md:flex items-stretch'>
                        <img src={assets.grow_bg} alt="" className='w-full object-cover'/>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Process
