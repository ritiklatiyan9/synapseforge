import React from 'react';
import { motion } from 'framer-motion';
import bg from '../../assets/cyber-theme.mp4';
import bg2 from '../../assets/bg-green.mp4';

const Work = () => {
  return (
    <div className="w-full">
      {/* First section with cyber-theme background */}
    

      {/* Second section with different background */}
      <section className="relative h-screen w-full overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-40"
        >
          <source src={bg2} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Content for the second section */}
        <div className="relative z-10 flex items-center justify-center h-full">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-center text-white"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-4">OUR PROJECS</h2>
            <p className="text-lg md:text-xl">
              Here you can add more content about your work or projects.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Work;