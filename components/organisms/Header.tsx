"use client";

import { Logo } from '@/components/atoms/Logo';
import { Navigation } from '@/components/molecules/Navigation';
import { MobileMenu } from '@/components/molecules/MobileMenu';
import Link from 'next/link';
import { useState, useEffect } from 'react';

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Update scrolled state
      setIsScrolled(currentScrollY > 10);
      
      // Hide/show header based on scroll direction
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false); // Scrolling down
      } else {
        setIsVisible(true); // Scrolling up
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <header 
      className={`
        fixed top-0 z-50 w-full transition-all duration-500 ease-in-out
        ${isVisible ? 'translate-y-0' : '-translate-y-full'}
        ${isScrolled 
          ? 'bg-gray-900/80 backdrop-blur-md border-b border-blue-500/20 shadow-2xl shadow-blue-500/20' 
          : 'bg-transparent border-b border-transparent'
        }
      `}
      style={{
        background: isScrolled 
          ? 'linear-gradient(135deg, rgba(17, 24, 39, 0.9) 0%, rgba(30, 58, 138, 0.2) 50%, rgba(17, 24, 39, 0.9) 100%)'
          : 'transparent'
      }}
    >
      {/* Glassmorphism effect overlay */}
      {isScrolled && (
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-transparent to-cyan-500/5 backdrop-blur-sm" />
      )}
      
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex h-16 items-center">
        <Link href="/" className="mr-8 group">
          <div className="flex items-center gap-3">
            <Logo />
            <div className={`
              transition-all duration-300 ease-out
              ${isScrolled ? 'opacity-100' : 'opacity-90'}
              group-hover:scale-105
            `}>
              <span className="font-jp font-bold text-xl bg-gradient-to-r from-blue-400 via-cyan-400 to-indigo-400 bg-clip-text text-transparent">
                NISHIYU
              </span>
            </div>
          </div>
        </Link>
        
        <div className="flex-1">
          <Navigation />
        </div>
        
        <MobileMenu />
      </div>
      
      {/* Bottom glow effect */}
      {isScrolled && (
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent" />
      )}
    </header>
  );
};