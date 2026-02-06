"use client";

import { BlogCard } from '@/components/organisms/BlogCard';
import { BlogPost } from '@/lib/contentful';
import { useState, useEffect, useRef } from 'react';

interface BlogPageLayoutProps {
  blogPosts: BlogPost[];
}

export default function BlogPageLayout({ blogPosts }: BlogPageLayoutProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [visibleSections, setVisibleSections] = useState<Set<string>>(new Set());

  const heroRef = useRef(null);
  const featuredRef = useRef(null);
  const recentRef = useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setVisibleSections(prev => new Set([...prev, entry.target.id]));
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

    const refsToObserve = [heroRef, recentRef];
    if (blogPosts.length > 0) {
      refsToObserve.push(featuredRef);
    }

    refsToObserve.forEach(ref => {
      if (ref.current) observer.observe(ref.current);
    });

    return () => { clearTimeout(timer); observer.disconnect(); };
  }, [blogPosts.length]);

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
              <span className="font-mono text-xs text-[#e8b830]/60 tracking-widest">DATA LOG</span>
              <div className="w-12 h-[1px] bg-gradient-to-l from-transparent to-[#1e90ff]/50" />
            </div>
            <h1 className="font-jp text-4xl md:text-6xl font-bold text-white seed-text-glow tracking-wider">
              技術ブログ
            </h1>
            <p className="text-lg md:text-xl text-[#1e90ff]/60 leading-relaxed">
              ソフトウェア開発に関する知見、最新技術のトレンド、
              <br className="hidden sm:block" />
              プロジェクトでの経験などを発信しています。
            </p>
          </div>
        </section>

        {/* Featured Post */}
        {blogPosts.length > 0 && (
          <section ref={featuredRef} id="featured" className="mb-24">
            <div className={`transition-all duration-1000 transform ${visibleSections.has('featured') ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
              <div className="flex items-center gap-3 mb-8">
                <div className="w-8 h-[1px] bg-[#1e90ff]/30" />
                <span className="font-mono text-xs text-[#e8b830]/50 tracking-wider">FEATURED ENTRY</span>
                <div className="flex-1 h-[1px] bg-[#1e90ff]/10" />
              </div>
              <BlogCard post={blogPosts[0]} variant="featured" />
            </div>
          </section>
        )}

        {/* Recent Posts */}
        <section ref={recentRef} id="recent">
          <div className={`mb-12 transition-all duration-1000 transform ${visibleSections.has('recent') ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
            <div className="flex items-center gap-3">
              <div className="w-8 h-[1px] bg-[#1e90ff]/30" />
              <span className="font-mono text-xs text-[#e8b830]/50 tracking-wider">RECENT ENTRIES</span>
              <div className="flex-1 h-[1px] bg-[#1e90ff]/10" />
            </div>
          </div>

          {blogPosts.length > 1 ? (
            <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
              {blogPosts.slice(1).map((post, index) => (
                <div
                  key={post.id}
                  className={`transition-all duration-700 transform ${visibleSections.has('recent') ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}
                  style={{ transitionDelay: visibleSections.has('recent') ? `${index * 150}ms` : '0ms' }}
                >
                  <BlogCard post={post} />
                </div>
              ))}
            </div>
          ) : blogPosts.length === 0 ? (
            <div className={`text-center py-16 transition-all duration-1000 transform ${visibleSections.has('recent') ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
              <p className="text-lg text-[#1e90ff]/40 font-mono">
                NO DATA ENTRIES FOUND
              </p>
              <p className="text-sm text-[#1e90ff]/40 mt-2">
                ブログ記事を準備中です。しばらくお待ちください。
              </p>
            </div>
          ) : (
            <div className={`text-center py-16 transition-all duration-1000 transform ${visibleSections.has('recent') ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
              <p className="text-lg text-[#1e90ff]/40">
                他の記事も準備中です。しばらくお待ちください。
              </p>
            </div>
          )}
        </section>
      </div>
    </div>
  );
}
