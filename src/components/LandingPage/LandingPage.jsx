import { motion } from "framer-motion";
import React from "react";
import { FaArrowRight } from "react-icons/fa";
import e1 from '../../assets/file.png';

function LandingPage() {
  const customFontStyle = {
    fontFamily: "'Test Founders Grotesk X-Cond Sm', sans-serif",
    fontWeight: 600,
    fontStyle: "normal",
  };

  return (
    <div
      data-scroll
      data-scroll-section
      data-scroll-speed="-.3"
      className="w-full min-h-screen bg-zinc-900 pt-1"
    >
      <div className="flex flex-col md:flex-row justify-between items-center ">
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
          ].map((item, index) => {
            return (
              <p
                key={index}
                className="text-sm text-zinc-100 md:text-md font-light tracking-tight leading-none"
              >
                {item}
              </p>
            );
          })}
        </div>

        <div className="start py-10 mt-8 md:mt-0">
          <div className="px-4 py-2 border-[1px] rounded-full border-zinc-500 font-light text-sm md:text-md capitalize flex justify-center items-center">
            Start the project
            <div className="w-3 h-3 p-1 ml-2 mt-1 rotate-[-45deg] border-gray-100 rounded-full">
              <FaArrowRight />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
