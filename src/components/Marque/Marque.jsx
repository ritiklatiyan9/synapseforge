import React from 'react';
import { motion } from 'framer-motion';

function Marquee() {
  const customFontStyle = {
    fontFamily: "'Test Founders Grotesk X-Cond Sm', sans-serif",
    fontWeight: 600,
    fontStyle: "normal",
  };

  return (
    <div
      data-scroll
      data-scroll-section
      data-scroll-speed=".1"
      className='w-full py-20 md:py-20 bg-[#0b3b32] rounded-tl-3xl rounded-tr-3xl'
    >
      <div
        style={customFontStyle}
        className='text border-t-2 border-b-2 border-zinc-100 p-6 md:p-10 flex overflow-hidden whitespace-nowrap'
      >
        <motion.div
          className='flex'
          initial={{ x: '100%' }}
          animate={{ x: '-100%' }}
          transition={{
            ease: "linear",
            repeat: Infinity,
            duration: 15 // Adjusted for smoother animation
          }}
        >
          {[...Array(6)].map((_, index) => ( // Increased repetitions for smoother loop
            <h1
              key={index}
              className='text-[8vw] md:text-[6vw] lg:text-[8vw] leading-none mx-4'
            >
              Let's Build Together 
            </h1>
          ))}
        </motion.div>
        <motion.div
          className='flex'
          initial={{ x: '100%' }}
          animate={{ x: '-100%' }}
          transition={{
            ease: "linear",
            repeat: Infinity,
            duration: 15 // Adjusted for smoother animation
          }}
        >
          {[...Array(6)].map((_, index) => ( // Increased repetitions for smoother loop
            <h1
              key={index}
              className='text-[8vw] md:text-[6vw] lg:text-[8vw] leading-none mx-4'
            >
             Let's Build Together
            </h1>
          ))}
        </motion.div>
      </div>
    </div>
  );
}

export default Marquee;
