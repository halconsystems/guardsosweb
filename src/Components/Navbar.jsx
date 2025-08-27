import React, { useState } from 'react'
import { assets } from '../assets/assets'
import { Link } from 'react-router-dom'

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div className="w-full bg-[#0F0F0F] text-white relative">
      {/* Top bar */}
      <div className="flex justify-around items-baseline py-3 pt-5 md:flex">
        {/* Logo */}
        <h1 className="hidden md:block font-semibold text-4xl">
          GuardsOS<span className="text-red-500">.</span>
        </h1>

        {/* Phone + Email (hidden on mobile) */}
        <div className="hidden md:flex gap-3 text-sm">
          <p className="flex gap-2">
            <img src={assets.phone_icon} alt="" />
            +92 303 2542082
          </p>
          <p>|</p>
          <p className="flex gap-2">
            <img src={assets.mail_icon} alt="" />
            hello@guardsos.com
          </p>
        </div>

        {/* Mobile Open Button */}
        <div className="md:hidden flex justify-between items-center w-full px-6">
          <h1 className="font-semibold text-3xl">
            GuardsOS<span className="text-red-500">.</span>
          </h1>
         
          <img onClick={() => setMenuOpen(true)} src={assets.menu_icon} alt="" className='w-7'/>
        </div>
      </div>

      {/* Desktop Nav */}
      <div className="hidden md:flex justify-around py-3">
        <ul className="flex gap-4">
          <Link to="/">Home</Link>
          <Link to="/about">About Us</Link>
          <Link to="/features">Features</Link>
          <Link to="/pricing">Pricing</Link>
          <Link to="/contact">Contact Us</Link>
        </ul>

        <div className="flex gap-2">
          <div className="flex gap-1">
           <Link to='https://www.instagram.com/guardsos/'><img src={assets.instagram_icon} alt="" className="w-8" /></Link> 
            <Link to='https://www.facebook.com/guardsos'><img src={assets.facebook_icon} alt="" className="w-8" /></Link>
            <Link to='https://www.linkedin.com/company/guardsos'><img src={assets.linkedin_icon} alt="" className="w-7" /></Link>
        
          </div>

         <Link to='https://portal.guardsos.com/login' className='border border-white px-5 py-1.5 rounded-lg'>Login</Link>
        </div>
      </div>

      {/* Mobile Full-Screen Overlay */}
      <div
        className={`md:hidden fixed inset-0 z-50 
          bg-black/50 backdrop-blur-md text-white
          transition-opacity duration-300 ease-out
          ${menuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}
        onClick={() => setMenuOpen(false)}
      >
        <div
          className="w-full h-full flex flex-col items-center justify-center gap-8 text-xl px-8"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close button */}
          <img onClick={() => setMenuOpen(false)} src={assets.menu_icon} alt="" className='absolute top-6 right-6 w-7'/>


          {/* Nav links */}
          <nav className="flex flex-col items-center gap-6 text-center">
            <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>
            <Link to="/about" onClick={() => setMenuOpen(false)}>About Us</Link>
            <Link to="/features" onClick={() => setMenuOpen(false)}>Features</Link>
            <Link to="/pricing" onClick={() => setMenuOpen(false)}>Pricing</Link>
            <Link to="/contact" onClick={() => setMenuOpen(false)}>Contact Us</Link>
          </nav>

          {/* Socials + Login */}
          <div className="flex flex-col items-center gap-6 mt-8">
            <div className="flex gap-4">
            <Link to='https://www.instagram.com/guardsos/'><img src={assets.instagram_icon} alt="" className="w-6" /></Link> 
            <Link to='https://www.facebook.com/guardsos'><img src={assets.facebook_icon} alt="" className="w-6" /></Link>
            <Link to='https://www.linkedin.com/company/guardsos'><img src={assets.linkedin_icon} alt="" className="w-5" /></Link>
        
            </div>
            <button
              className="border rounded-lg px-6 py-2"
              onClick={() => setMenuOpen(false)}
            >

              <Link to='https://portal.guardsos.com/login'>Login</Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
