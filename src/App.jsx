import React, { useState, useEffect, useRef } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import LocomotiveScroll from "locomotive-scroll";

import Navbar from "./components/Navbar/Navbar";
import LandingPage from "./components/LandingPage/LandingPage";
import Marque from "./components/Marque/Marque";
import About from "./components/About/About";
import Featured from "./components/Featured/Featured";
import Cards from "./components/Cards/Cards";
import Services from "./components/Services/Services";
import Works from "./components/Work/Work";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Preloader from "./components/Preloader/preloader";

import logoSrc from "./assets/2.png";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const scrollRef = useRef(null);

  useEffect(() => {
    if (!isLoading) {
      // Create and append the Locomotive Scroll styles
      const locomotiveScrollStyles = document.createElement('style');
      locomotiveScrollStyles.textContent = `
        html.has-scroll-smooth {
          overflow: hidden;
        }
        html.has-scroll-dragging {
          -webkit-user-select: none;
          -moz-user-select: none;
          -ms-user-select: none;
          user-select: none;
        }
        .has-scroll-smooth body {
          overflow: hidden;
        }
        .has-scroll-smooth [data-scroll-container] {
          min-height: 100vh;
        }
        [data-scroll-direction="horizontal"] [data-scroll-container] {
          height: 100vh;
          display: inline-block;
          white-space: nowrap;
        }
        [data-scroll-direction="horizontal"] [data-scroll-section] {
          display: inline-block;
          vertical-align: top;
          white-space: nowrap;
          height: 100%;
        }
        .c-scrollbar {
          position: absolute;
          right: 0;
          top: 0;
          width: 11px;
          height: 100%;
          transform-origin: center right;
          transition: transform 0.3s, opacity 0.3s;
          opacity: 0;
        }
        .c-scrollbar:hover {
          transform: scaleX(1.45);
        }
        .c-scrollbar:hover, .has-scroll-scrolling .c-scrollbar, .has-scroll-dragging .c-scrollbar {
          opacity: 1;
        }
        .c-scrollbar_thumb {
          position: absolute;
          top: 0;
          right: 0;
          background-color: #000000;
          opacity: 0.5;
          width: 7px;
          border-radius: 10px;
          margin: 2px;
          cursor: -webkit-grab;
          cursor: grab;
        }
        .has-scroll-dragging .c-scrollbar_thumb {
          cursor: -webkit-grabbing;
          cursor: grabbing;
        }
      `;
      document.head.appendChild(locomotiveScrollStyles);

      const locomotiveScroll = new LocomotiveScroll({
        el: scrollRef.current,
        smooth: true,
        multiplier: 1,
        class: "is-revealed",
      });

      return () => {
        locomotiveScroll.destroy();
        document.head.removeChild(locomotiveScrollStyles);
      };
    }
  }, [isLoading]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const pageVariants = {
    initial: { opacity: 0, y: 20 },
    in: { opacity: 1, y: 0 },
    out: { opacity: 0, y: -20 },
  };

  const pageTransition = {
    type: "tween",
    ease: "anticipate",
    duration: 0.5,
  };

  return (
    <Router>
      <div className="w-full min-h-screen bg-gray-900 text-white" ref={scrollRef}>
        <AnimatePresence>
          {isLoading ? (
            <Preloader key="preloader" logoSrc={logoSrc} />
          ) : (
            <>
              <Navbar />
              <AnimatePresence mode="wait">
                <Routes>
                  <Route
                    path="/"
                    element={
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
                    }
                  />
                  <Route
                    path="/about"
                    element={
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
                    }
                  />
                  <Route
                    path="/services"
                    element={
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
                    }
                  />
                  <Route
                    path="/works"
                    element={
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
                    }
                  />
                  <Route
                    path="/contact"
                    element={
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
                    }
                  />
                </Routes>
              </AnimatePresence>
              <Footer />
            </>
          )}
        </AnimatePresence>
      </div>
    </Router>
  );
}

export default App;
