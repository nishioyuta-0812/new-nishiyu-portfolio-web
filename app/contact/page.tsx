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
    [heroRef, infoRef, formRef].forEach(ref => {
      if (ref.current) observer.observe(ref.current);
    });
    
    return () => {
      clearTimeout(timer);
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
          className="flex flex-col items-center gap-8 text-center min-h-[50vh] justify-center"
        >
          <div
            className={`absolute inset-0 -z-10 w-screen h-screen bg-cover bg-center bg-no-repeat transition-opacity duration-2000 ${
              isVisible ? 'opacity-100' : 'opacity-0'
            }`}
            style={{
              backgroundImage: 'url("/backgrounds/contact-bg-anime.jpeg")',
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
              お問い合わせ
            </h1>
            <p className="text-xl md:text-2xl text-blue-200/90 leading-relaxed drop-shadow-lg">
              プロジェクトのご相談やお問い合わせは、下記フォームよりお気軽にご連絡ください。
              <br className="hidden sm:block" />
              通常2営業日以内にご返信させていただきます。
            </p>
          </div>
        </section>

        {/* Contact Information */}
        <section 
          ref={infoRef}
          id="info"
          className="mb-24"
        >
          <div className={`transition-all duration-1000 transform ${
            visibleSections.has('info') ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
          }`}>
            <ContactInfo />
          </div>
        </section>

        {/* Contact Form */}
        <section 
          ref={formRef}
          id="form"
        >
          <div className={`transition-all duration-1000 transform ${
            visibleSections.has('form') ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
          }`}>
            <ContactForm />
          </div>
        </section>
      </div>
    </div>
  );
}
