'use client';

import { Logo } from '@/components/atoms/Logo';
import Link from 'next/link';
import { FaGithub } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { SiGmail } from "react-icons/si";

const socialLinks = [
  {
    icon: FaGithub,
    href: 'https://github.com/nishioyuta-0812',
    label: 'GitHub',
  },
  {
    icon: BsTwitterX,
    href: 'https://x.com/yutakun_27',
    label: 'X',
  },
  {
    icon: SiGmail,
    href: 'mailto:yutanishi0812@gmail.com',
    label: 'Email',
  },
];

export const Footer = () => {
  return (
    <footer className="relative border-t border-gray-700/50 bg-gray-950/98 backdrop-blur-sm overflow-hidden">
      {/* SF風背景アニメーション */}
      <div className="fixed inset-0 -z-20">
        <div 
          className="absolute inset-0 bg-gradient-to-br from-blue-600/15 via-indigo-600/15 to-cyan-500/15"
          style={{ 
            animation: 'gradientShift 8s ease-in-out infinite',
            backgroundSize: '400% 400%'
          }}
        />
        {/* グリッドパターン */}
        <div className="absolute inset-0 opacity-20" 
             style={{
               backgroundImage: `
                 linear-gradient(rgba(59, 130, 246, 0.3) 1px, transparent 1px),
                 linear-gradient(90deg, rgba(59, 130, 246, 0.3) 1px, transparent 1px)
               `,
               backgroundSize: '50px 50px'
             }} />
        
        {/* 浮遊する光球 */}
        <div className="absolute top-10 left-10 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl animate-pulse"
             style={{ animationDuration: '4s', animationDelay: '0s' }} />
        <div className="absolute top-40 right-20 w-96 h-96 bg-indigo-500/20 rounded-full blur-3xl animate-pulse"
             style={{ animationDuration: '6s', animationDelay: '2s' }} />
        <div className="absolute bottom-20 left-1/3 w-80 h-80 bg-cyan-400/20 rounded-full blur-3xl animate-pulse"
             style={{ animationDuration: '5s', animationDelay: '1s' }} />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col items-center gap-8 py-8 md:flex-row md:justify-between md:py-12 relative z-10">
        <div className="flex flex-col items-center gap-4 md:items-start">
          <div className="transform hover:scale-110 transition-all duration-300">
            <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-blue-300 bg-clip-text text-transparent">
              <Logo />
            </div>
          </div>
          <p className="text-center text-sm text-gray-400/80 md:text-left hover:text-gray-300 transition-colors duration-300">
            Built with Next.js and Tailwind CSS
          </p>
        </div>
        <div className="flex gap-6">
          {socialLinks.map((link, index) => {
            const Icon = link.icon;
            return (
              <a
                key={link.href}
                href={link.href}
                className="group relative p-3 rounded-full border border-gray-700/60 bg-gray-900/60 backdrop-blur-sm text-gray-300 hover:text-blue-300 hover:border-blue-500/50 hover:bg-blue-500/5 transform hover:scale-110 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/20"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  animationDelay: `${index * 0.1}s`
                }}
              >
                <Icon className="h-5 w-5 group-hover:rotate-12 transition-transform duration-300" />
                <span className="sr-only">{link.label}</span>
                
                {/* ホバー時のグロー効果 */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-400/10 to-blue-300/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm -z-10" />
              </a>
            );
          })}
        </div>
      </div>
      
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-8 text-center text-sm text-gray-500/80 relative z-10">
        <div className="border-t border-gray-800/60 pt-6">
          <p className="hover:text-gray-400 transition-colors duration-300">
            © {new Date().getFullYear()} Yuta Nishio. All rights reserved.
          </p>
        </div>
      </div>

      <style jsx>{`
        @keyframes gradientShift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
      `}</style>
    </footer>
  );
};
