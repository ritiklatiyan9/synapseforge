import React from 'react'
import Navbar from './components/Navbar/Navbar'
import LandingPage from './components/LandingPage/LandingPage'
import Marque from './components/Marque/Marque'
import About from './components/About/About'
import Featured from './components/Featured/Featured'
import Cards from './components/Cards/Cards'
import LocomotiveScroll from 'locomotive-scroll';
import { motion } from 'framer-motion'
function App() {

  const locomotiveScroll = new LocomotiveScroll();
  return (
   <>
   <div className='w-full h-screen bg-gray-900 text-white'>
          <Navbar/>
          <LandingPage/>
          <Marque/>
          <About/>
          <Featured/>
          <Cards/>
   </div>
   </>
  )
}

export default App