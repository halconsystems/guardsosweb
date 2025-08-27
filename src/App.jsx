import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Home from './Pages/Home'
import Contact from './Pages/Contact'
import About from './Pages/About'
import Features from './Pages/Features'
import Pricing from './Pages/Pricing'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
const App = () => {
  return (
    <div>
      <Navbar/>
       <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/features' element={<Features/>} />  
        <Route path='/pricing' element={<Pricing/>} />
       </Routes>
       <Footer/>
    </div>
  )
}

export default App