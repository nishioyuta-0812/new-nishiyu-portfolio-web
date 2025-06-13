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
    
    // Observe sections - only observe refs that exist
    const refsToObserve = [heroRef, recentRef];
    if (blogPosts.length > 0) {
      refsToObserve.push(featuredRef);
    }
    
    refsToObserve.forEach(ref => {
      if (ref.current) observer.observe(ref.current);
    });
    
    return () => {
      clearTimeout(timer);
      observer.disconnect();
    };
  }, [blogPosts.length]);

  return (
    <div className="relative overflow-hidden bg-gray-900">
      <div className="flex flex-col gap-20 py-8 md:py-16 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Hero Section */}
        <section 
          ref={heroRef}
          id="hero"
          className="flex flex-col items-center gap-8 text-center min-h-[50vh] justify-center"
        >
          <div
            className={`absolute inset-0 -z-10 w-screen h-screen bg-cover bg-center bg-no-repeat transition-opacity duration-2000 ${
              isVisible ? 'opacity-100' : 'opacity-0'
            }`}
            style={{
              backgroundImage: 'url("/backgrounds/blog-bg-anime.jpeg")',
              backgroundSize: 'cover',
              backgroundPosition: 'center center',
              left: '50%',
              transform: 'translateX(-50%)',
              width: '100vw'
            }}
          >
            <div className={`absolute inset-0 bg-gradient-to-b from-gray-900/30 via-blue-900/40 to-gray-900/90 transition-opacity duration-2000 delay-500 ${
              isVisible ? 'opacity-100' : 'opacity-0'
            }`} />
          </div>
          
          <div className={`space-y-6 max-w-4xl transition-all duration-1000 delay-300 transform ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
          }`}>
            <h1 className="font-jp text-4xl md:text-6xl font-bold text-white drop-shadow-2xl" style={{
              textShadow: '0 0 20px rgba(59, 130, 246, 0.8), 0 4px 8px rgba(0, 0, 0, 0.5)'
            }}>
              技術ブログ
            </h1>
            <p className="text-xl md:text-2xl text-blue-200/90 leading-relaxed drop-shadow-lg">
              ソフトウェア開発に関する知見、最新技術のトレンド、
              <br className="hidden sm:block" />
              プロジェクトでの経験などを発信しています。
            </p>
          </div>
        </section>

        {/* Featured Post */}
        {blogPosts.length > 0 && (
          <section 
            ref={featuredRef}
            id="featured"
            className="mb-24"
          >
            <div className={`transition-all duration-1000 transform ${
              visibleSections.has('featured') ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
            }`}>
              <div className="mb-8 text-center">
                <h2 className="font-jp mb-6 text-4xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                  注目記事
                </h2>
              </div>
              <BlogCard post={blogPosts[0]} variant="featured" />
            </div>
          </section>
        )}

        {/* Recent Posts */}
        <section 
          ref={recentRef}
          id="recent"
        >
          <div className={`mb-16 text-center transition-all duration-1000 transform ${
            visibleSections.has('recent') ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
          }`}>
            <h2 className="font-jp mb-6 text-4xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              最新の記事
            </h2>
          </div>
          
          {blogPosts.length > 1 ? (
            <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
              {blogPosts.slice(1).map((post, index) => (
                <div
                  key={post.id}
                  className={`transition-all duration-700 transform ${
                    visibleSections.has('recent') ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
                  }`}
                  style={{
                    transitionDelay: visibleSections.has('recent') ? `${index * 150}ms` : '0ms'
                  }}
                >
                  <BlogCard post={post} />
                </div>
              ))}
            </div>
          ) : blogPosts.length === 0 ? (
            <div className={`text-center py-16 transition-all duration-1000 transform ${
              visibleSections.has('recent') ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
            }`}>
              <p className="text-xl text-blue-200/80">
                ブログ記事を準備中です。しばらくお待ちください。
              </p>
            </div>
          ) : (
            <div className={`text-center py-16 transition-all duration-1000 transform ${
              visibleSections.has('recent') ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
            }`}>
              <p className="text-xl text-blue-200/80">
                他の記事も準備中です。しばらくお待ちください。
              </p>
            </div>
          )}
        </section>
      </div>
    </div>
  );
}