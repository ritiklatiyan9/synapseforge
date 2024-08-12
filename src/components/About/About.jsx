import React from "react";

function About() {
  const customFontStyle = {
    fontFamily: "'Neue Montreal Regular'",
    fontWeight: 600,
    fontStyle: "normal",
  };

  return (
    <div
      data-scroll
    
      data-scroll-speed="0.4"
      style={customFontStyle}
      className="w-full py-10  md:py-20 bg-[#CDEA68] p-6 md:p-20 text-base md:text-2xl rounded-3xl text-black capitalize leading-7"
    >
      <h1 className="border-b-2 border-black p-4 md:p-6 text-center md:text-left">
        we specialize in delivering innovative solutions that drive success and
        exceed expectations. Our expert team is dedicated to turning your unique
        vision into reality with precision and excellence. From cutting-edge
        technology to seamless integration, we provide tailored services that
        help your business thrive in today’s dynamic landscape.
      </h1>

      <div className="flex flex-col md:flex-row text-black mt-10 md:mt-40 justify-center md:justify-between items-center">
        <div className="text-center md:text-left md:ml-40 leading-7 mb-10 md:mb-0">
          <h1 className="text-lg md:text-xl">Hello there!</h1>
          <h1 className="text-lg md:text-2xl mt-2 ml-2">Do You Know?</h1>
          <div className="inline-block text-black border rounded-full px-4 md:px-6 py-2 md:py-3 mt-4 border-black cursor-pointer hover:bg-black hover:text-white transition-all duration-300">
            Check Now
          </div>
        </div>
        <div className="w-full md:w-1/2 flex justify-center">
          <img
            className="w-full max-w-2xl rounded shadow-xl"
            src="https://cdn.svgator.com/images/2023/03/animated-green-astronaut-helmet.svg"
            alt="Astronaut Helmet"
          />
        </div>
      </div>
    </div>
  );
}

export default About;
