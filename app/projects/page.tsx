"use client";

import { ProjectCard } from '@/components/molecules/ProjectCard';
import { ProjectsCallToAction } from '@/components/organisms/ProjectsCallToAction';
import { useState, useEffect, useRef } from 'react';

const projects = [
  {
    title: '謎解き情報サイトの開発',
    description: '謎解き情報サイト(ナゾヒロバ)の開発・運用を担当。',
    image: 'https://images.ctfassets.net/abbf825q640s/5x9JQvCTor3XfYxA52ctQC/1c3c4309a301b5e5bad2f008058c050b/ogp.png',
    tags: ['Nuxt.js', 'TypeScript', 'firebase', 'Supabase'],
    period: '2022.08 - 現在',
    role: 'フルスタックエンジニア',
    points: ['Nuxt.jsを使用したフロントエンド開発', 'Nuxt2からNuxt3への移行'],
    links: { demo: 'https://nazohiroba.com/' },
  },
  {
    title: 'スマホアプリゲームの開発',
    description: 'スマホアプリゲーム Tokotyuの開発を担当。※現在は入手不可',
    image: 'https://images.ctfassets.net/8xh65zd1fi2o/3qQSeZy3I7oH2qwaahWqqm/0f44810aa3f255d461702285f5124826/____________.png',
    tags: ['Unity', 'C#'],
    period: '2022.10 - 2023.03',
    role: 'フルスタックエンジニア',
    points: ['Unityを使用したゲーム開発', 'C#を使用したゲームロジックの実装'],
    links: {},
  },
];

export default function Projects() {
  const [isVisible, setIsVisible] = useState(false);
  const [visibleSections, setVisibleSections] = useState<Set<string>>(new Set());

  const heroRef = useRef(null);
  const projectsRef = useRef(null);
  const ctaRef = useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setVisibleSections(prev => new Set([...prev, entry.target.id]));
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

    [heroRef, projectsRef, ctaRef].forEach(ref => {
      if (ref.current) observer.observe(ref.current);
    });

    return () => { clearTimeout(timer); observer.disconnect(); };
  }, []);

  return (
    <div className="relative overflow-hidden bg-[#060a14]">
      <div className="fixed inset-0 pointer-events-none opacity-[0.02]"
        style={{
          backgroundImage: `linear-gradient(rgba(30, 144, 255, 1) 1px, transparent 1px), linear-gradient(90deg, rgba(30, 144, 255, 1) 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }}
      />

      <div className="flex flex-col gap-20 py-8 md:py-16 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Hero */}
        <section ref={heroRef} id="hero" className="flex flex-col items-center gap-8 text-center min-h-[50vh] justify-center">
          <div className={`space-y-6 max-w-4xl transition-all duration-1000 delay-300 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-12 h-[1px] bg-gradient-to-r from-transparent to-[#1e90ff]/50" />
              <span className="font-mono text-xs text-[#e8b830]/60 tracking-widest">MISSION ARCHIVE</span>
              <div className="w-12 h-[1px] bg-gradient-to-l from-transparent to-[#1e90ff]/50" />
            </div>
            <h1 className="font-jp text-4xl md:text-6xl font-bold text-white seed-text-glow tracking-wider">
              プロジェクト
            </h1>
            <p className="text-lg md:text-xl text-[#1e90ff]/60 leading-relaxed">
              これまでに手がけた主要なプロジェクトをご紹介します。
              <br className="hidden sm:block" />
              各プロジェクトで技術的な課題解決と価値提供にこだわってきました。
            </p>
          </div>
        </section>

        {/* Projects */}
        <section ref={projectsRef} id="projects" className="space-y-8 mb-24">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`transition-all duration-700 transform ${visibleSections.has('projects') ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}
              style={{ transitionDelay: visibleSections.has('projects') ? `${index * 200}ms` : '0ms' }}
            >
              <ProjectCard project={project} />
            </div>
          ))}
        </section>

        {/* CTA */}
        <section ref={ctaRef} id="cta">
          <div className={`transition-all duration-1000 transform ${visibleSections.has('cta') ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
            <ProjectsCallToAction />
          </div>
        </section>
      </div>
    </div>
  );
}
