import React from 'react';
import { motion } from 'framer-motion';

const Preloader = ({ logoSrc }) => {
  return (
    <motion.div 
      className="fixed inset-0 flex flex-col items-center justify-center bg-zinc-900 z-50"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
    >
      <motion.img
        src={logoSrc}
        alt="Company Logo"
        className="w-36 h-28 md:w-64 md:h-56 mb-8"
        initial={{ scale: 0.2, opacity: 0 }}
        animate={{ scale: 1.0, opacity: 1 }}
        exit={{ scale: 2.5, rotate: -15, opacity: 0 }}
        transition={{ duration: 1.2 }}
      />
    </motion.div>
  );
};

export default Preloader;
