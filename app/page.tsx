"use client";

import { Button } from '@/components/ui/button';
import { Code2, FileText, Laptop, Mail, Briefcase, Star } from 'lucide-react';
import { useState, useEffect, useRef, useCallback } from 'react';

const skills = [
  { name: 'フロントエンド開発', icon: Laptop, description: 'React, Next.js, Vue, Nuxt.js,TypeScript' },
  { name: 'バックエンド開発', icon: Code2, description: 'Node.js, Kotlin, Go, SQL' },
  { name: 'プロジェクト管理', icon: Briefcase, description: 'アジャイル開発, Git' },
  { name: '技術文書作成', icon: FileText, description: '設計書, API仕様書' },
  { name: 'コミュニケーション', icon: Mail, description: 'チーム協業, 顧客折衝' },
  { name: '品質管理', icon: Star, description: 'テスト設計, コードレビュー' },
];

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [visibleSections, setVisibleSections] = useState<Set<string>>(new Set());
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [particles, setParticles] = useState<Array<{id: number, x: number, y: number, size: number, opacity: number, vx: number, vy: number}>>([]);
  const [currentJobTitle, setCurrentJobTitle] = useState('');
  const [jobTitleIndex, setJobTitleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  
  const jobTitles = [
    'Software Engineer',
    'フルスタックエンジニア',
  ];
  
  const heroRef = useRef(null);
  const skillsRef = useRef(null);
  const ctaRef = useRef(null);
  const cursorRef = useRef<HTMLDivElement>(null);
  const cursorDotRef = useRef<HTMLDivElement>(null);

  // Mouse tracking for interactive effects
  const handleMouseMove = useCallback((e: MouseEvent) => {
    setMousePosition({ x: e.clientX, y: e.clientY });
    
    if (cursorRef.current && cursorDotRef.current) {
      cursorRef.current.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
      cursorDotRef.current.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
    }
  }, []);

  // Initialize floating particles
  const initializeParticles = useCallback(() => {
    const isMobile = window.innerWidth < 768;
    const particleCount = isMobile ? 20 : 50;
    const newParticles = Array.from({ length: particleCount }, (_, i) => ({
      id: i,
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      size: Math.random() * 3 + 1,
      opacity: Math.random() * 0.5 + 0.1,
      vx: (Math.random() - 0.5) * 0.5,
      vy: (Math.random() - 0.5) * 0.5
    }));
    setParticles(newParticles);
  }, []);

  // Animate particles
  const animateParticles = useCallback(() => {
    setParticles(prev => prev.map(particle => ({
      ...particle,
      x: particle.x + particle.vx > window.innerWidth ? 0 : particle.x + particle.vx < 0 ? window.innerWidth : particle.x + particle.vx,
      y: particle.y + particle.vy > window.innerHeight ? 0 : particle.y + particle.vy < 0 ? window.innerHeight : particle.y + particle.vy
    })));
  }, []);

  // Typing effect for job titles
  useEffect(() => {
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
  }, [charIndex, isDeleting, jobTitleIndex, jobTitles]);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);
    
    // Initialize particles
    initializeParticles();
    const particleAnimation = setInterval(animateParticles, 50);
    
    // Intersection Observer for scroll animations
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setVisibleSections(prev => new Set([...prev, entry.target.id]));
        }
      });
    }, observerOptions);
    
    // Observe sections
    if (heroRef.current) observer.observe(heroRef.current);
    if (skillsRef.current) observer.observe(skillsRef.current);
    if (ctaRef.current) observer.observe(ctaRef.current);
    
    return () => {
      clearTimeout(timer);
      clearInterval(particleAnimation);
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
      observer.disconnect();
    };
  }, [handleMouseMove, initializeParticles, animateParticles]);

  return (
    <div className="relative overflow-hidden bg-gray-900">
      {/* Custom Cursor */}
      <div
        ref={cursorRef}
        className="fixed top-0 left-0 w-8 h-8 pointer-events-none z-50 mix-blend-difference transition-all duration-100 ease-out"
        style={{
          background: 'radial-gradient(circle, rgba(59, 130, 246, 0.8) 0%, rgba(59, 130, 246, 0.2) 50%, transparent 100%)',
          borderRadius: '50%',
          transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`,
          filter: 'blur(1px)'
        }}
      />
      <div
        ref={cursorDotRef}
        className="fixed top-0 left-0 w-2 h-2 pointer-events-none z-50 bg-cyan-400 rounded-full transition-all duration-75 ease-out"
        style={{
          transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`,
          boxShadow: '0 0 10px rgba(34, 211, 238, 0.8)'
        }}
      />
      
      {/* Floating Particles */}
      <div className="fixed inset-0 pointer-events-none z-10">
        {particles.map(particle => (
          <div
            key={particle.id}
            className="absolute w-1 h-1 bg-blue-400 rounded-full"
            style={{
              left: particle.x,
              top: particle.y,
              opacity: particle.opacity,
              transform: `scale(${particle.size})`,
              boxShadow: '0 0 6px rgba(59, 130, 246, 0.6)',
              animation: `twinkle ${Math.random() * 3 + 2}s ease-in-out infinite alternate`
            }}
          />
        ))}
      </div>
      
      {/* Floating Geometric Elements */}
      <div className="fixed inset-0 pointer-events-none z-5 overflow-hidden">
        {/* Large floating ring */}
        <div 
          className="absolute w-96 h-96 border border-blue-400/10 rounded-full"
          style={{
            top: '10%',
            right: '-10%',
            animation: 'float 12s ease-in-out infinite',
            animationDelay: '0s'
          }}
        />
        
        {/* Medium floating square */}
        <div 
          className="absolute w-32 h-32 border border-cyan-400/15 rotate-45"
          style={{
            top: '60%',
            left: '-5%',
            animation: 'float 8s ease-in-out infinite reverse',
            animationDelay: '2s'
          }}
        />
        
        {/* Small floating triangle */}
        <div 
          className="absolute w-0 h-0"
          style={{
            top: '80%',
            right: '20%',
            borderLeft: '30px solid transparent',
            borderRight: '30px solid transparent',
            borderBottom: '52px solid rgba(34, 211, 238, 0.1)',
            animation: 'float 10s ease-in-out infinite',
            animationDelay: '4s'
          }}
        />
        
        {/* Hexagon */}
        <div 
          className="absolute w-24 h-24"
          style={{
            top: '30%',
            left: '80%',
            clipPath: 'polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)',
            background: 'rgba(59, 130, 246, 0.08)',
            border: '1px solid rgba(59, 130, 246, 0.2)',
            animation: 'float 15s ease-in-out infinite reverse',
            animationDelay: '1s'
          }}
        />
      </div>
      
      {/* Dynamic Background Layers */}
      <div className="fixed inset-0 pointer-events-none">
        <div 
          className="absolute inset-0 opacity-30"
          style={{
            background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(59, 130, 246, 0.1) 0%, transparent 50%)`,
            transition: 'background 0.3s ease-out'
          }}
        />
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            background: 'conic-gradient(from 0deg, transparent, rgba(34, 211, 238, 0.1), transparent)',
            transform: `rotate(${scrollY * 0.1}deg)`,
            transformOrigin: 'center'
          }}
        />
      </div>

      <div className="flex flex-col gap-20 py-8 md:py-16 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Hero Section */}
        <section 
          ref={heroRef}
          id="hero"
          className="flex flex-col items-center gap-8 text-center min-h-screen justify-center"
        >
          <div
            className={`absolute inset-0 -z-10 w-screen h-screen bg-cover bg-center bg-no-repeat transition-opacity duration-2000 ${
              isVisible ? 'opacity-100' : 'opacity-0'
            }`}
            style={{
              backgroundImage: 'url("/backgrounds/home-bg-anime.jpeg")',
              backgroundSize: 'cover',
              backgroundPosition: 'center center',
              left: '50%',
              transform: 'translateX(-50%)',
              width: '100vw'
            }}
          >
            <div className={`absolute inset-0 bg-gradient-to-b from-gray-900/40 via-blue-900/30 to-gray-900/60 transition-opacity duration-2000 delay-500 ${
              isVisible ? 'opacity-100' : 'opacity-0'
            }`} />
          </div>
          <div
            className={`relative h-40 w-40 overflow-hidden rounded-full border-4 border-blue-400/40 shadow-2xl shadow-blue-500/30 transition-all duration-1000 transform ${
              isVisible ? 'translate-y-0 opacity-100 scale-100' : '-translate-y-20 opacity-0 scale-90'
            }`}
            style={{
              animation: 'float 6s ease-in-out infinite',
              boxShadow: '0 0 30px rgba(59, 130, 246, 0.5), inset 0 0 20px rgba(59, 130, 246, 0.2)'
            }}
          >
            <img
              src="/images/yutaicon.JPG"
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>
          
          <div className={`space-y-4 transition-all duration-1000 delay-300 transform ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            <h1 className="font-jp text-4xl font-bold text-white drop-shadow-2xl" style={{
              textShadow: '0 0 20px rgba(59, 130, 246, 0.8), 0 4px 8px rgba(0, 0, 0, 0.5)'
            }}>
              西尾 悠太
            </h1>
            <div className="text-2xl font-medium text-blue-200 drop-shadow-xl min-h-[2.5rem] flex items-center justify-center">
              <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-indigo-400 bg-clip-text text-transparent font-bold">
                {currentJobTitle}
              </span>
              <span className="inline-block w-0.5 h-8 bg-cyan-400 ml-1 animate-pulse" />
            </div>
            <p className="mx-auto max-w-[42rem] leading-normal text-blue-100/90 sm:text-xl sm:leading-8 drop-shadow-lg">
              5年以上のWeb開発経験を持つフルスタックエンジニアです。
              モダンな技術スタックを活用し、ユーザー体験と技術的完成度の両立を追求しています。
              チーム開発でのリーダー経験も豊富で、プロジェクトの成功に貢献してきました。
            </p>
          </div>
          
          <div className={`flex gap-6 transition-all duration-1000 delay-500 transform ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            <a href="/projects">
              <Button 
                size="lg" 
                className="relative bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 transform hover:scale-110 transition-all duration-500 shadow-lg hover:shadow-2xl hover:shadow-blue-500/60 border border-blue-400/30 overflow-hidden group"
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = '0 0 30px rgba(59, 130, 246, 0.8), 0 20px 40px rgba(59, 130, 246, 0.4)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = '0 8px 16px rgba(59, 130, 246, 0.3)';
                }}
              >
                <span className="relative z-10">View Projects</span>
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/20 to-blue-400/20 translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500" />
              </Button>
            </a>
            <a href="/contact">
              <Button 
                size="lg" 
                variant="outline" 
                className="relative border-2 border-cyan-400/50 text-cyan-300 hover:bg-cyan-500/20 hover:border-cyan-400 hover:text-cyan-200 transform hover:scale-110 transition-all duration-500 backdrop-blur-sm overflow-hidden group"
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = '0 0 25px rgba(34, 211, 238, 0.6), inset 0 0 20px rgba(34, 211, 238, 0.1)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                <span className="relative z-10">Contact Me</span>
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/10 to-blue-400/10 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
              </Button>
            </a>
          </div>
        </section>

        {/* Skills Overview */}
        <section 
          ref={skillsRef}
          id="skills"
        >
          <h2 className={`text-3xl font-bold text-center mb-12 font-jp bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent transition-all duration-1000 transform ${
            visibleSections.has('skills') ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
          }`}>
            主なスキル
          </h2>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {skills.map((skill, index) => {
              const Icon = skill.icon;
              return (
                <div
                  key={skill.name}
                  className={`group flex flex-col items-center gap-4 rounded-xl border border-blue-500/20 bg-gray-800/60 backdrop-blur-sm p-6 text-center transition-all duration-700 hover:border-blue-400/50 hover:shadow-2xl hover:shadow-blue-500/30 transform hover:-translate-y-2 hover:scale-105 ${
                    visibleSections.has('skills') ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
                  }`}
                  style={{
                    transitionDelay: visibleSections.has('skills') ? `${index * 150}ms` : '0ms',
                    background: 'linear-gradient(145deg, rgba(30, 58, 138, 0.15), rgba(17, 24, 39, 0.8))',
                    boxShadow: 'inset 0 1px 0 rgba(59, 130, 246, 0.1)'
                  }}
                >
                  <div className="rounded-full bg-gradient-to-r from-blue-500/20 to-cyan-500/20 p-3 group-hover:from-blue-400/40 group-hover:to-cyan-400/40 transition-all duration-300 group-hover:rotate-12 group-hover:scale-110 border border-blue-400/30">
                    <Icon className="h-8 w-8 text-blue-400 group-hover:text-cyan-300 transition-colors duration-300" />
                  </div>
                  <div>
                    <h3 className="font-jp text-lg font-medium mb-2 text-blue-200 group-hover:text-cyan-300 transition-colors duration-300">
                      {skill.name}
                    </h3>
                    <p className="text-sm text-blue-300/70 group-hover:text-blue-200/90 transition-colors duration-300">
                      {skill.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Call to Action */}
        <section 
          ref={ctaRef}
          id="cta"
          className="text-center"
        >
          <div className={`relative rounded-3xl backdrop-blur-2xl p-10 md:p-16 border-2 border-blue-400/40 transition-all duration-700 transform hover:scale-105 overflow-hidden ${
            visibleSections.has('cta') ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
          }`}
          style={{
            background: `
              linear-gradient(145deg, 
                rgba(30, 58, 138, 0.2) 0%, 
                rgba(17, 24, 39, 0.9) 30%,
                rgba(6, 78, 59, 0.2) 60%,
                rgba(30, 58, 138, 0.15) 100%
              )
            `,
            boxShadow: `
              inset 0 2px 0 rgba(59, 130, 246, 0.3),
              inset 0 0 60px rgba(34, 211, 238, 0.1),
              0 32px 64px rgba(59, 130, 246, 0.2),
              0 0 0 1px rgba(59, 130, 246, 0.2),
              0 0 100px rgba(34, 211, 238, 0.3)
            `,
            filter: 'drop-shadow(0 0 40px rgba(34, 211, 238, 0.2))'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.borderColor = 'rgba(34, 211, 238, 0.7)';
            e.currentTarget.style.boxShadow = `
              inset 0 2px 0 rgba(34, 211, 238, 0.5),
              inset 0 0 80px rgba(34, 211, 238, 0.2),
              0 40px 80px rgba(34, 211, 238, 0.4),
              0 0 0 2px rgba(34, 211, 238, 0.3),
              0 0 120px rgba(34, 211, 238, 0.5)
            `;
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.borderColor = 'rgba(59, 130, 246, 0.4)';
            e.currentTarget.style.boxShadow = `
              inset 0 2px 0 rgba(59, 130, 246, 0.3),
              inset 0 0 60px rgba(34, 211, 238, 0.1),
              0 32px 64px rgba(59, 130, 246, 0.2),
              0 0 0 1px rgba(59, 130, 246, 0.2),
              0 0 100px rgba(34, 211, 238, 0.3)
            `;
          }}>
            {/* Animated gradient overlay */}
            <div className="absolute inset-0 rounded-3xl opacity-50"
              style={{
                background: 'conic-gradient(from 0deg, transparent, rgba(34, 211, 238, 0.1), transparent)',
                animation: 'rotate 8s linear infinite'
              }}
            />
            
            {/* Content container */}
            <div className="relative z-10">
              <h2 className={`text-2xl font-bold mb-4 font-jp bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent transition-all duration-700 delay-200 transform ${
                visibleSections.has('cta') ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}>
                プロジェクトに興味がありますか？
              </h2>
              <p className={`text-blue-200/80 mb-8 transition-all duration-700 delay-300 transform ${
                visibleSections.has('cta') ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}>
                お気軽にご連絡ください。新しい挑戦をお待ちしています。
              </p>
              <a href="/contact">
                <Button 
                  className={`bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white transform hover:scale-110 transition-all duration-500 delay-400 shadow-lg hover:shadow-xl hover:shadow-blue-500/50 border border-blue-400/30 ${
                    visibleSections.has('cta') ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-10 opacity-0 scale-95'
                  }`}
                  size="lg"
                >
                  お問い合わせ
                </Button>
              </a>
            </div>
          </div>
        </section>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        
        @keyframes gradientShift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        
        @keyframes shimmer {
          0% { background-position: -200% 0; }
          100% { background-position: 200% 0; }
        }
        
        @keyframes twinkle {
          0% { opacity: 0.2; transform: scale(0.8); }
          100% { opacity: 0.8; transform: scale(1.2); }
        }
        
        @keyframes pulse {
          0%, 100% { opacity: 0.4; }
          50% { opacity: 1; }
        }
        
        @keyframes rotate {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        * {
          cursor: none;
        }
        
        a, button {
          cursor: none;
        }
        
        @media (max-width: 768px) {
          * {
            cursor: auto;
          }
          
          a, button {
            cursor: pointer;
          }
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
