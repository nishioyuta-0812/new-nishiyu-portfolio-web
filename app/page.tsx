"use client";

import { Button } from '@/components/ui/button';
import { Code2, FileText, Laptop, Mail, Briefcase, Star } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';

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
  const [visibleSections, setVisibleSections] = useState(new Set());
  
  const heroRef = useRef(null);
  const skillsRef = useRef(null);
  const ctaRef = useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    
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
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
    };
  }, []);

  return (
    <div className="relative overflow-hidden bg-gray-900">

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
            <p className="text-2xl font-medium text-blue-200 drop-shadow-xl">
              <span className="inline-block animate-bounce bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent" style={{ animationDelay: '0s' }}>S</span>
              <span className="inline-block animate-bounce bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent" style={{ animationDelay: '0.1s' }}>o</span>
              <span className="inline-block animate-bounce bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent" style={{ animationDelay: '0.2s' }}>f</span>
              <span className="inline-block animate-bounce bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent" style={{ animationDelay: '0.3s' }}>t</span>
              <span className="inline-block animate-bounce bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent" style={{ animationDelay: '0.4s' }}>w</span>
              <span className="inline-block animate-bounce bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent" style={{ animationDelay: '0.5s' }}>a</span>
              <span className="inline-block animate-bounce bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent" style={{ animationDelay: '0.6s' }}>r</span>
              <span className="inline-block animate-bounce bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent" style={{ animationDelay: '0.7s' }}>e</span>
              <span className="inline-block animate-bounce mx-2" style={{ animationDelay: '0.8s' }}></span>
              <span className="inline-block animate-bounce bg-gradient-to-r from-cyan-400 to-indigo-400 bg-clip-text text-transparent" style={{ animationDelay: '0.9s' }}>E</span>
              <span className="inline-block animate-bounce bg-gradient-to-r from-cyan-400 to-indigo-400 bg-clip-text text-transparent" style={{ animationDelay: '1.0s' }}>n</span>
              <span className="inline-block animate-bounce bg-gradient-to-r from-cyan-400 to-indigo-400 bg-clip-text text-transparent" style={{ animationDelay: '1.1s' }}>g</span>
              <span className="inline-block animate-bounce bg-gradient-to-r from-cyan-400 to-indigo-400 bg-clip-text text-transparent" style={{ animationDelay: '1.2s' }}>i</span>
              <span className="inline-block animate-bounce bg-gradient-to-r from-cyan-400 to-indigo-400 bg-clip-text text-transparent" style={{ animationDelay: '1.3s' }}>n</span>
              <span className="inline-block animate-bounce bg-gradient-to-r from-cyan-400 to-indigo-400 bg-clip-text text-transparent" style={{ animationDelay: '1.4s' }}>e</span>
              <span className="inline-block animate-bounce bg-gradient-to-r from-cyan-400 to-indigo-400 bg-clip-text text-transparent" style={{ animationDelay: '1.5s' }}>e</span>
              <span className="inline-block animate-bounce bg-gradient-to-r from-cyan-400 to-indigo-400 bg-clip-text text-transparent" style={{ animationDelay: '1.6s' }}>r</span>
            </p>
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
                className="bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-blue-500/50 border border-blue-400/30"
              >
                View Projects
              </Button>
            </a>
            <a href="/contact">
              <Button 
                size="lg" 
                variant="outline" 
                className="border-2 border-cyan-400/50 text-cyan-300 hover:bg-cyan-500/10 hover:border-cyan-400 hover:text-cyan-200 transform hover:scale-105 transition-all duration-300 backdrop-blur-sm"
              >
                Contact Me
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
          <div className={`rounded-2xl bg-gradient-to-r from-blue-600/15 via-indigo-600/15 to-cyan-500/15 backdrop-blur-sm p-8 md:p-12 border border-blue-400/30 shadow-2xl hover:shadow-blue-500/30 transition-all duration-700 transform hover:scale-105 ${
            visibleSections.has('cta') ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
          }`}
          style={{
            boxShadow: 'inset 0 1px 0 rgba(59, 130, 246, 0.2), 0 25px 50px rgba(59, 130, 246, 0.15)'
          }}>
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
      `}</style>
    </div>
  );
}
