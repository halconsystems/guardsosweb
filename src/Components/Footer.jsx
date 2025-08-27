import React from 'react'
import { assets } from '../assets/assets'
import { Link } from 'react-router-dom'

const Footer = () => {
  const handleScroll = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  return (
    <>
      {/* Top Subscribe Section */}
      <div className="w-full bg-[#0F0F0F] flex flex-col lg:flex-row justify-evenly items-center px-6 lg:px-12 py-10 lg:h-[30vh] gap-6 lg:gap-0">
        {/* Left Text */}
        <div className="text-white font-medium text-3xl lg:text-4xl flex justify-center items-center text-center lg:text-left">
          <h1 className="w-full lg:w-[60%]">
            Everything you need to Scale, Manage & Grow
          </h1>
        </div>

        {/* Right Subscribe */}
        <div className="w-full lg:w-[50%] flex flex-col lg:flex-row justify-center items-center gap-4">
          <input
            type="email"
            placeholder="Enter your email"
            className="bg-white px-5 py-2.5 rounded-lg w-full lg:w-auto"
          />
          <button className="px-5 py-2.5 bg-red-500 text-white font-semibold rounded-lg">
            Subscribe
          </button>
        </div>
      </div>

      {/* Middle Links Section */}
      <div className="bg-[#0F0F0F] text-white flex flex-col lg:flex-row px-6 lg:px-10 py-10 lg:h-[60vh] justify-around border-b border-gray-600 gap-12 lg:gap-0">
        
        {/* About */}
        <div className="flex flex-col lg:w-[28%] gap-6 text-center lg:text-left">
          <h1 className="font-semibold text-3xl lg:text-4xl">
            GuardsOS<span className="text-red-500">.</span>
          </h1>
          <p className="text-sm lg:text-base leading-relaxed">
            Built to maximize efficiency, profitability, and scalability. Reduce
            overheads and enable real-time insights, We empower security firms
            to win more clients, strengthen relationships, and grow faster in a
            competitive market.
          </p>
        </div>

        {/* Links - only visible on lg and above */}
        <div className="hidden lg:flex flex-col lg:flex-row gap-12 lg:gap-20 w-full lg:w-auto justify-center lg:justify-start text-center lg:text-left">
          {/* Navigation */}
          <div className="flex flex-col gap-3">
            <h1 className="font-semibold text-xl lg:text-2xl mb-2">Navigation</h1>
            <Link to="/" onClick={handleScroll}>Home</Link>
            <Link to="/about" onClick={handleScroll}>About Us</Link>
            <Link to="/features" onClick={handleScroll}>Features</Link>
            <Link to="/contact" onClick={handleScroll}>Contact Us</Link>
          </div>

          {/* Services */}
          <div className="flex flex-col gap-3">
            <h1 className="font-semibold text-xl lg:text-2xl mb-2">Services</h1>
            <p onClick={handleScroll}>Guards Management</p>
            <p onClick={handleScroll}>Client Portal & App</p>
            <p onClick={handleScroll}>Supervisor App</p>
            <p onClick={handleScroll}>Analytics</p>
          </div>

          {/* Resources */}
          <div className="flex flex-col gap-3">
            <h1 className="font-semibold text-xl lg:text-2xl mb-2">Resources</h1>
            <p onClick={handleScroll}>Customer Stories</p>
            <p onClick={handleScroll}>Help Center</p>
            <p onClick={handleScroll}>Documentation</p>
            <Link to="/pricing" onClick={handleScroll}>Pricing</Link>
          </div>
        </div>
      </div>

      {/* Bottom Social + Copyright */}
      <div className="bg-[#0f0f0f] flex flex-col lg:flex-row justify-between items-center text-white px-6 lg:px-28 py-5 border-t border-gray-600 gap-4 lg:gap-0">
        <p className="text-sm lg:text-base text-center lg:text-left">
          Copyright © 2025 GuardsOS | Design by GuardsOS
        </p>

        <div className="flex gap-3 justify-center items-end lg:justify-end">
          <img src={assets.instagram_icon} alt="Instagram" className="w-6 lg:w-8" />
          <img src={assets.facebook_icon} alt="Facebook" className="w-6 lg:w-8" />
          <img src={assets.linkedin_icon} alt="TikTok" className="w-5 lg:w-7" />
        </div>
      </div>
    </>
  )
}

export default Footer;
