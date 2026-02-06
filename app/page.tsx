"use client";

import { Button } from '@/components/ui/button';
import { Code2, FileText, Laptop, Mail, Briefcase, Star } from 'lucide-react';
import { useState, useEffect, useRef, useCallback } from 'react';

const skills = [
  { name: 'フロントエンド開発', icon: Laptop, description: 'React, Next.js, Vue, Nuxt.js, TypeScript', code: 'FE-001' },
  { name: 'バックエンド開発', icon: Code2, description: 'Node.js, Kotlin, Go, SQL', code: 'BE-002' },
  { name: 'プロジェクト管理', icon: Briefcase, description: 'アジャイル開発, Git', code: 'PM-003' },
  { name: '技術文書作成', icon: FileText, description: '設計書, API仕様書', code: 'DC-004' },
  { name: 'コミュニケーション', icon: Mail, description: 'チーム協業, 顧客折衝', code: 'CM-005' },
  { name: '品質管理', icon: Star, description: 'テスト設計, コードレビュー', code: 'QA-006' },
];

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);
  const [isBooted, setIsBooted] = useState(false);
  const [bootText, setBootText] = useState('');
  const [visibleSections, setVisibleSections] = useState<Set<string>>(new Set());
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [particles, setParticles] = useState<Array<{id: number, x: number, y: number, size: number, opacity: number, vx: number, vy: number}>>([]);
  const [currentJobTitle, setCurrentJobTitle] = useState('');
  const [jobTitleIndex, setJobTitleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const jobTitles = ['Software Engineer', 'フルスタックエンジニア'];

  const heroRef = useRef(null);
  const skillsRef = useRef(null);
  const ctaRef = useRef(null);
  const cursorRef = useRef<HTMLDivElement>(null);
  const cursorDotRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = useCallback((e: MouseEvent) => {
    setMousePosition({ x: e.clientX, y: e.clientY });
    if (cursorRef.current && cursorDotRef.current) {
      cursorRef.current.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
      cursorDotRef.current.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
    }
  }, []);

  const initializeParticles = useCallback(() => {
    const isMobile = window.innerWidth < 768;
    const particleCount = isMobile ? 15 : 40;
    const newParticles = Array.from({ length: particleCount }, (_, i) => ({
      id: i,
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      size: Math.random() * 2 + 0.5,
      opacity: Math.random() * 0.4 + 0.1,
      vx: (Math.random() - 0.5) * 0.3,
      vy: (Math.random() - 0.5) * 0.3
    }));
    setParticles(newParticles);
  }, []);

  const animateParticles = useCallback(() => {
    setParticles(prev => prev.map(particle => ({
      ...particle,
      x: particle.x + particle.vx > window.innerWidth ? 0 : particle.x + particle.vx < 0 ? window.innerWidth : particle.x + particle.vx,
      y: particle.y + particle.vy > window.innerHeight ? 0 : particle.y + particle.vy < 0 ? window.innerHeight : particle.y + particle.vy
    })));
  }, []);

  // Boot sequence
  useEffect(() => {
    const bootMessages = [
      'INITIALIZING SEED OS v2.0...',
      'LOADING PILOT DATA...',
      'PHASE SHIFT ARMOR: ONLINE',
      'SYSTEM READY',
    ];
    let msgIndex = 0;
    let charIdx = 0;

    const bootInterval = setInterval(() => {
      if (msgIndex < bootMessages.length) {
        if (charIdx <= bootMessages[msgIndex].length) {
          setBootText(bootMessages[msgIndex].substring(0, charIdx));
          charIdx++;
        } else {
          msgIndex++;
          charIdx = 0;
          if (msgIndex >= bootMessages.length) {
            clearInterval(bootInterval);
            setTimeout(() => {
              setIsBooted(true);
              setIsVisible(true);
            }, 300);
          }
        }
      }
    }, 25);

    return () => clearInterval(bootInterval);
  }, []);

  // Typing effect
  useEffect(() => {
    if (!isBooted) return;
    const typingSpeed = isDeleting ? 50 : 80;
    const pauseTime = isDeleting ? 500 : 1200;
    const currentTitle = jobTitles[jobTitleIndex];

    const timer = setTimeout(() => {
      if (!isDeleting) {
        if (charIndex < currentTitle.length) {
          setCurrentJobTitle(currentTitle.substring(0, charIndex + 1));
          setCharIndex(charIndex + 1);
        } else {
          setTimeout(() => setIsDeleting(true), pauseTime);
        }
      } else {
        if (charIndex > 0) {
          setCurrentJobTitle(currentTitle.substring(0, charIndex - 1));
          setCharIndex(charIndex - 1);
        } else {
          setIsDeleting(false);
          setJobTitleIndex((jobTitleIndex + 1) % jobTitles.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [charIndex, isDeleting, jobTitleIndex, jobTitles, isBooted]);

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove);
    initializeParticles();
    const particleAnimation = setInterval(animateParticles, 50);

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setVisibleSections(prev => new Set([...prev, entry.target.id]));
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

    if (heroRef.current) observer.observe(heroRef.current);
    if (skillsRef.current) observer.observe(skillsRef.current);
    if (ctaRef.current) observer.observe(ctaRef.current);

    return () => {
      clearInterval(particleAnimation);
      window.removeEventListener('mousemove', handleMouseMove);
      observer.disconnect();
    };
  }, [handleMouseMove, initializeParticles, animateParticles]);

  return (
    <div className="relative overflow-hidden bg-[#060a14]">
      {/* Boot Screen */}
      {!isBooted && (
        <div className="fixed inset-0 z-[100] bg-[#060a14] flex items-center justify-center">
          <div className="text-center">
            <div className="mb-8 relative">
              <svg viewBox="0 0 100 100" className="w-24 h-24 mx-auto">
                <polygon
                  points="50,5 90,27.5 90,72.5 50,95 10,72.5 10,27.5"
                  fill="none"
                  stroke="#1e90ff"
                  strokeWidth="0.5"
                  opacity="0.5"
                  className="animate-pulse"
                />
                <polygon
                  points="50,20 75,35 75,65 50,80 25,65 25,35"
                  fill="rgba(30, 144, 255, 0.05)"
                  stroke="#1e90ff"
                  strokeWidth="0.5"
                  opacity="0.8"
                />
                <circle cx="50" cy="50" r="5" fill="#1e90ff" opacity="0.8">
                  <animate attributeName="r" values="3;6;3" dur="2s" repeatCount="indefinite" />
                  <animate attributeName="opacity" values="0.5;1;0.5" dur="2s" repeatCount="indefinite" />
                </circle>
              </svg>
            </div>
            <p className="font-mono text-sm text-[#1e90ff]/80 tracking-widest">{bootText}<span className="animate-pulse">_</span></p>
            <div className="mt-4 w-48 mx-auto h-[2px] bg-[#1e90ff]/10 rounded overflow-hidden">
              <div className="h-full bg-gradient-to-r from-[#1e90ff] to-[#e8b830] rounded"
                style={{
                  animation: 'holo-shimmer 1.5s ease-in-out infinite',
                  backgroundSize: '200% 100%'
                }}
              />
            </div>
          </div>
        </div>
      )}

      {/* Custom Cursor (desktop only) */}
      <div
        ref={cursorRef}
        className="fixed top-0 left-0 w-8 h-8 pointer-events-none z-50 mix-blend-difference transition-all duration-100 ease-out hidden md:block"
        style={{
          background: 'radial-gradient(circle, rgba(30, 144, 255, 0.6) 0%, rgba(30, 144, 255, 0.1) 50%, transparent 100%)',
          borderRadius: '50%',
          transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`,
        }}
      />
      <div
        ref={cursorDotRef}
        className="fixed top-0 left-0 w-1.5 h-1.5 pointer-events-none z-50 bg-[#1e90ff] rounded-full transition-all duration-75 ease-out hidden md:block"
        style={{
          transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`,
          boxShadow: '0 0 8px rgba(30, 144, 255, 0.8)'
        }}
      />

      {/* Space particles */}
      <div className="fixed inset-0 pointer-events-none z-10">
        {particles.map(particle => (
          <div
            key={particle.id}
            className="absolute rounded-full"
            style={{
              left: particle.x,
              top: particle.y,
              width: particle.size,
              height: particle.size,
              opacity: particle.opacity,
              backgroundColor: particle.id % 5 === 0 ? '#e8b830' : '#1e90ff',
              boxShadow: `0 0 ${particle.size * 3}px ${particle.id % 5 === 0 ? 'rgba(232,184,48,0.4)' : 'rgba(30,144,255,0.4)'}`,
            }}
          />
        ))}
      </div>

      {/* HUD Grid Background */}
      <div className="fixed inset-0 pointer-events-none opacity-[0.02]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(30, 144, 255, 1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(30, 144, 255, 1) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px'
        }}
      />

      {/* Mouse-reactive gradient */}
      <div className="fixed inset-0 pointer-events-none"
        style={{
          background: `radial-gradient(circle 400px at ${mousePosition.x}px ${mousePosition.y}px, rgba(30, 144, 255, 0.04) 0%, transparent 100%)`,
          transition: 'background 0.3s ease-out'
        }}
      />

      {/* Scanline effect */}
      <div className="fixed inset-0 pointer-events-none z-20 scanline-overlay opacity-20" />

      <div className={`flex flex-col gap-24 py-8 md:py-16 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10 transition-all duration-1000 ${isBooted ? 'opacity-100' : 'opacity-0'}`}
        style={isBooted ? { animation: 'cockpit-boot 1s ease-out' } : {}}
      >
        {/* Hero Section */}
        <section
          ref={heroRef}
          id="hero"
          className="flex flex-col items-center gap-8 text-center min-h-screen justify-center"
        >
          {/* Profile Image with HUD frame */}
          <div
            className={`relative transition-all duration-1000 transform ${
              isVisible ? 'translate-y-0 opacity-100 scale-100' : '-translate-y-20 opacity-0 scale-90'
            }`}
          >
            {/* Target lock frame */}
            <div className="absolute -inset-6">
              <svg viewBox="0 0 200 200" className="w-full h-full" style={{ animation: 'rotate 20s linear infinite' }}>
                <circle cx="100" cy="100" r="90" fill="none" stroke="#1e90ff" strokeWidth="0.3" opacity="0.3" strokeDasharray="10 5" />
              </svg>
            </div>
            <div className="absolute -inset-4">
              <svg viewBox="0 0 180 180" className="w-full h-full" style={{ animation: 'rotate 15s linear infinite reverse' }}>
                <circle cx="90" cy="90" r="80" fill="none" stroke="#e8b830" strokeWidth="0.3" opacity="0.2" strokeDasharray="5 10" />
              </svg>
            </div>

            {/* HUD corner brackets */}
            <div className="absolute -inset-3 pointer-events-none">
              <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-[#1e90ff]/50" />
              <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-[#1e90ff]/50" />
              <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-[#1e90ff]/50" />
              <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-[#1e90ff]/50" />
            </div>

            <div className="relative h-36 w-36 overflow-hidden rounded-full border border-[#1e90ff]/30"
              style={{
                boxShadow: '0 0 30px rgba(30, 144, 255, 0.2), inset 0 0 20px rgba(30, 144, 255, 0.1)',
                animation: 'float 6s ease-in-out infinite'
              }}
            >
              <img src="/images/yutaicon.JPG" alt="Profile" className="w-full h-full object-cover" />
              {/* HUD overlay on image */}
              <div className="absolute inset-0 bg-gradient-to-b from-[#1e90ff]/5 to-transparent" />
            </div>

            {/* Status label */}
            <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 px-3 py-0.5 bg-[#0a0f1e]/80 border border-[#1e90ff]/20 rounded-sm">
              <span className="font-mono text-[10px] text-[#1e90ff]/60 tracking-widest">PILOT VERIFIED</span>
            </div>
          </div>

          {/* Name and Title */}
          <div className={`space-y-4 mt-4 transition-all duration-1000 delay-300 transform ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            <h1 className="font-jp text-4xl md:text-6xl font-bold text-white seed-text-glow tracking-wider">
              西尾 悠太
            </h1>
            <div className="text-xl md:text-2xl font-medium min-h-[2.5rem] flex items-center justify-center gap-2">
              <span className="font-mono text-xs text-[#e8b830]/50">&gt;</span>
              <span className="bg-gradient-to-r from-[#1e90ff] via-[#00bfff] to-[#1e90ff] bg-clip-text text-transparent font-bold tracking-wide">
                {currentJobTitle}
              </span>
              <span className="inline-block w-0.5 h-6 bg-[#1e90ff] ml-1 animate-pulse" />
            </div>
            <p className="mx-auto max-w-[42rem] leading-relaxed text-[#1e90ff]/60 sm:text-lg">
              5年以上のWeb開発経験を持つフルスタックエンジニアです。
              モダンな技術スタックを活用し、ユーザー体験と技術的完成度の両立を追求しています。
            </p>
          </div>

          {/* Action Buttons */}
          <div className={`flex gap-4 transition-all duration-1000 delay-500 transform ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            <a href="/projects">
              <Button
                size="lg"
                className="relative bg-gradient-to-r from-[#1e90ff] to-[#0066cc] hover:from-[#3ba0ff] hover:to-[#1e90ff] text-white border border-[#1e90ff]/30 transition-all duration-500 hover:shadow-[0_0_30px_rgba(30,144,255,0.4)] hover:scale-105 font-medium tracking-wider group overflow-hidden"
              >
                <span className="relative z-10 flex items-center gap-2">
                  <span className="font-mono text-xs opacity-50">▶</span>
                  VIEW PROJECTS
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-[#e8b830]/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
              </Button>
            </a>
            <a href="/contact">
              <Button
                size="lg"
                variant="outline"
                className="border border-[#1e90ff]/30 text-[#1e90ff] hover:bg-[#1e90ff]/10 hover:border-[#1e90ff]/50 transition-all duration-500 hover:shadow-[0_0_20px_rgba(30,144,255,0.2)] hover:scale-105 tracking-wider"
              >
                <span className="flex items-center gap-2">
                  <span className="font-mono text-xs opacity-50">◇</span>
                  CONTACT ME
                </span>
              </Button>
            </a>
          </div>

          {/* Scroll indicator */}
          <div className={`mt-8 transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
            <div className="flex flex-col items-center gap-2">
              <span className="font-mono text-[10px] text-[#1e90ff]/30 tracking-widest">SCROLL</span>
              <div className="w-[1px] h-8 bg-gradient-to-b from-[#1e90ff]/40 to-transparent animate-pulse" />
            </div>
          </div>
        </section>

        {/* Skills Overview - HUD Panel Style */}
        <section ref={skillsRef} id="skills">
          <div className={`mb-12 text-center transition-all duration-1000 transform ${
            visibleSections.has('skills') ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
          }`}>
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-12 h-[1px] bg-gradient-to-r from-transparent to-[#1e90ff]/50" />
              <span className="font-mono text-xs text-[#e8b830]/60 tracking-widest">CAPABILITY MATRIX</span>
              <div className="w-12 h-[1px] bg-gradient-to-l from-transparent to-[#1e90ff]/50" />
            </div>
            <h2 className="font-jp text-3xl font-bold bg-gradient-to-r from-[#1e90ff] to-[#00bfff] bg-clip-text text-transparent">
              主なスキル
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {skills.map((skill, index) => {
              const Icon = skill.icon;
              return (
                <div
                  key={skill.name}
                  className={`group relative rounded border border-[#1e90ff]/15 bg-[#0a0f1e]/60 backdrop-blur-sm p-5 transition-all duration-700 hover:border-[#1e90ff]/40 hover:shadow-[0_0_25px_rgba(30,144,255,0.1)] transform hover:-translate-y-1 ${
                    visibleSections.has('skills') ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
                  }`}
                  style={{
                    transitionDelay: visibleSections.has('skills') ? `${index * 100}ms` : '0ms',
                  }}
                >
                  {/* Card corner accents */}
                  <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-[#1e90ff]/30 group-hover:border-[#e8b830]/50 transition-colors duration-500" />
                  <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-[#1e90ff]/30 group-hover:border-[#e8b830]/50 transition-colors duration-500" />
                  <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-[#1e90ff]/30 group-hover:border-[#e8b830]/50 transition-colors duration-500" />
                  <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-[#1e90ff]/30 group-hover:border-[#e8b830]/50 transition-colors duration-500" />

                  <div className="flex items-start gap-4">
                    <div className="rounded border border-[#1e90ff]/20 p-2.5 bg-[#1e90ff]/5 group-hover:bg-[#1e90ff]/10 group-hover:border-[#1e90ff]/30 transition-all duration-300">
                      <Icon className="h-5 w-5 text-[#1e90ff]/70 group-hover:text-[#1e90ff] transition-colors duration-300" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="font-mono text-[10px] text-[#e8b830]/40">{skill.code}</span>
                      </div>
                      <h3 className="font-jp text-sm font-semibold text-white/90 group-hover:text-white mb-1 transition-colors duration-300">
                        {skill.name}
                      </h3>
                      <p className="text-xs text-[#1e90ff]/40 group-hover:text-[#1e90ff]/60 transition-colors duration-300">
                        {skill.description}
                      </p>
                    </div>
                  </div>

                  {/* Phase shift border on hover */}
                  <div className="absolute inset-0 rounded border border-transparent group-hover:phase-shift-border opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
              );
            })}
          </div>
        </section>

        {/* Call to Action - SEED Awakening Style */}
        <section ref={ctaRef} id="cta" className="text-center">
          <div className={`group relative rounded border border-[#1e90ff]/20 p-10 md:p-16 transition-all duration-700 transform hover:border-[#1e90ff]/30 overflow-hidden ${
            visibleSections.has('cta') ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
          }`}
          style={{
            background: 'linear-gradient(135deg, rgba(10, 15, 30, 0.9) 0%, rgba(30, 144, 255, 0.05) 50%, rgba(10, 15, 30, 0.9) 100%)',
            boxShadow: 'inset 0 1px 0 rgba(30, 144, 255, 0.1), 0 20px 50px rgba(30, 144, 255, 0.05)',
          }}>
            {/* Corner brackets */}
            <div className="absolute top-2 left-2 w-6 h-6 border-t border-l border-[#1e90ff]/30 group-hover:border-[#e8b830]/40 transition-colors duration-500" />
            <div className="absolute top-2 right-2 w-6 h-6 border-t border-r border-[#1e90ff]/30 group-hover:border-[#e8b830]/40 transition-colors duration-500" />
            <div className="absolute bottom-2 left-2 w-6 h-6 border-b border-l border-[#1e90ff]/30 group-hover:border-[#e8b830]/40 transition-colors duration-500" />
            <div className="absolute bottom-2 right-2 w-6 h-6 border-b border-r border-[#1e90ff]/30 group-hover:border-[#e8b830]/40 transition-colors duration-500" />

            <div className="relative z-10">
              <div className="flex items-center justify-center gap-3 mb-4">
                <div className="w-8 h-[1px] bg-[#e8b830]/30" />
                <span className="font-mono text-[10px] text-[#e8b830]/50 tracking-widest">TRANSMISSION</span>
                <div className="w-8 h-[1px] bg-[#e8b830]/30" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold mb-4 font-jp bg-gradient-to-r from-[#1e90ff] to-[#00bfff] bg-clip-text text-transparent">
                プロジェクトに興味がありますか？
              </h2>
              <p className="text-[#1e90ff]/50 mb-8 max-w-lg mx-auto">
                お気軽にご連絡ください。新しい挑戦をお待ちしています。
              </p>
              <a href="/contact">
                <Button
                  className="bg-gradient-to-r from-[#1e90ff] to-[#0066cc] hover:from-[#3ba0ff] hover:to-[#1e90ff] text-white border border-[#1e90ff]/30 transition-all duration-500 hover:shadow-[0_0_30px_rgba(30,144,255,0.3)] hover:scale-105 tracking-wider"
                  size="lg"
                >
                  <span className="flex items-center gap-2">
                    <span className="font-mono text-xs opacity-50">◈</span>
                    お問い合わせ
                  </span>
                </Button>
              </a>
            </div>
          </div>
        </section>
      </div>

      <style jsx>{`
        * { cursor: none; }
        a, button { cursor: none; }
        a:focus-visible, button:focus-visible {
          outline: 2px solid rgba(30, 144, 255, 0.6);
          outline-offset: 2px;
        }
        @media (max-width: 768px) {
          * { cursor: auto; }
          a, button { cursor: pointer; }
        }
        @media (prefers-reduced-motion: reduce) {
          * {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
          }
        }
      `}</style>
    </div>
  );
}
