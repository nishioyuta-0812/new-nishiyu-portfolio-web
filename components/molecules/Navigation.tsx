'use client';

import { cn } from '@/lib/utils';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

const navItems = [
  { href: '/', label: 'HOME', code: '01' },
  { href: '/about', label: 'ABOUT', code: '02' },
  { href: '/projects', label: 'PROJECTS', code: '03' },
  { href: '/skills', label: 'SKILLS', code: '04' },
  { href: '/blog', label: 'BLOG', code: '05' },
  { href: '/contact', label: 'CONTACT', code: '06' },
];

export const Navigation = () => {
  const pathname = usePathname();
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  return (
    <nav className="hidden md:flex items-center justify-center">
      <div className="relative flex items-center gap-0.5 px-2 py-1.5 rounded-sm border border-[#1e90ff]/15 bg-[#0a0f1e]/40 backdrop-blur-md">
        {/* HUD bracket decorations */}
        <div className="absolute -left-1 top-1/2 -translate-y-1/2 w-1 h-4 border-l border-t border-b border-[#1e90ff]/30" />
        <div className="absolute -right-1 top-1/2 -translate-y-1/2 w-1 h-4 border-r border-t border-b border-[#1e90ff]/30" />

        {navItems.map((item) => {
          const isActive = pathname === item.href;
          const isHovered = hoveredItem === item.href;

          return (
            <Link
              key={item.href}
              href={item.href}
              className="relative"
              onMouseEnter={() => setHoveredItem(item.href)}
              onMouseLeave={() => setHoveredItem(null)}
            >
              <div
                className={cn(
                  'relative z-10 flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium tracking-wider transition-all duration-300 ease-out uppercase',
                  isActive
                    ? 'text-white'
                    : isHovered
                      ? 'text-[#1e90ff]'
                      : 'text-[#1e90ff]/50 hover:text-[#1e90ff]/80'
                )}
              >
                <span className={cn(
                  'font-mono text-[10px] transition-colors duration-300',
                  isActive ? 'text-[#e8b830]' : 'text-[#1e90ff]/30'
                )}>
                  {item.code}
                </span>
                <span className="font-semibold">{item.label}</span>
              </div>

              {/* Active indicator - Phase Shift style */}
              {isActive && (
                <>
                  <div className="absolute inset-0 bg-gradient-to-r from-[#1e90ff]/20 via-[#1e90ff]/30 to-[#1e90ff]/20 rounded-sm" />
                  <div className="absolute bottom-0 left-1 right-1 h-[2px] bg-gradient-to-r from-transparent via-[#1e90ff] to-transparent" />
                  <div className="absolute inset-0 rounded-sm shadow-[inset_0_0_15px_rgba(30,144,255,0.15)]" />
                </>
              )}

              {/* Hover effect */}
              {isHovered && !isActive && (
                <div className="absolute inset-0 bg-[#1e90ff]/5 rounded-sm" />
              )}
            </Link>
          );
        })}

        {/* Scanning line animation */}
        <div className="absolute inset-0 overflow-hidden rounded-sm pointer-events-none">
          <div
            className="absolute w-full h-[1px] bg-gradient-to-r from-transparent via-[#1e90ff]/20 to-transparent"
            style={{
              animation: 'scanline 4s linear infinite',
            }}
          />
        </div>
      </div>
    </nav>
  );
};
