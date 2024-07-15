import React from 'react';
import { motion } from "framer-motion"
// import {logo} from "./3.png"

const Hero = () => {
  return (
    <motion.div
      initial={{ y: "100vh" }} 
      animate={{ y: 0 }} 
      transition={{ type: "spring", stiffness: 50 }} 
      className="flex items-center justify-center flex-col h-screen uppercase bg-gray-900 text-gray-400">
         {/* <img 
      src="3.png" 
      alt="Logo" 
      className="inline-block mr-2 align-middle"
      style={{ height: "1em" }} 
    /> */}
      <h1 
      className="relative m-0 mb-6 text-4xl md:text-7xl lg:text-9xl glitch" title="DTG AI">
        DTG AI
      </h1>
      <h2 className="relative text-xl text-gray-600 text-center glitch" title="Get Started With Us">
      Get Started With Us
      </h2>
      <div className="mt-8 w-9 h-14">
        <div className="border-2 border-white rounded-full w-3 h-9 mx-auto p-2.5 opacity-75">
          <div className="w-0.5 h-2.5 bg-white rounded-full scroller"></div>
        </div>
      </div>
    </motion.div>
  );
}

export default Hero;
