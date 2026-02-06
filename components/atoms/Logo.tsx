"use client";

import { useState } from 'react';

export const Logo = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="relative flex items-center cursor-pointer group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* SEED-style hexagonal logo */}
      <div className="relative w-10 h-10">
        {/* Outer hexagon frame */}
        <svg
          viewBox="0 0 40 40"
          className={`absolute inset-0 w-full h-full transition-all duration-700 ${
            isHovered ? 'rotate-[30deg] scale-110' : 'rotate-0 scale-100'
          }`}
        >
          <polygon
            points="20,2 36,11 36,29 20,38 4,29 4,11"
            fill="none"
            stroke={isHovered ? '#e8b830' : '#1e90ff'}
            strokeWidth="1"
            opacity={isHovered ? 0.8 : 0.5}
            className="transition-all duration-500"
          />
        </svg>

        {/* Inner diamond */}
        <svg
          viewBox="0 0 40 40"
          className={`absolute inset-0 w-full h-full transition-all duration-500 ${
            isHovered ? 'rotate-45 scale-90' : 'rotate-0 scale-100'
          }`}
        >
          <polygon
            points="20,8 32,20 20,32 8,20"
            fill={isHovered ? 'rgba(232, 184, 48, 0.15)' : 'rgba(30, 144, 255, 0.1)'}
            stroke={isHovered ? '#e8b830' : '#1e90ff'}
            strokeWidth="0.5"
            opacity="0.8"
            className="transition-all duration-500"
          />
        </svg>

        {/* Center dot - SEED eye */}
        <div
          className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full transition-all duration-500 ${
            isHovered
              ? 'w-3 h-3 bg-[#e8b830] shadow-[0_0_15px_rgba(232,184,48,0.8)]'
              : 'w-2 h-2 bg-[#1e90ff] shadow-[0_0_10px_rgba(30,144,255,0.6)]'
          }`}
        />

        {/* Phase shift ring */}
        <div
          className={`absolute inset-[-4px] rounded-full border transition-all duration-1000 ${
            isHovered
              ? 'border-[#e8b830]/40 scale-125 opacity-100'
              : 'border-[#1e90ff]/0 scale-100 opacity-0'
          }`}
          style={isHovered ? { animation: 'phase-shift 3s linear infinite' } : {}}
        />
      </div>
    </div>
  );
};
