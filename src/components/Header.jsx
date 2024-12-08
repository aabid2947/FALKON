// import React from 'react';
// import Mic from '../Images/Mic.png'

// const Header = () => {
//   return (
//     <div className="bg-black text-white min-h-screen flex flex-col items-center justify-center">
//       {/* <div className="text-center">
//         <h1 className="text-5xl font-bold mb-4">
//           One System, <br /> Infinite Languages, <br /> Endless Possibilities
//         </h1>
//         <p className="text-lg max-w-lg mx-auto mb-8">
//           Introducing FSLAKWS, a cutting-edge solution for keyword spotting
//           across all languages, requiring minimal data for maximum accuracy.
//           Join us in breaking language barriers and enabling seamless voice
//           interactions worldwide.
//         </p>
//         <button className="bg-teal-600 text-white px-6 py-3 rounded hover:bg-teal-500">
//           Try FALKON – It's Free!
//         </button>
//       </div> */}
//         <section className="flex flex-col md:flex-row items-center bg-black px-6 py-6 md:px-16 h-screen ">
//         <div className="w-full  text-left px-9">      
//           <h1 className='px-2 text-gray-400 text-xl py-2'>MORE THAN JUST WORD</h1>  
//         <h1 className="text-8xl text-white font-bold mb-4">
//           One System, <br /> Infinite Languages, <br /> Endless Possibilities
//         </h1>
//           <p className="text-white leading-relaxed w-3/4 px-2 text-lg">
//             FSLAKWS is a groundbreaking solution designed to address the limitations of traditional keyword spotting systems. By leveraging few-shot learning and a language-agnostic framework, FSLAKWS detects keywords across diverse languages with unmatched efficiency. Whether you’re building voice assistants or analyzing multilingual datasets, FSLAKWS is your key to scalable and inclusive speech recognition.
//           </p>
//         </div>
//         <div className="w-full md:w-1/3 flex flex-col">
//           <div className="w-ful h-80 bg-gray-200 rounded-lg" /> 
//             <button className="bg-teal-600 text-white px-4 py-3  mt-11 rounded hover:bg-teal-500 w-64">
//             Try FALKON – It's Free!
//             </button>
//         </div>
//       </section>
//       <div className="relative mt-16 flex flex-col items-center">
//   {/* Main Image */}
//   <img
//     src={Mic}
//     alt="Microphone Background"
//     className="w-full max-w-3xl rounded-lg"
//   />

//   {/* First Overlapping Image (Shifted Outside Top-Left) */}
//   <div className="absolute w-1/3 -top-8 -left-8 bg-white p-1 cursor-pointer rounded shadow group">
//   <img
//     src={Mic}
//     alt="Graph Visualization"
//     className="rounded"
//   />
//   <span className="absolute hidden group-hover:block bg-black text-white text-sm rounded px-2 py-1 top-20 -left-2">
//     This is a Graph Visualization
//   </span>
// </div>

//   {/* Second Overlapping Image (Shifted Outside Top-Right) */}
//   <div className="absolute w-2/3 -top-8 -right-8 bg-white p-1 cursor-pointer rounded shadow group">
//     <img
//       src={Mic}
//       alt="Data Table"
//       className="rounded"
//     />
//       <span className="absolute hidden group-hover:block bg-black text-white text-sm rounded px-2 py-1 top-20 -right-2">
//     This is a Data Table
//   </span>
//   </div>
// </div>

//     </div>
//   );
// };

// export default Header;
import React, { useState, useEffect } from 'react';
import Mic from '../Images/Mic.png';

const Header = () => {
  const [scrollY, setScrollY] = useState(0);

  // Track the scroll position
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="bg-black text-white min-h-screen flex flex-col items-center justify-center">
      <section className="flex flex-col md:flex-row items-center bg-black px-6 py-6 md:px-16 h-screen">
        <div className="w-full text-left px-9">
          <h1 className='px-2 text-gray-400 text-xl py-2'>MORE THAN JUST WORD</h1>
          <h1 className="text-8xl text-white font-bold mb-4">
            One System, <br /> Infinite Languages, <br /> Endless Possibilities
          </h1>
          <p className="text-white leading-relaxed w-3/4 px-2 text-lg">
            FSLAKWS is a groundbreaking solution designed to address the limitations of traditional keyword spotting systems. By leveraging few-shot learning and a language-agnostic framework, FSLAKWS detects keywords across diverse languages with unmatched efficiency. Whether you’re building voice assistants or analyzing multilingual datasets, FSLAKWS is your key to scalable and inclusive speech recognition.
          </p>
        </div>
        <div className="w-full md:w-1/3 flex flex-col">
          <div className="w-ful h-80 bg-gray-200 rounded-lg" />
          <button className="bg-teal-600 text-white px-4 py-3 mt-11 rounded hover:bg-teal-500 w-64">
            Try FALKON – It's Free!
          </button>
        </div>
      </section>

      <div className="relative mt-16 flex flex-col items-center">
        {/* Main Image */}
        <img
          src={Mic}
          alt="Microphone Background"
          className="w-full max-w-3xl rounded-lg"
        />

        {/* First Overlapping Image (Shifted Outside Top-Left) */}
        <div
          className="absolute w-2/3 top-10 -left-8 bg-white p-1 cursor-pointer rounded shadow group"
          style={{
            transform: `translateX(-${scrollY * 0.4}px)`, // Move left on scroll
            maxWidth: 'calc(100vw - 40px)', // Prevent it from going beyond the screen width
          }}
        >
          <img
            src={Mic}
            alt="Graph Visualization"
            className="rounded"
          />
          <span className="absolute hidden group-hover:block bg-black text-white text-sm rounded px-2 py-1 top-20 -left-2">
            This is a Graph Visualization
          </span>
        </div>

        {/* Second Overlapping Image (Shifted Outside Top-Right) */}
        <div
          className="absolute w-2/3 -top-8 -right-8 bg-white p-1 cursor-pointer rounded shadow group"
          style={{
            transform: `translateX(${scrollY * 0.4}px)`, // Move right on scroll
            maxWidth: 'calc(100vw - 60px)', // Prevent it from going beyond the screen width
          }}
        >
          <img
            src={Mic}
            alt="Data Table"
            className="rounded"
          />
          <span className="absolute hidden group-hover:block bg-black text-white text-sm rounded px-2 py-1 top-20 -right-2">
            This is a Data Table
          </span>
        </div>
      </div>
    </div>
  );
};

export default Header;

