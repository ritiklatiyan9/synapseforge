import React from "react";
import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import e1 from '../../assets/file.png';

function LandingPage() {
  const navigate = useNavigate();
  
  const customFontStyle = {
    fontFamily: "'Test Founders Grotesk X-Cond Sm', sans-serif",
    fontWeight: 600,
    fontStyle: "normal",
  };

  const buttonVariants = {
    initial: { scale: 1 },
    hover: { 
      scale: 1.05,
      boxShadow: "0px 0px 8px rgb(59, 130, 246)",
      transition: {
        duration: 0.3,
        yoyo: Infinity
      }
    }
  };

  const arrowVariants = {
    initial: { x: 0 },
    hover: { 
      x: 5,
      transition: {
        duration: 0.3,
        yoyo: Infinity
      }
    }
  };

  return (
    <div
      data-scroll
      data-scroll-section
      data-scroll-speed="-.3"
      className="w-full min-h-screen bg-zinc-900 pt-1"
    >
      <div className="flex flex-col md:flex-row justify-between items-center">
        <div className="textStructure mt-28 md:mt-10 px-4 md:px-20">
          {["We Create", "Eye Opening", "Solutions"].map((item, index) => {
            return (
              <div key={index} className="masker">
                <div className="w-full flex items-center">
                  {index === 1 && (
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: "9vh" }}
                      transition={{ ease: [0.76, 0, 0.24, 1] }}
                      duration={2}
                      className="w-[25vw] md:w-[9vw] z-[999] h-[15vw] md:h-[5vw] mb-2 md:mb-0"
                    >
                      <img
                        src="https://github.githubassets.com/assets/footer-copilot-54114bfd1d20.png"
                        alt=""
                        className="w-full h-full object-contain"
                      />
                    </motion.div>
                  )}
                  <h1
                    style={customFontStyle}
                    className="uppercase text-5xl md:text-7xl leading-tight md:leading-[5vw] tracking-tighter font-semibold"
                  >
                    {item}
                  </h1>
                </div>
              </div>
            );
          })}
        </div>
        <div className="w-64 md:w-[514px] mt-8 md:mt-36 md:mr-44">
          <img src={e1} alt="" />
        </div>
      </div>

      <div className="border-t-[1px] border-zinc-700 mt-20 md:mt-14 flex flex-col md:flex-row justify-between py-5 px-4 md:px-20">
        <div className="space-y-4 md:space-y-0 md:flex md:space-x-8">
          {[
            "For Public and private Companies",
            "From the first Pitch of IPO",
          ].map((item, index) => (
            <p
              key={index}
              className="text-sm text-zinc-100 md:text-md font-light tracking-tight leading-none"
            >
              {item}
            </p>
          ))}
        </div>

        <div className="start py-10 mt-8 md:mt-0">
          <motion.button
            variants={buttonVariants}
            initial="initial"
            whileHover="hover"
            className="px-6 py-3 bg-zinc-700 text-white rounded-full font-medium text-sm md:text-md uppercase tracking-wider flex items-center space-x-2 transition-colors duration-300 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
            onClick={() => navigate('/works')}
          >
            <span>Start the project</span>
            <motion.div
              variants={arrowVariants}
              className="w-5 h-5 flex items-center justify-center " 
            >
              <FaArrowRight />
            </motion.div>
          </motion.button>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;