'use client';

import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu, X } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

const navItems = [
  { href: '/', label: 'Home', icon: '🏠', description: 'ホームページ' },
  { href: '/about', label: 'About', icon: '👨‍💻', description: '私について' },
  { href: '/projects', label: 'Projects', icon: '🚀', description: 'プロジェクト' },
  { href: '/skills', label: 'Skills', icon: '⚡', description: 'スキル・技術' },
  { href: '/blog', label: 'Blog', icon: '📝', description: '技術ブログ' },
  { href: '/contact', label: 'Contact', icon: '💬', description: 'お問い合わせ' },
];

export const MobileMenu = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex flex-1 items-center justify-end md:hidden">
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetTrigger asChild>
          <Button
            variant="ghost"
            size="icon"
            className="relative w-10 h-10 rounded-xl bg-gray-800/30 backdrop-blur-sm border border-blue-500/20 hover:bg-blue-500/20 transition-all duration-300"
          >
            <div className="relative w-6 h-6">
              <Menu className={`h-5 w-5 text-blue-300 transition-all duration-300 ${isOpen ? 'rotate-90 opacity-0' : 'rotate-0 opacity-100'}`} />
              <X className={`absolute top-0 left-0.5 h-4 w-4 text-blue-300 transition-all duration-300 ${isOpen ? 'rotate-0 opacity-100' : '-rotate-90 opacity-0'}`} />
            </div>
            <span className="sr-only">メニューを開く</span>
          </Button>
        </SheetTrigger>
        
        <SheetContent 
          side="right" 
          className="w-80 bg-gray-900/95 backdrop-blur-xl border-l border-blue-500/20 p-0"
          style={{
            background: 'linear-gradient(135deg, rgba(17, 24, 39, 0.95) 0%, rgba(30, 58, 138, 0.1) 50%, rgba(17, 24, 39, 0.95) 100%)'
          }}
        >
          {/* Header */}
          <div className="p-6 border-b border-blue-500/20">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center">
                <span className="text-white font-bold text-sm">N</span>
              </div>
              <span className="font-jp font-bold text-lg bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                NISHIYU
              </span>
            </div>
          </div>
          
          {/* Navigation */}
          <div className="flex flex-col gap-2 p-6">
            {navItems.map((item, index) => {
              const isActive = pathname === item.href;
              
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="group relative"
                >
                  <div className={`
                    relative z-10 flex items-center gap-4 p-4 rounded-xl transition-all duration-300 ease-out
                    ${isActive 
                      ? 'text-white' 
                      : 'text-blue-300/80 hover:text-white'
                    }
                  `}
                  style={{
                    animationDelay: `${index * 100}ms`
                  }}>
                    <span className="text-2xl transition-transform duration-300 group-hover:scale-125">
                      {item.icon}
                    </span>
                    <div className="flex-1">
                      <div className={`font-medium text-base transition-all duration-300 ${
                        isActive ? 'font-semibold' : 'group-hover:font-medium'
                      }`}>
                        {item.label}
                      </div>
                      <div className="text-xs text-blue-300/60 group-hover:text-blue-200/80 transition-colors duration-300">
                        {item.description}
                      </div>
                    </div>
                    
                    {/* Arrow indicator */}
                    <div className={`
                      w-2 h-2 rounded-full transition-all duration-300
                      ${isActive 
                        ? 'bg-cyan-400 scale-100' 
                        : 'bg-blue-500/50 scale-0 group-hover:scale-100'
                      }
                    `} />
                  </div>
                  
                  {/* Active/Hover Background */}
                  {isActive && (
                    <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-500/30 to-cyan-500/30 border border-blue-400/30" />
                  )}
                  
                  {/* Hover Effect */}
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-500/10 to-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* Glow Effect */}
                  {isActive && (
                    <div className="absolute -inset-1 rounded-xl bg-gradient-to-r from-blue-500/20 via-cyan-500/20 to-indigo-500/20 blur-md animate-pulse" />
                  )}
                </Link>
              );
            })}
          </div>
          
          {/* Footer */}
          <div className="absolute bottom-0 left-0 right-0 p-6 border-t border-blue-500/20">
            <div className="text-center text-xs text-blue-300/60">
              © 2024 Yuta Nishio
            </div>
          </div>
          
          {/* Background Effects */}
          <div className="absolute top-20 right-10 w-32 h-32 bg-blue-500/5 rounded-full blur-3xl" />
          <div className="absolute bottom-20 left-10 w-24 h-24 bg-cyan-500/5 rounded-full blur-2xl" />
        </SheetContent>
      </Sheet>
    </div>
  );
};