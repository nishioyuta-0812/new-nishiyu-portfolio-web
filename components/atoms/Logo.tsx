"use client";

import { useState } from 'react';

export const Logo = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="relative flex items-center gap-2 cursor-pointer group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Animated Logo Icon */}
      <div className="relative">
        <div className={`
          w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 via-cyan-500 to-indigo-600 
          flex items-center justify-center transition-all duration-500 ease-out
          shadow-lg shadow-blue-500/30
          ${isHovered ? 'scale-110 rotate-12 shadow-xl shadow-blue-500/50' : 'scale-100 rotate-0'}
        `}>
          {/* Geometric Logo Design */}
          <div className="relative w-6 h-6">
            <div className={`
              absolute inset-0 bg-white rounded-sm transition-transform duration-300
              ${isHovered ? 'rotate-45' : 'rotate-0'}
            `} />
            <div className={`
              absolute top-1 left-1 w-4 h-4 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-sm
              transition-all duration-500 delay-100
              ${isHovered ? 'scale-75 rotate-180' : 'scale-100 rotate-0'}
            `} />
            <div className={`
              absolute top-0.5 left-0.5 w-2 h-2 bg-white rounded-full
              transition-all duration-700 delay-200
              ${isHovered ? 'scale-150 translate-x-2 translate-y-2' : 'scale-100'}
            `} />
          </div>
        </div>
        
        {/* Orbit Effect */}
        <div className={`
          absolute -inset-2 rounded-full border border-blue-400/30
          transition-all duration-1000 ease-out
          ${isHovered ? 'scale-150 rotate-180 opacity-100' : 'scale-100 rotate-0 opacity-0'}
        `} />
        
        {/* Pulse Effect */}
        <div className={`
          absolute -inset-1 rounded-xl bg-gradient-to-r from-blue-500/20 to-cyan-500/20
          transition-all duration-500
          ${isHovered ? 'scale-125 opacity-100' : 'scale-100 opacity-0'}
        `} />
      </div>
      
      {/* Floating Particles */}
      {isHovered && (
        <>
          <div className="absolute -top-1 left-8 w-1 h-1 bg-blue-400 rounded-full animate-ping" 
               style={{ animationDelay: '0ms' }} />
          <div className="absolute top-2 left-12 w-0.5 h-0.5 bg-cyan-400 rounded-full animate-ping" 
               style={{ animationDelay: '300ms' }} />
          <div className="absolute -top-0.5 left-6 w-0.5 h-0.5 bg-indigo-400 rounded-full animate-ping" 
               style={{ animationDelay: '600ms' }} />
        </>
      )}
    </div>
  );
};