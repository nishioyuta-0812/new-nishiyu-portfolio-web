'use client';

import { Logo } from '@/components/atoms/Logo';
import Link from 'next/link';
import { FaGithub } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { SiGmail } from "react-icons/si";

const socialLinks = [
  { icon: FaGithub, href: 'https://github.com/nishioyuta-0812', label: 'GitHub' },
  { icon: BsTwitterX, href: 'https://x.com/yutakun_27', label: 'X' },
  { icon: SiGmail, href: 'mailto:yutanishi0812@gmail.com', label: 'Email' },
];

export const Footer = () => {
  return (
    <footer className="relative border-t border-[#1e90ff]/10 bg-[#060a14]/98 overflow-hidden">
      {/* Background grid pattern */}
      <div className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(30, 144, 255, 0.5) 1px, transparent 1px),
            linear-gradient(90deg, rgba(30, 144, 255, 0.5) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px'
        }}
      />

      {/* Ambient glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[1px] bg-gradient-to-r from-transparent via-[#1e90ff]/30 to-transparent" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 md:py-12 relative z-10">
        <div className="flex flex-col items-center gap-8 md:flex-row md:justify-between">
          {/* Left: Logo + Status */}
          <div className="flex flex-col items-center gap-3 md:items-start">
            <div className="flex items-center gap-3">
              <Logo />
              <div className="flex flex-col">
                <span className="font-bold text-lg tracking-wider bg-gradient-to-r from-[#1e90ff] to-[#00bfff] bg-clip-text text-transparent">
                  NISHIYU
                </span>
                <span className="text-[10px] font-mono text-[#1e90ff]/40 tracking-widest">
                  PORTFOLIO v2.0
                </span>
              </div>
            </div>
            <p className="text-xs text-[#1e90ff]/30 font-mono">
              Built with Next.js &amp; Tailwind CSS
            </p>
          </div>

          {/* Right: Social Links */}
          <div className="flex gap-4">
            {socialLinks.map((link) => {
              const Icon = link.icon;
              return (
                <a
                  key={link.href}
                  href={link.href}
                  className="group relative p-2.5 rounded border border-[#1e90ff]/15 bg-[#0a0f1e]/60 text-[#1e90ff]/50 hover:text-[#1e90ff] hover:border-[#1e90ff]/40 transition-all duration-300 hover:shadow-[0_0_15px_rgba(30,144,255,0.15)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1e90ff]/60"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Icon className="h-4 w-4 transition-transform duration-300 group-hover:scale-110" />
                  <span className="sr-only">{link.label}</span>
                </a>
              );
            })}
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-8 pt-6 border-t border-[#1e90ff]/10">
          <div className="flex flex-col items-center gap-2 sm:flex-row sm:justify-between">
            <p className="text-xs text-[#1e90ff]/40 font-mono">
              © {new Date().getFullYear()} Yuta Nishio. All rights reserved.
            </p>
            <div className="flex items-center gap-2 text-[10px] font-mono text-[#1e90ff]/35">
              <div className="w-1 h-1 rounded-full bg-green-500/60" />
              <span>ALL SYSTEMS NOMINAL</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
