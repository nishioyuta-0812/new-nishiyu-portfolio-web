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
  const [bootAnimDone, setBootAnimDone] = useState(false);
  const [bootText, setBootText] = useState('');
  const [visibleSections, setVisibleSections] = useState<Set<string>>(new Set());
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [particles, setParticles] = useState<Array<{id: number, x: number, y: number, size: number, opacity: number, vx: number, vy: number}>>([]);
  const [currentJobTitle, setCurrentJobTitle] = useState('');
  const [jobTitleIndex, setJobTitleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [seedPhase, setSeedPhase] = useState<'idle' | 'descend' | 'shatter' | 'awaken' | 'power' | 'settle'>('idle');
  const [seedActive, setSeedActive] = useState(false);
  const seedPhaseRef = useRef<string>('idle');

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
    setParticles(prev => prev.map(particle => {
      const phase = seedPhaseRef.current;
      const speedMul = (phase === 'shatter' || phase === 'awaken') ? 4 : phase === 'power' ? 2.5 : phase === 'settle' ? 1.5 : 1;
      const dx = particle.vx * speedMul;
      const dy = particle.vy * speedMul;
      return {
        ...particle,
        x: particle.x + dx > window.innerWidth ? 0 : particle.x + dx < 0 ? window.innerWidth : particle.x + dx,
        y: particle.y + dy > window.innerHeight ? 0 : particle.y + dy < 0 ? window.innerHeight : particle.y + dy
      };
    }));
  }, []);

  const seedTimersRef = useRef<NodeJS.Timeout[]>([]);

  const handleSeedAwakening = useCallback(() => {
    if (seedActive) return;
    setSeedActive(true);

    seedTimersRef.current.forEach(clearTimeout);
    seedTimersRef.current = [];

    // Phase 1: Descend - SEED crystalline falls slowly (0~1200ms)
    setSeedPhase('descend');

    // Phase 2: Shatter - Cracks, explosion, flash, screen shake (1200ms)
    seedTimersRef.current.push(setTimeout(() => {
      setSeedPhase('shatter');
    }, 1200));

    // Phase 3: Awaken - Eye zoom, purple iris, energy waves, text (2200ms)
    seedTimersRef.current.push(setTimeout(() => {
      setSeedPhase('awaken');
    }, 2200));

    // Phase 4: Power - Purple aura sustained (3800ms)
    seedTimersRef.current.push(setTimeout(() => {
      setSeedPhase('power');
    }, 3800));

    // Phase 5: Settle - Fade out (4800ms)
    seedTimersRef.current.push(setTimeout(() => {
      setSeedPhase('settle');
    }, 4800));

    // Reset (5800ms)
    seedTimersRef.current.push(setTimeout(() => {
      setSeedPhase('idle');
      setSeedActive(false);
    }, 5800));
  }, [seedActive]);

  // Sync seedPhase to ref for use in animateParticles
  useEffect(() => {
    seedPhaseRef.current = seedPhase;
  }, [seedPhase]);

  // Cleanup seed timers on unmount
  useEffect(() => {
    return () => {
      seedTimersRef.current.forEach(clearTimeout);
    };
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
              setTimeout(() => setBootAnimDone(true), 1100);
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
    const currentTitle = jobTitles[jobTitleIndex];

    // Determine delay: typing=80ms, deleting=50ms, pause at end=1200ms, pause at start=500ms
    let delay: number;
    if (!isDeleting && charIndex >= currentTitle.length) {
      delay = 1200; // Pause before deleting
    } else if (isDeleting && charIndex <= 0) {
      delay = 500; // Pause before typing next
    } else {
      delay = isDeleting ? 50 : 80;
    }

    const timer = setTimeout(() => {
      if (!isDeleting) {
        if (charIndex < currentTitle.length) {
          setCurrentJobTitle(currentTitle.substring(0, charIndex + 1));
          setCharIndex(charIndex + 1);
        } else {
          setIsDeleting(true);
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
    }, delay);

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
              backgroundColor: (seedPhase === 'shatter' || seedPhase === 'awaken' || seedPhase === 'power')
                ? '#a855f7'
                : seedPhase === 'settle'
                  ? '#c084fc'
                  : particle.id % 5 === 0 ? '#e8b830' : '#1e90ff',
              boxShadow: `0 0 ${particle.size * ((seedPhase === 'shatter' || seedPhase === 'awaken' || seedPhase === 'power') ? 8 : seedPhase === 'settle' ? 5 : 3)}px ${
                (seedPhase === 'shatter' || seedPhase === 'awaken' || seedPhase === 'power')
                  ? 'rgba(168,85,247,0.8)'
                  : seedPhase === 'settle'
                    ? 'rgba(192,132,252,0.5)'
                    : particle.id % 5 === 0 ? 'rgba(232,184,48,0.4)' : 'rgba(30,144,255,0.4)'
              }`,
              transition: 'background-color 0.5s, box-shadow 0.5s',
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

      {/* ===== SEED Awakening Effect - Kira Yamato ===== */}
      {seedPhase !== 'idle' && (
        <>
          {/* Purple veil - darkens screen with purple tint */}
          {(seedPhase === 'descend' || seedPhase === 'shatter' || seedPhase === 'awaken') && (
            <div
              className="fixed inset-0 z-30 pointer-events-none"
              style={{
                background: 'linear-gradient(to bottom, rgba(30, 10, 60, 0.95), rgba(76, 29, 149, 0.85), rgba(30, 10, 60, 0.95))',
                animation: 'screen-purple-veil 4s ease-in-out forwards',
              }}
            />
          )}

          {/* Cinematic vignette - dark edges, bright center focus */}
          {(seedPhase === 'descend' || seedPhase === 'shatter') && (
            <div className="fixed inset-0 z-[31] pointer-events-none"
              style={{
                background: 'radial-gradient(ellipse 50% 50% at center, transparent 0%, rgba(10, 5, 30, 0.7) 100%)',
                animation: 'screen-purple-veil 3s ease-in-out forwards',
              }}
            />
          )}

          {/* Phase 1: Descend - Crystalline SEED falls */}
          {seedPhase === 'descend' && (
            <div className="fixed inset-0 z-40 pointer-events-none flex items-center justify-center">
              <div className="relative" style={{ animation: 'seed-descend 1200ms cubic-bezier(0.25, 0.1, 0.25, 1) forwards' }}>
                {/* Trailing glow particles behind the SEED */}
                {[...Array(8)].map((_, i) => (
                  <div key={`trail-${i}`} className="absolute left-1/2 -translate-x-1/2 rounded-full"
                    style={{
                      width: 4 + i * 2,
                      height: 4 + i * 2,
                      top: -(20 + i * 18),
                      background: `radial-gradient(circle, rgba(233,213,255,${0.6 - i * 0.06}) 0%, rgba(168,85,247,${0.3 - i * 0.03}) 60%, transparent 100%)`,
                      animation: `seed-inner-pulse ${600 + i * 100}ms ease-in-out infinite`,
                      animationDelay: `${i * 80}ms`,
                    }}
                  />
                ))}
                {/* Vertical light trail beam */}
                <div className="absolute left-1/2 -translate-x-1/2 w-[2px] -top-[120px]"
                  style={{
                    height: 100,
                    background: 'linear-gradient(to bottom, transparent, rgba(168,85,247,0.4), rgba(233,213,255,0.2), transparent)',
                    filter: 'blur(1px)',
                  }}
                />
                <svg viewBox="0 0 100 160" className="w-24 h-36 md:w-32 md:h-48" style={{ filter: 'drop-shadow(0 0 20px rgba(168, 85, 247, 0.6)) drop-shadow(0 0 40px rgba(168, 85, 247, 0.3))' }}>
                  <defs>
                    <radialGradient id="seedCrystal" cx="50%" cy="35%" r="65%">
                      <stop offset="0%" stopColor="#f3e8ff" stopOpacity="0.95" />
                      <stop offset="25%" stopColor="#c084fc" stopOpacity="0.9" />
                      <stop offset="50%" stopColor="#a855f7" stopOpacity="0.8" />
                      <stop offset="75%" stopColor="#7c3aed" stopOpacity="0.6" />
                      <stop offset="100%" stopColor="#4c1d95" stopOpacity="0.3" />
                    </radialGradient>
                    <radialGradient id="seedCore" cx="50%" cy="40%" r="30%">
                      <stop offset="0%" stopColor="#ffffff" stopOpacity="0.9" />
                      <stop offset="100%" stopColor="#e9d5ff" stopOpacity="0" />
                    </radialGradient>
                  </defs>
                  {/* Outer glow */}
                  <ellipse cx="50" cy="70" rx="35" ry="55" fill="rgba(168, 85, 247, 0.15)" />
                  {/* Main SEED crystal body - faceted diamond shape */}
                  <path d="M50 8 L72 38 L68 85 L50 152 L32 85 L28 38 Z" fill="url(#seedCrystal)" />
                  {/* Internal facet lines */}
                  <path d="M50 8 L50 152" stroke="#e9d5ff" strokeWidth="0.5" opacity="0.6" />
                  <path d="M28 38 L72 38" stroke="#e9d5ff" strokeWidth="0.4" opacity="0.5" />
                  <path d="M32 85 L68 85" stroke="#e9d5ff" strokeWidth="0.4" opacity="0.5" />
                  <path d="M50 8 L32 85" stroke="#c084fc" strokeWidth="0.3" opacity="0.4" />
                  <path d="M50 8 L68 85" stroke="#c084fc" strokeWidth="0.3" opacity="0.4" />
                  <path d="M50 152 L28 38" stroke="#c084fc" strokeWidth="0.3" opacity="0.3" />
                  <path d="M50 152 L72 38" stroke="#c084fc" strokeWidth="0.3" opacity="0.3" />
                  {/* Cross facets */}
                  <path d="M28 38 L68 85" stroke="#d8b4fe" strokeWidth="0.2" opacity="0.3" />
                  <path d="M72 38 L32 85" stroke="#d8b4fe" strokeWidth="0.2" opacity="0.3" />
                  {/* Inner core glow */}
                  <ellipse cx="50" cy="60" rx="14" ry="22" fill="url(#seedCore)" style={{ animation: 'seed-inner-pulse 800ms ease-in-out infinite' }} />
                  {/* Highlight */}
                  <ellipse cx="43" cy="35" rx="5" ry="10" fill="rgba(255,255,255,0.4)" transform="rotate(-15 43 35)" />
                </svg>
              </div>
            </div>
          )}

          {/* Phase 2: Shatter - Starburst, explosion, fragments, flash, screen shake */}
          {seedPhase === 'shatter' && (
            <div className="fixed inset-0 z-40 pointer-events-none flex items-center justify-center">
              {/* Starburst ray field - primary layer (rendered first = behind everything) */}
              <div className="absolute flex items-center justify-center" style={{ width: '250vmax', height: '250vmax' }}>
                <div style={{
                  width: '100%',
                  height: '100%',
                  background: `
                    repeating-conic-gradient(from 0deg, transparent 0deg, rgba(74,222,128,0.7) 0.9deg, transparent 1.8deg, transparent 5.5deg),
                    repeating-conic-gradient(from 2.5deg, transparent 0deg, rgba(45,212,191,0.5) 0.7deg, transparent 1.4deg, transparent 6.5deg),
                    repeating-conic-gradient(from 4deg, transparent 0deg, rgba(168,85,247,0.55) 0.7deg, transparent 1.4deg, transparent 7deg),
                    repeating-conic-gradient(from 1.5deg, transparent 0deg, rgba(255,255,255,0.7) 0.5deg, transparent 1deg, transparent 8deg),
                    repeating-conic-gradient(from 5.5deg, transparent 0deg, rgba(192,132,252,0.4) 0.6deg, transparent 1.2deg, transparent 9deg)
                  `,
                  WebkitMaskImage: 'radial-gradient(circle, white 0%, white 3%, white 25%, transparent 65%)',
                  maskImage: 'radial-gradient(circle, white 0%, white 3%, white 25%, transparent 65%)',
                  animation: 'starburst-expand 1200ms ease-out forwards',
                  filter: 'blur(0.8px)',
                }} />
              </div>

              {/* Starburst ray field - secondary layer (offset rotation for density) */}
              <div className="absolute flex items-center justify-center" style={{ width: '220vmax', height: '220vmax' }}>
                <div style={{
                  width: '100%',
                  height: '100%',
                  background: `
                    repeating-conic-gradient(from 2deg, transparent 0deg, rgba(74,222,128,0.45) 0.6deg, transparent 1.2deg, transparent 7deg),
                    repeating-conic-gradient(from 5deg, transparent 0deg, rgba(232,184,48,0.35) 0.5deg, transparent 1deg, transparent 9deg),
                    repeating-conic-gradient(from 0.5deg, transparent 0deg, rgba(255,255,255,0.4) 0.4deg, transparent 0.8deg, transparent 10deg)
                  `,
                  WebkitMaskImage: 'radial-gradient(circle, white 0%, white 5%, white 20%, transparent 55%)',
                  maskImage: 'radial-gradient(circle, white 0%, white 5%, white 20%, transparent 55%)',
                  animation: 'starburst-expand 1100ms ease-out 50ms forwards',
                  filter: 'blur(1.2px)',
                  opacity: 0,
                }} />
              </div>

              {/* Exploding SEED core */}
              <div className="absolute" style={{ animation: 'seed-explode-core 800ms ease-out forwards' }}>
                <svg viewBox="0 0 100 160" className="w-24 h-36 md:w-32 md:h-48">
                  <defs>
                    <radialGradient id="seedExplode" cx="50%" cy="40%" r="50%">
                      <stop offset="0%" stopColor="#ffffff" stopOpacity="1" />
                      <stop offset="40%" stopColor="#e9d5ff" stopOpacity="0.8" />
                      <stop offset="100%" stopColor="#a855f7" stopOpacity="0" />
                    </radialGradient>
                  </defs>
                  {/* Crack lines appearing */}
                  <path d="M50 30 L42 50 L33 68 L26 85" stroke="#fff" strokeWidth="2" fill="none"
                    strokeDasharray="80" style={{ animation: 'seed-crack-draw 300ms ease-out forwards' }} />
                  <path d="M50 30 L58 48 L67 65 L74 82" stroke="#fff" strokeWidth="2" fill="none"
                    strokeDasharray="80" style={{ animation: 'seed-crack-draw 300ms ease-out 50ms forwards' }} />
                  <path d="M38 42 L50 50 L62 45" stroke="#e9d5ff" strokeWidth="1.5" fill="none"
                    strokeDasharray="40" style={{ animation: 'seed-crack-draw 250ms ease-out 100ms forwards' }} />
                  <path d="M35 70 L50 80 L65 72" stroke="#e9d5ff" strokeWidth="1.5" fill="none"
                    strokeDasharray="40" style={{ animation: 'seed-crack-draw 250ms ease-out 150ms forwards' }} />
                  {/* Glowing core */}
                  <ellipse cx="50" cy="60" rx="25" ry="40" fill="url(#seedExplode)" />
                </svg>
              </div>

              {/* Crystal fragments flying outward (on top of rays) */}
              {[...Array(20)].map((_, i) => {
                const angle = (i / 20) * Math.PI * 2 + (i % 3) * 0.2;
                const dist = 200 + (i % 4) * 100;
                const fragColors = ['#f3e8ff,#a855f7,#7c3aed', '#d1fae5,#4ade80,#059669', '#e0e7ff,#a5b4fc,#6366f1', '#fef3c7,#fbbf24,#d97706', '#f3e8ff,#c084fc,#7c3aed'];
                return (
                  <div
                    key={`frag-${i}`}
                    className="absolute"
                    style={{
                      width: 3 + (i % 5) * 3,
                      height: (4 + (i % 5) * 4) * 1.5,
                      background: `linear-gradient(${(i * 47) % 360}deg, ${fragColors[i % fragColors.length]})`,
                      clipPath: 'polygon(50% 0%, 0% 100%, 100% 80%)',
                      animation: `fragment-fly ${600 + (i % 4) * 150}ms ease-out ${(i % 7) * 30}ms forwards`,
                      '--fx': `${Math.cos(angle) * dist}px`,
                      '--fy': `${Math.sin(angle) * dist}px`,
                      '--fr': `${(i % 2 === 0 ? 1 : -1) * (360 + (i % 5) * 180)}deg`,
                    } as React.CSSProperties}
                  />
                );
              })}

              {/* Warm amber halo around core */}
              <div className="absolute rounded-full" style={{
                width: '30vmin',
                height: '30vmin',
                background: 'radial-gradient(circle, rgba(255,230,150,0.5) 0%, rgba(232,184,48,0.3) 30%, rgba(255,200,100,0.1) 60%, transparent 100%)',
                filter: 'blur(10px)',
                animation: 'core-glow-sustain 1200ms ease-out forwards',
              }} />

              {/* Super bright core glow - sustained brightness */}
              <div className="absolute rounded-full" style={{
                width: '50vmin',
                height: '50vmin',
                background: 'radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(255,255,255,0.95) 12%, rgba(233,213,255,0.6) 30%, rgba(168,85,247,0.25) 50%, transparent 100%)',
                filter: 'blur(6px)',
                animation: 'core-glow-sustain 1200ms ease-out forwards',
              }} />

              {/* Horizontal cinematic flash lines */}
              <div className="absolute w-[200vw] h-[2px] left-[-50vw]"
                style={{
                  background: 'linear-gradient(90deg, transparent 0%, rgba(168,85,247,0.8) 30%, rgba(255,255,255,0.9) 50%, rgba(168,85,247,0.8) 70%, transparent 100%)',
                  animation: 'horizontal-flash-line 600ms ease-out forwards',
                }} />
              <div className="absolute w-[200vw] h-[1px] left-[-50vw] top-[calc(50%-20px)]"
                style={{
                  background: 'linear-gradient(90deg, transparent 0%, rgba(192,132,252,0.5) 40%, rgba(192,132,252,0.5) 60%, transparent 100%)',
                  animation: 'horizontal-flash-line 500ms ease-out 100ms forwards',
                }} />
              <div className="absolute w-[200vw] h-[1px] left-[-50vw] top-[calc(50%+20px)]"
                style={{
                  background: 'linear-gradient(90deg, transparent 0%, rgba(192,132,252,0.5) 40%, rgba(192,132,252,0.5) 60%, transparent 100%)',
                  animation: 'horizontal-flash-line 500ms ease-out 100ms forwards',
                }} />

              {/* Blinding white-purple flash */}
              <div className="fixed inset-0 z-10"
                style={{
                  background: 'radial-gradient(circle at center, rgba(255,255,255,1) 0%, rgba(233,213,255,0.9) 30%, rgba(168,85,247,0.6) 60%, rgba(76,29,149,0.3) 100%)',
                  animation: 'white-purple-flash 1000ms ease-out forwards',
                }} />

              {/* Screen edge impact flash - purple border glow */}
              <div className="fixed inset-0 z-10 pointer-events-none"
                style={{
                  boxShadow: 'inset 0 0 80px rgba(168,85,247,0.8), inset 0 0 160px rgba(124,58,237,0.4), inset 0 0 240px rgba(76,29,149,0.2)',
                  animation: 'white-purple-flash 800ms ease-out forwards',
                }} />
            </div>
          )}

          {/* Phase 3: Awaken - Starburst afterglow + Energy shockwaves + SEED text */}
          {seedPhase === 'awaken' && (
            <div className="fixed inset-0 z-40 pointer-events-none flex items-center justify-center">
              {/* Starburst afterglow - fading rays from shatter */}
              <div className="absolute flex items-center justify-center" style={{ width: '200vmax', height: '200vmax' }}>
                <div style={{
                  width: '100%',
                  height: '100%',
                  background: `
                    repeating-conic-gradient(from 6deg, transparent 0deg, rgba(168,85,247,0.3) 0.6deg, transparent 1.2deg, transparent 8deg),
                    repeating-conic-gradient(from 2deg, transparent 0deg, rgba(255,255,255,0.2) 0.4deg, transparent 0.8deg, transparent 10deg)
                  `,
                  WebkitMaskImage: 'radial-gradient(circle, transparent 3%, white 8%, white 20%, transparent 55%)',
                  maskImage: 'radial-gradient(circle, transparent 3%, white 8%, white 20%, transparent 55%)',
                  animation: 'starburst-sustain 1.5s ease-out forwards',
                  filter: 'blur(1px)',
                }} />
              </div>

              {/* Multiple energy shockwaves */}
              {[...Array(6)].map((_, i) => (
                <div
                  key={`wave-${i}`}
                  className="absolute w-32 h-32 rounded-full"
                  style={{
                    border: `${2 - i * 0.2}px solid rgba(168, 85, 247, ${0.7 - i * 0.08})`,
                    animation: `energy-shockwave ${1200 + i * 100}ms ease-out ${i * 200}ms forwards`,
                    opacity: 0,
                  }}
                />
              ))}

              {/* Purple atmospheric glow */}
              <div className="absolute w-[80vw] h-[80vh] rounded-full"
                style={{
                  background: 'radial-gradient(ellipse, rgba(168,85,247,0.15) 0%, rgba(124,58,237,0.05) 50%, transparent 70%)',
                  animation: 'purple-afterglow 1.5s ease-out forwards',
                }} />

              {/* SEED text */}
              <div className="absolute z-50" style={{ animation: 'seed-text-reveal 1.5s ease-in-out forwards' }}>
                <p className="font-mono text-lg md:text-2xl font-black tracking-[0.3em]"
                  style={{
                    color: '#e9d5ff',
                    textShadow: '0 0 20px rgba(168,85,247,0.8), 0 0 40px rgba(168,85,247,0.4), 0 0 80px rgba(124,58,237,0.3), 0 0 120px rgba(76,29,149,0.2)',
                  }}>
                  S E E D
                </p>
              </div>
            </div>
          )}

          {/* Phase 4: Power - Sustained pulsing purple aura */}
          {seedPhase === 'power' && (
            <div className="fixed inset-0 z-30 pointer-events-none flex items-center justify-center">
              {/* Pulsing atmospheric purple */}
              <div className="absolute w-[70vw] h-[70vh] rounded-full"
                style={{
                  background: 'radial-gradient(ellipse, rgba(168,85,247,0.12) 0%, rgba(124,58,237,0.04) 50%, transparent 70%)',
                  animation: 'purple-afterglow 1s ease-out forwards',
                }} />
              {/* Slow-expanding secondary ring */}
              <div className="absolute w-40 h-40 rounded-full border border-[#a855f7]/20"
                style={{ animation: 'energy-shockwave 1.5s ease-out forwards', opacity: 0 }} />
            </div>
          )}

          {/* Phase 5: Settle */}
          {seedPhase === 'settle' && (
            <div className="fixed inset-0 z-30 pointer-events-none flex items-center justify-center">
              <div className="absolute w-96 h-96 rounded-full"
                style={{
                  background: 'radial-gradient(circle, rgba(168,85,247,0.1) 0%, transparent 70%)',
                  animation: 'purple-afterglow 1s ease-out forwards',
                }} />
            </div>
          )}
        </>
      )}

      <div className={`flex flex-col gap-24 py-8 md:py-16 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10 transition-all duration-1000 ${isBooted ? 'opacity-100' : 'opacity-0'}`}
        style={
          seedPhase === 'shatter'
            ? { animation: 'screen-shake 800ms ease-out' }
            : isBooted && !bootAnimDone
              ? { animation: 'cockpit-boot 1s ease-out' }
              : {}
        }
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
            <div className="absolute -inset-6 transition-all duration-500">
              <svg viewBox="0 0 200 200" className="w-full h-full" style={{
                animation: `rotate ${seedPhase === 'shatter' || seedPhase === 'awaken' ? '2s' : seedPhase === 'power' ? '4s' : '20s'} linear infinite`,
              }}>
                <circle cx="100" cy="100" r="90" fill="none"
                  stroke={seedPhase !== 'idle' && seedPhase !== 'settle' ? '#a855f7' : '#1e90ff'}
                  strokeWidth={seedPhase === 'shatter' || seedPhase === 'awaken' ? '0.8' : '0.3'}
                  opacity={seedPhase === 'shatter' || seedPhase === 'awaken' ? '0.7' : seedPhase === 'power' ? '0.5' : '0.3'}
                  strokeDasharray="10 5" />
              </svg>
            </div>
            <div className="absolute -inset-4 transition-all duration-500">
              <svg viewBox="0 0 180 180" className="w-full h-full" style={{
                animation: `rotate ${seedPhase === 'shatter' || seedPhase === 'awaken' ? '1.5s' : seedPhase === 'power' ? '3s' : '15s'} linear infinite reverse`,
              }}>
                <circle cx="90" cy="90" r="80" fill="none"
                  stroke={seedPhase !== 'idle' && seedPhase !== 'settle' ? '#c084fc' : '#e8b830'}
                  strokeWidth={seedPhase === 'shatter' || seedPhase === 'awaken' ? '0.8' : '0.3'}
                  opacity={seedPhase === 'shatter' || seedPhase === 'awaken' ? '0.6' : seedPhase === 'power' ? '0.4' : '0.2'}
                  strokeDasharray="5 10" />
              </svg>
            </div>

            {/* HUD corner brackets */}
            <div className="absolute -inset-3 pointer-events-none">
              {(['top-0 left-0 border-t-2 border-l-2', 'top-0 right-0 border-t-2 border-r-2', 'bottom-0 left-0 border-b-2 border-l-2', 'bottom-0 right-0 border-b-2 border-r-2'] as const).map((pos, i) => (
                <div key={i} className={`absolute w-4 h-4 ${pos} transition-colors duration-500 ${
                  seedPhase === 'shatter' || seedPhase === 'awaken' || seedPhase === 'power'
                    ? 'border-[#a855f7]/80' : 'border-[#1e90ff]/50'
                }`} />
              ))}
            </div>

            <div
              className="relative h-36 w-36 overflow-hidden rounded-full border cursor-pointer active:scale-95 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#a855f7]/60"
              role="button"
              tabIndex={0}
              aria-label="SEED覚醒エフェクトを発動"
              onClick={handleSeedAwakening}
              onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); handleSeedAwakening(); } }}
              style={{
                borderColor: (seedPhase === 'shatter' || seedPhase === 'awaken' || seedPhase === 'power')
                  ? 'rgba(168, 85, 247, 0.7)'
                  : seedPhase === 'settle'
                    ? 'rgba(168, 85, 247, 0.25)'
                    : 'rgba(30, 144, 255, 0.3)',
                boxShadow: (seedPhase === 'awaken' || seedPhase === 'power')
                  ? undefined
                  : seedPhase === 'settle'
                    ? '0 0 40px rgba(168, 85, 247, 0.15)'
                    : '0 0 30px rgba(30, 144, 255, 0.2), inset 0 0 20px rgba(30, 144, 255, 0.1)',
                animation: (seedPhase === 'awaken' || seedPhase === 'power')
                  ? 'avatar-purple-aura 2s ease-out forwards'
                  : seedPhase === 'shatter'
                    ? 'avatar-seed-zoom 1s ease-out forwards'
                    : 'float 6s ease-in-out infinite',
                transition: 'border-color 0.5s, box-shadow 0.5s',
              }}
            >
              <img src="/images/yutaicon.JPG" alt="Profile" className="w-full h-full object-cover" />
              {/* Purple iris overlay during awakening */}
              <div className={`absolute inset-0 transition-all duration-500 ${
                seedPhase === 'shatter' || seedPhase === 'awaken'
                  ? 'bg-[#a855f7]/25'
                  : seedPhase === 'power'
                    ? 'bg-[#a855f7]/10'
                    : 'bg-gradient-to-b from-[#1e90ff]/5 to-transparent'
              }`} style={
                (seedPhase === 'awaken') ? { animation: 'iris-purple-overlay 1.5s ease-out forwards' } : {}
              } />
            </div>

            {/* Status label */}
            <div className={`absolute -bottom-6 left-1/2 -translate-x-1/2 px-3 py-0.5 bg-[#0a0f1e]/80 border rounded-sm transition-all duration-500 ${
              seedPhase === 'shatter' || seedPhase === 'awaken' || seedPhase === 'power'
                ? 'border-[#a855f7]/50'
                : 'border-[#1e90ff]/20'
            }`}>
              <span className={`font-mono text-[10px] tracking-widest transition-colors duration-500 ${
                seedPhase === 'shatter' || seedPhase === 'awaken' || seedPhase === 'power'
                  ? 'text-[#c084fc]'
                  : 'text-[#1e90ff]/60'
              }`}>
                {seedPhase === 'shatter' || seedPhase === 'awaken' || seedPhase === 'power' ? 'SEED MODE' : 'PILOT VERIFIED'}
              </span>
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
              <span className="inline-block w-0.5 h-6 bg-[#1e90ff] ml-1 animate-[cursor-blink_1s_step-end_infinite]" />
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
