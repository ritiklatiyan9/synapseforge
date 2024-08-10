import React from 'react';
import gif1 from '../../assets/gif1.gif';

function Cards() {
  return (
    <div
      data-scroll
      data-scroll-section
      data-scroll-speed=".1"
      className='w-full min-h-screen bg-zinc-100 p-6 md:p-28'
    >
      <div className='p-4 mb-8 font-bold'>
        <h1 className='text-zinc-800 text-3xl md:text-6xl'>WELCOME TO</h1>
        <h1 className='text-zinc-800 text-3xl md:text-6xl ml-2 md:ml-10'>A TECH WORLD.</h1>
      </div>
      <div className='flex flex-col md:flex-row gap-4 md:gap-8'>
        <div
          data-scroll
          data-scroll-section
          data-scroll-speed="-.1"
          className='cardContainer h-[40vh] md:h-[50vh] w-full md:w-1/2'
        >
          <div className='card w-full h-full shadow-lg rounded-lg bg-gray-300 overflow-hidden'>
            <img className='w-full h-full object-cover' src={gif1} alt="Tech GIF" />
          </div>
        </div>
        <div  data-scroll
      data-scroll-section
      data-scroll-speed=".3" className='flex flex-col gap-4 w-full md:w-1/2'>
          <div className='card w-full h-[40vh] md:h-[50vh] shadow-2xl rounded-3xl overflow-hidden'>
            <img className='w-full h-full object-cover' src="https://imgs.search.brave.com/KD-THvl966LCUjvBNPLCGacipZXHxUL6b-OKWh_n42Y/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/bG9nb2pveS5jb20v/d3AtY29udGVudC91/cGxvYWRzLzIwMjMx/MTI5MDk0NzEyL2Zp/bG0tbWFnaWstYmxh/Y2stbG9nby53ZWJw" alt="Tech Image 1" />
          </div>
          <div className='card w-full h-[40vh] md:h-[50vh] shadow-2xl rounded-3xl overflow-hidden'>
            <img className='w-full h-full object-cover' src="https://imgs.search.brave.com/jXMRuD311LfczKzlgJETpJVXCIagRRpXUIE95AKBrQ0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzA1LzQ1/L2U2LzA1NDVlNjRh/ZTBkNzVjMzZmZGM2/YjRjMjY3ZWQ0YjNi/LmpwZw" alt="Tech Image 2" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cards;
