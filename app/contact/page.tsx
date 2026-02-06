"use client";

import { ContactForm } from '@/components/organisms/ContactForm';
import { ContactInfo } from '@/components/organisms/ContactInfo';
import { useState, useEffect, useRef } from 'react';

export default function Contact() {
  const [isVisible, setIsVisible] = useState(false);
  const [visibleSections, setVisibleSections] = useState<Set<string>>(new Set());

  const heroRef = useRef(null);
  const infoRef = useRef(null);
  const formRef = useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setVisibleSections(prev => new Set([...prev, entry.target.id]));
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

    [heroRef, infoRef, formRef].forEach(ref => {
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
              <span className="font-mono text-xs text-[#e8b830]/60 tracking-widest">COMM CHANNEL</span>
              <div className="w-12 h-[1px] bg-gradient-to-l from-transparent to-[#1e90ff]/50" />
            </div>
            <h1 className="font-jp text-4xl md:text-6xl font-bold text-white seed-text-glow tracking-wider">
              お問い合わせ
            </h1>
            <p className="text-lg md:text-xl text-[#1e90ff]/60 leading-relaxed">
              プロジェクトのご相談やお問い合わせは、下記フォームよりお気軽にご連絡ください。
              <br className="hidden sm:block" />
              通常2営業日以内にご返信させていただきます。
            </p>
          </div>
        </section>

        {/* Contact Info */}
        <section ref={infoRef} id="info" className="mb-24">
          <div className={`transition-all duration-1000 transform ${visibleSections.has('info') ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
            <div className="flex items-center gap-3 mb-8">
              <div className="w-8 h-[1px] bg-[#1e90ff]/30" />
              <span className="font-mono text-xs text-[#e8b830]/50 tracking-wider">CONTACT DATA</span>
              <div className="flex-1 h-[1px] bg-[#1e90ff]/10" />
            </div>
            <ContactInfo />
          </div>
        </section>

        {/* Contact Form */}
        <section ref={formRef} id="form">
          <div className={`transition-all duration-1000 transform ${visibleSections.has('form') ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
            <div className="flex items-center gap-3 mb-8">
              <div className="w-8 h-[1px] bg-[#1e90ff]/30" />
              <span className="font-mono text-xs text-[#e8b830]/50 tracking-wider">TRANSMISSION FORM</span>
              <div className="flex-1 h-[1px] bg-[#1e90ff]/10" />
            </div>
            <ContactForm />
          </div>
        </section>
      </div>
    </div>
  );
}
