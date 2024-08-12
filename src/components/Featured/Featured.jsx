import React, { useState } from "react";
import svg1 from "../../assets/svg1.svg";
import svg2 from "../../assets/svg2.svg";
import { motion } from "framer-motion";

function Featured() {
  const [isHovering, setHovering] = useState(false);

  const customFontStyle = {
    fontFamily: "'Test Founders Grotesk X-Cond Sm', sans-serif",
    fontWeight: 600,
    fontStyle: "normal",
  };

  return (
    <div
      data-scroll
      data-scroll-section
      data-scroll-speed=".3"
      style={customFontStyle}
      className="w-full py-10 bg-gray-900"
    >
      <div className="w-full px-6 md:px-10 border-b-2 border-zinc-700 pb-10 md:pb-20">
        <h1 className="text-4xl md:text-8xl font-['Neue Montreal'] tracking-tight text-white">
          Featured Projects
        </h1>
      </div>
      <div className="px-6 md:px-20 mt-10 md:mt-20 relative">
        <h1 className="absolute left-1/2 top-0 transform -translate-x-1/2 text-4xl md:text-8xl z-[999] text-yellow-300">
          {"PROJECTS".split("").map((item, index) => (
            <motion.span
              key={index}
              initial={{ y: "100%" }}
              animate={isHovering ? { y: "0%" } : { y: "100%" }}
              transition={{ duration: 0.5 }}
              className="inline-block"
            >
              {item}
            </motion.span>
          ))}
        </h1>
        <div className="flex flex-col md:flex-row space-y-8 md:space-y-0 md:space-x-8 mt-20">
          <div
            onMouseEnter={() => setHovering(true)}
            onMouseLeave={() => setHovering(false)}
            className="relative w-full md:w-1/2 h-[50vh] md:h-[70vh] overflow-hidden"
          >
            <div
              data-scroll
              data-scroll-section
              data-scroll-speed=".1"
              className="w-full h-full bg-gray-700"
            >
              <img className="w-full rounded-2xl h-full object-cover" src={svg1} alt="Feature 1" />
            </div>
          </div>
          <div
            onMouseEnter={() => setHovering(true)}
            onMouseLeave={() => setHovering(false)}
            className="relative w-full md:w-1/2 h-[50vh] md:h-[70vh] overflow-hidden"
          >
            <div
              data-scroll
              data-scroll-section
              data-scroll-speed=".1"
              className="w-full h-full bg-gray-700"
            >
              <img className="w-full rounded-2xl h-full object-cover" src={svg2} alt="Feature 2" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Featured;
