'use client';

import { cn } from '@/lib/utils';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

const navItems = [
  { href: '/', label: 'Home', icon: '🏠' },
  { href: '/about', label: 'About', icon: '👨‍💻' },
  { href: '/projects', label: 'Projects', icon: '🚀' },
  { href: '/skills', label: 'Skills', icon: '⚡' },
  { href: '/blog', label: 'Blog', icon: '📝' },
  { href: '/contact', label: 'Contact', icon: '💬' },
];

export const Navigation = () => {
  const pathname = usePathname();
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  return (
    <nav className="hidden md:flex items-center justify-center gap-2">
      <div className="relative flex items-center gap-1 p-2 rounded-2xl bg-gray-800/30 backdrop-blur-sm border border-blue-500/20">
        {navItems.map((item, index) => {
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
              <div className={cn(
                'relative z-10 flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 ease-out',
                isActive 
                  ? 'text-white' 
                  : isHovered 
                    ? 'text-blue-200' 
                    : 'text-blue-300/70 hover:text-blue-200'
              )}>
                <span className={cn(
                  'transition-transform duration-300',
                  isHovered ? 'scale-125' : 'scale-100'
                )}>
                  {item.icon}
                </span>
                <span className={cn(
                  'transition-all duration-300',
                  isActive ? 'font-semibold' : 'font-medium'
                )}>
                  {item.label}
                </span>
              </div>
              
              {/* Active/Hover Background */}
              {(isActive || isHovered) && (
                <div className={cn(
                  'absolute inset-0 rounded-xl transition-all duration-300 ease-out',
                  isActive 
                    ? 'bg-gradient-to-r from-blue-500/80 to-cyan-500/80 shadow-lg shadow-blue-500/30 scale-100' 
                    : 'bg-gradient-to-r from-blue-500/20 to-cyan-500/20 scale-95'
                )} />
              )}
              
              {/* Animated Border */}
              {isActive && (
                <div className="absolute -inset-0.5 rounded-xl bg-gradient-to-r from-blue-500 via-cyan-500 to-indigo-500 opacity-30 blur-sm animate-pulse" />
              )}
              
              {/* Hover Glow */}
              {isHovered && !isActive && (
                <div className="absolute -inset-1 rounded-xl bg-gradient-to-r from-blue-500/20 via-cyan-500/20 to-indigo-500/20 blur-md" />
              )}
            </Link>
          );
        })}
        
        {/* Background Glow */}
        <div className="absolute -inset-2 rounded-3xl bg-gradient-to-r from-blue-500/5 via-cyan-500/5 to-indigo-500/5 blur-lg" />
      </div>
    </nav>
  );
};