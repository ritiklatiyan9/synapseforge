import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import LocomotiveScroll from 'locomotive-scroll';

import Navbar from './components/Navbar/Navbar';
import LandingPage from './components/LandingPage/LandingPage';
import Marque from './components/Marque/Marque';
import About from './components/About/About';
import Featured from './components/Featured/Featured';
import Cards from './components/Cards/Cards';
import Services from '../src/components/Services/Services';
import Works from '../src/components/Work/Work';
import Contact from '../src/components/Contact/Contact';
import Footer from './components/Footer/Footer';
import Preloader from './components/Preloader/preloader'; // Make sure to create this file

import logoSrc from '../src/assets/2.png'; // Replace with the actual path to your logo

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const locomotiveScroll = new LocomotiveScroll();
    
    // Simulate loading time (2 seconds)
    const timer = setTimeout(() => setIsLoading(false), 2000);

    return () => {
      if (locomotiveScroll) locomotiveScroll.destroy();
      clearTimeout(timer);
    };
  }, []);

  const pageVariants = {
    initial: { opacity: 0, y: 20 },
    in: { opacity: 1, y: 0 },
    out: { opacity: 0, y: -20 }
  };

  const pageTransition = {
    type: 'tween',
    ease: 'anticipate',
    duration: 0.5
  };

  return (
    <Router>
      <div className='w-full min-h-screen bg-gray-900 text-white'>
        <AnimatePresence>
          {isLoading ? (
            <Preloader key="preloader" logoSrc={logoSrc} />
          ) : (
            <>
              <Navbar />
              <AnimatePresence mode='wait'>
                <Routes>
                  <Route path="/" element={
                    <motion.div
                      key="home"
                      initial="initial"
                      animate="in"
                      exit="out"
                      variants={pageVariants}
                      transition={pageTransition}
                    >
                      <LandingPage />
                      <Marque />
                      <About />
                      <Featured />
                      <Cards />
                    </motion.div>
                  } />
                  <Route path="/about" element={
                    <motion.div
                      key="about"
                      initial="initial"
                      animate="in"
                      exit="out"
                      variants={pageVariants}
                      transition={pageTransition}
                    >
                      <About />
                    </motion.div>
                  } />
                  <Route path="/services" element={
                    <motion.div
                      key="services"
                      initial="initial"
                      animate="in"
                      exit="out"
                      variants={pageVariants}
                      transition={pageTransition}
                    >
                      <Services />
                    </motion.div>
                  } />
                  <Route path="/works" element={
                    <motion.div
                      key="works"
                      initial="initial"
                      animate="in"
                      exit="out"
                      variants={pageVariants}
                      transition={pageTransition}
                    >
                      <Works />
                    </motion.div>
                  } />
                  <Route path="/contact" element={
                    <motion.div
                      key="contact"
                      initial="initial"
                      animate="in"
                      exit="out"
                      variants={pageVariants}
                      transition={pageTransition}
                    >
                      <Contact />
                    </motion.div>
                  } />
                </Routes>
              </AnimatePresence>
              <Footer/>
            </>
          )}
        </AnimatePresence>
      </div>
    </Router>
  );
}

export default App;