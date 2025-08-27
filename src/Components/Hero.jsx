import React from 'react'
import { assets } from '../assets/assets'


const Hero = () => {
    return (
        <div className="h-screen flex flex-col items-center justify-center gap-10 my-20 px-5">

            {/* Heading + Button */}
            <div className="w-full flex flex-col gap-5">
                <div className="flex flex-col lg:flex-row lg:justify-around items-center lg:items-start gap-6">
                    
                    {/* Text */}
                    <div className="flex flex-col gap-1 text-center lg:text-left">
                        <h1 className="text-4xl px-3 md:text-4xl lg:text-5xl font-semibold text-left">
                            1st Cloud Based <br /> Guards Management System
                        </h1>
                        <p className="text-base md:text-lg lg:text-xl text-red-500 font-semibold">
                            To Manage & Grow Your Physical Security Agency
                        </p>
                    </div>

                    {/* Button (only on lg) */}
                    <div className="hidden lg:flex items-center">
                        <button className="px-5 py-3 bg-red-500 text-white font-semibold">
                            See All Features
                        </button>
                    </div>
                </div>
            </div>

            {/* Cards Wrapper */}
            <div className="
                flex gap-6 w-full max-w-[1200px] px-2
                overflow-x-auto lg:overflow-visible
                hide-scrollbar
                justify-start lg:justify-center
            ">
                {/* Card 1 */}
                <div className="w-64 md:w-72 lg:w-80 flex-shrink-0 lg:flex-shrink bg-[#0F0F0F] text-white flex flex-col justify-between overflow-hidden">
                    <div className="flex flex-col gap-4 px-6 md:px-8 lg:px-10 py-8 md:py-10">
                        <h1 className="text-lg md:text-xl lg:text-2xl">Cloud Platform</h1>
                        <p className="text-xs md:text-sm lg:text-base text-gray-200">
                            A centralized platform designed for security companies to improve efficiency, compliance and real-time visibility for higher management.
                        </p>
                    </div>
                    <div className="relative w-full h-40 md:h-48 lg:h-60">
                        <img src={assets.Cloud} className="w-full h-full object-cover" alt="" />
                        <img src={assets.arrow_icon} className="hidden lg:block absolute bottom-0 left-0" alt="" />
                    </div>
                </div>

                {/* Card 2 */}
                <div className="w-64 md:w-72 lg:w-80 flex-shrink-0 lg:flex-shrink bg-[#0F0F0F] text-white flex flex-col justify-between overflow-hidden">
                    <div className="flex flex-col gap-4 px-6 md:px-8 lg:px-10 py-8 md:py-10">
                        <h1 className="text-lg md:text-xl lg:text-2xl">Operations Management</h1>
                        <p className="text-xs md:text-sm lg:text-base text-gray-200">
                            One window solution to manage all operations, complex payroll, staff performance, client communication, revenue & invoicing.
                        </p>
                    </div>
                    <div className="relative w-full h-40 md:h-48 lg:h-60">
                        <img src={assets.Operation} className="w-full h-full object-cover" alt="" />
                        <img src={assets.arrow_icon} className="hidden lg:block absolute top-0 right-0" alt="" />
                    </div>
                </div>

                {/* Card 3 */}
                <div className="w-64 md:w-72 lg:w-80 flex-shrink-0 lg:flex-shrink bg-[#0F0F0F] text-white flex flex-col justify-between overflow-hidden">
                    <div className="flex flex-col gap-4 px-6 md:px-8 lg:px-10 py-8 md:py-10">
                        <h1 className="text-lg md:text-xl lg:text-2xl">Dedicated Mobile App</h1>
                        <p className="text-xs md:text-sm lg:text-base text-gray-200">
                            Top management gets data anytime, supervisors manage attendance, and clients receive transparent updates for stronger ties.
                        </p>
                    </div>
                    <div className="relative w-full h-40 md:h-48 lg:h-60">
                        <img src={assets.Dedicated} className="w-full h-full object-cover" alt="" />
                        <img src={assets.arrow_icon} className="hidden lg:block absolute bottom-0 right-0" alt="" />
                    </div>
                </div>
            </div>

            {/* Swipe hint (only on sm & md) */}
            <p className="text-gray-500 text-sm mt-3 text-center lg:hidden">
                ← Swipe left to see more →
            </p>
        </div>
    )
}

export default Hero
