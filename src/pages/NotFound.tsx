//import React from 'react'
import { Link } from "react-router-dom";
import { Wrench, Home, } from "lucide-react";

const NotFound = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0B1120] to-[#1a2333] flex items-center justify-center px-4">
      <div className="text-center max-w-2xl">
        
        {/* Animated Wrench Icon */}
        <div className="flex justify-center mb-6">
          <Wrench size={120} className="text-[#FF6B00] animate-bounce" />
        </div>

        {/* 404 Text */}
        <h1 className="text-9xl font-extrabold text-[#FF6B00] mb-4">404</h1>
        
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Oops! We Hit a Pipe Burst
        </h2>
        
        <p className="text-gray-300 text-lg mb-8">
          Looks like this page sprung a leak and got lost. 
          Don't worry, our DYP Plumbing team can fix anything... 
          including this broken link.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link 
            to="/" 
            className="flex items-center justify-center gap-2 bg-[#FF6B00] hover:bg-orange-600 text-white px-6 py-3 rounded-lg font-bold transition"
          >
            <Home size={20} /> Back to Home
          </Link>
          
          <Link 
            to="/#contact" 
            className="flex items-center justify-center gap-2 bg-white hover:bg-gray-200 text-[#0B1120] px-6 py-3 rounded-lg font-bold transition"
          >
            <Wrench size={20} /> Request Service
          </Link>
        </div>

        {/* Small note */}
        <p className="text-gray-400 text-sm mt-8">
          Need emergency plumbing? Call us: <span className="text-[#FF6B00] font-bold">+234 XXX XXX XXXX</span>
        </p>
      </div>
    </div>
  );
};

export default NotFound;