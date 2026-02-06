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
  const [systemTime, setSystemTime] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsScrolled(currentScrollY > 10);
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      setLastScrollY(currentScrollY);
    };

    const updateTime = () => {
      const now = new Date();
      setSystemTime(now.toLocaleTimeString('ja-JP', { hour12: false }));
    };
    updateTime();
    const timeInterval = setInterval(updateTime, 1000);

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearInterval(timeInterval);
    };
  }, [lastScrollY]);

  return (
    <header
      className={`
        fixed top-0 z-50 w-full transition-all duration-500 ease-in-out
        ${isVisible ? 'translate-y-0' : '-translate-y-full'}
      `}
    >
      {/* HUD Top Line */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#1e90ff]/60 to-transparent" />

      {/* Main Header Panel */}
      <div
        className={`
          relative transition-all duration-500
          ${isScrolled
            ? 'cockpit-glass border-b border-[#1e90ff]/20 shadow-[0_4px_30px_rgba(30,144,255,0.1)]'
            : 'bg-transparent'
          }
        `}
      >
        {/* Scanline overlay */}
        {isScrolled && (
          <div className="absolute inset-0 scanline-overlay opacity-30" />
        )}

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex h-16 items-center">
          {/* Left: Logo + System Status */}
          <Link href="/" className="mr-6 group flex items-center gap-3">
            <Logo />
            <div className="flex flex-col">
              <span className="font-bold text-lg tracking-wider bg-gradient-to-r from-[#1e90ff] via-[#00bfff] to-[#1e90ff] bg-clip-text text-transparent">
                NISHIYU
              </span>
              <span className="text-[10px] font-mono text-[#1e90ff]/50 tracking-widest hidden sm:block">
                SYSTEM ACTIVE
              </span>
            </div>
          </Link>

          {/* Center: Navigation */}
          <div className="flex-1">
            <Navigation />
          </div>

          {/* Right: System Time HUD */}
          <div className="hidden md:flex items-center gap-3 mr-2">
            <div className="flex items-center gap-2 px-3 py-1 rounded border border-[#1e90ff]/20 bg-[#0a0f1e]/60">
              <div className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
              <time className="font-mono text-xs text-[#1e90ff]/70" aria-label="システム時刻">{systemTime}</time>
            </div>
          </div>

          <MobileMenu />
        </div>
      </div>

      {/* HUD Bottom Line */}
      <div className={`
        absolute bottom-0 left-0 right-0 h-[1px] transition-all duration-500
        ${isScrolled
          ? 'bg-gradient-to-r from-transparent via-[#1e90ff]/40 to-transparent'
          : 'bg-transparent'
        }
      `} />

      {/* Corner Decorations */}
      <div className="absolute top-0 left-0 w-8 h-8 border-l border-t border-[#1e90ff]/20 pointer-events-none" />
      <div className="absolute top-0 right-0 w-8 h-8 border-r border-t border-[#1e90ff]/20 pointer-events-none" />
    </header>
  );
};
