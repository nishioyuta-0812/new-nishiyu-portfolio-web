'use client';

import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu, X } from 'lucide-react';
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
            className="relative w-10 h-10 rounded-sm bg-[#0a0f1e]/60 backdrop-blur-sm border border-[#1e90ff]/20 hover:bg-[#1e90ff]/10 hover:border-[#1e90ff]/40 transition-all duration-300"
          >
            <div className="relative w-6 h-6">
              <Menu className={`h-5 w-5 text-[#1e90ff]/70 transition-all duration-300 ${isOpen ? 'rotate-90 opacity-0' : 'rotate-0 opacity-100'}`} />
              <X className={`absolute top-0 left-0.5 h-4 w-4 text-[#1e90ff]/70 transition-all duration-300 ${isOpen ? 'rotate-0 opacity-100' : '-rotate-90 opacity-0'}`} />
            </div>
            <span className="sr-only">メニューを開く</span>
          </Button>
        </SheetTrigger>

        <SheetContent
          side="right"
          className="w-72 bg-[#060a14]/98 backdrop-blur-xl border-l border-[#1e90ff]/15 p-0"
        >
          {/* Header */}
          <div className="p-6 border-b border-[#1e90ff]/10">
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 rounded-full bg-[#e8b830]/60" />
              <span className="font-mono text-xs text-[#e8b830]/50 tracking-widest">NAVIGATION</span>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex flex-col gap-1 p-4">
            {navItems.map((item) => {
              const isActive = pathname === item.href;

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="group relative"
                >
                  <div className={`
                    relative z-10 flex items-center gap-4 px-4 py-3 rounded-sm transition-all duration-300
                    ${isActive
                      ? 'bg-[#1e90ff]/10 border border-[#1e90ff]/20'
                      : 'hover:bg-[#1e90ff]/5'
                    }
                  `}>
                    <span className={`font-mono text-[10px] ${isActive ? 'text-[#e8b830]/60' : 'text-[#1e90ff]/30'}`}>
                      {item.code}
                    </span>
                    <div className="flex-1">
                      <div className={`font-mono text-sm tracking-wider transition-all duration-300 ${
                        isActive ? 'text-[#1e90ff]' : 'text-[#1e90ff]/50 group-hover:text-[#1e90ff]/80'
                      }`}>
                        {item.label}
                      </div>
                    </div>

                    {/* Active indicator */}
                    {isActive && (
                      <div className="w-1.5 h-1.5 rounded-full bg-[#1e90ff]/80" />
                    )}
                  </div>
                </Link>
              );
            })}
          </div>

          {/* Footer */}
          <div className="absolute bottom-0 left-0 right-0 p-6 border-t border-[#1e90ff]/10">
            <div className="flex items-center justify-center gap-2">
              <div className="w-1 h-1 rounded-full bg-[#1e90ff]/30" />
              <span className="text-center font-mono text-[10px] text-[#1e90ff]/30 tracking-wider">
                SEED OS v2.0
              </span>
              <div className="w-1 h-1 rounded-full bg-[#1e90ff]/30" />
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
};
