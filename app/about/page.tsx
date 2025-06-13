"use client";

import { ExperienceCard } from '@/components/molecules/ExperienceCard';
import { ValueCard } from '@/components/molecules/ValueCard';
import { AboutCallToAction } from '@/components/organisms/AboutCallToAction';
import {
  Heart,
  Lightbulb,
  Target,
  Users,
} from 'lucide-react';
import { useState, useEffect, useRef } from 'react';

const experience = [
  {
    period: '2025 - 現在',
    role: 'フリーランス Webエンジニア',
    company: '決済系webサービスのバックエンド開発',
    description:
      'SESエンジニアとして、決済系webサービスのバックエンド開発のプロジェクトに参加、こちらでは主に運用保守を担当し、小規模な改修や問い合わせに対する調査などを行っています。',
    tags: ['Go', 'GCP', 'Spanner', 'gRPC', 'Pub/Sub', 'Scrum開発', 'CI/CD', 'GitHub Actions', 'Terraform', 'Docker', 'Kubernetes', 'Datadog'],
  },
  {
    period: '2022 - 2024',
    role: 'フリーランス Webエンジニア',
    company: 'ヘルスケアアプリ、OEMヘルスケアアプリのサーバーサイド開発',
    description:
      'SESエンジニアとして、ヘルスケアアプリ、OEMヘルスケアアプリのサーバーサイド開発プロジェクトに参加。主にバックエンドの開発を担当し、API設計、データベース設計などを行いました。 また、APIだけではなくネイティブアプリ内で表示するWebViewの開発も行い、フロントエンドからバックエンドまで幅広く対応しました。こちらも新規アプリケーションの立ち上げなども行いました。',
      tags: ['Ruby', 'Rails', 'AWS', 'CircleCI', 'CI/CD', 'Terraform', 'Docker', 'Kubernetes', 'MySQL', 'Redis', 'tailwindcss', 'Datadog', 'Sentry', 'Scrum開発'],
  },
  {
    period: '2020 - 2022',
    role: 'SES Webエンジニア',
    company: 'BtoB向けビジネス情報webアプリ改修',
    description:
      'SESエンジニアとして、BtoB向けビジネス情報webアプリの改修プロジェクトに参加。主にビジネスサイドとのコミュニケーションと開発を担当し、要件定義から実装、リリース、保守までを行いました。フロントエンドからバックエンド、インフラなどフルスタックでの開発業務を行いました。マイクロフロントエンドを一から構築し、CI/CDの導入を行い、開発効率を大幅に向上させました。',
    tags: ['Kotlin', 'Dart', 'TypeScript', 'Elixir', 'clojure', 'SpringBoot', 'Docker', 'Bootstrap', 'Thymeleaf', 'JUnit', 'AngularDart', 'Docker', 'kubernetes', 'Gauge', 'Selenium', 'GCP', 'TDD', 'DDD', 'AngularTS', 'phoenix', 'Duct', 'svelte', 'vite', 'ArgoCD', 'helm', 'skaffold', 'CDC', 'Jenkins', 'アジャイル開発', 'XP'],
  },
];

const education = [
  {
    period: '2016 - 2020',
    degree: '経済大学卒業',
    school: '東京経済大学',
    description: '経済学を専攻',
  },
];

const values = [
  {
    icon: Heart,
    title: '品質へのこだわり',
    description:
      '単なる動作だけでなく、保守性、セキュリティ、パフォーマンスまで考慮した高品質なコードを追求します。',
  },
  {
    icon: Users,
    title: 'チーム協業',
    description:
      '効果的なコミュニケーションと知識共有を通じて、チーム全体の成長に貢献します。',
  },
  {
    icon: Lightbulb,
    title: '継続的学習',
    description:
      '技術の進化に合わせて常に新しい知識を吸収し、最適なソリューションを提供します。',
  },
  {
    icon: Target,
    title: '目標達成への情熱',
    description:
      'プロジェクトの目標達成に向けて、課題を積極的に解決し、価値を届けることに全力を注ぎます。',
  },
];

export default function About() {
  const [isVisible, setIsVisible] = useState(false);
  const [visibleSections, setVisibleSections] = useState<Set<string>>(new Set());
  
  const heroRef = useRef(null);
  const experienceRef = useRef(null);
  const valuesRef = useRef(null);
  const ctaRef = useRef(null);

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
    [heroRef, experienceRef, valuesRef, ctaRef].forEach(ref => {
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
              backgroundImage: 'url("/backgrounds/about-anime.jpeg")',
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
              私について
            </h1>
            <p className="text-xl md:text-2xl text-blue-200/90 leading-relaxed drop-shadow-lg">
              技術を通じて、ユーザーとビジネスに価値を提供することを使命としています。
              <br className="hidden sm:block" />
              フロントエンドからバックエンドまで、幅広い技術スタックを活用して、
              <br className="hidden sm:block" />
              最適なソリューションを実現します。
            </p>
          </div>
        </section>

        {/* Career History */}
        <section 
          ref={experienceRef}
          id="experience"
          className="mb-32"
        >
          <div className={`mb-16 text-center transition-all duration-1000 transform ${
            visibleSections.has('experience') ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
          }`}>
            <h2 className="font-jp mb-6 text-4xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              経歴
            </h2>
            <p className="text-xl text-blue-200/80 max-w-2xl mx-auto">
              これまでのキャリアと主な成果をご紹介します。
            </p>
          </div>
          <div className="space-y-8">
            {experience.map((item, index) => (
              <div
                key={index}
                className={`transition-all duration-700 transform ${
                  visibleSections.has('experience') ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
                }`}
                style={{
                  transitionDelay: visibleSections.has('experience') ? `${index * 150}ms` : '0ms'
                }}
              >
                <ExperienceCard
                  type="work"
                  title={item.role}
                  organization={item.company}
                  period={item.period}
                  description={item.description}
                  tags={item.tags}
                />
              </div>
            ))}
            {education.map((item, index) => (
              <div
                key={index}
                className={`transition-all duration-700 transform ${
                  visibleSections.has('experience') ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
                }`}
                style={{
                  transitionDelay: visibleSections.has('experience') ? `${(experience.length + index) * 150}ms` : '0ms'
                }}
              >
                <ExperienceCard
                  type="education"
                  title={item.degree}
                  organization={item.school}
                  period={item.period}
                  description={item.description}
                />
              </div>
            ))}
          </div>
        </section>

        {/* Values */}
        <section 
          ref={valuesRef}
          id="values"
          className="mb-32"
        >
          <div className={`mb-16 text-center transition-all duration-1000 transform ${
            visibleSections.has('values') ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
          }`}>
            <h2 className="font-jp mb-6 text-4xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              価値観
            </h2>
            <p className="text-xl text-blue-200/80 max-w-2xl mx-auto">
              エンジニアとしての信念と大切にしていること
            </p>
          </div>
          <div className="grid gap-8 sm:grid-cols-2">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div
                  key={index}
                  className={`transition-all duration-700 transform ${
                    visibleSections.has('values') ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
                  }`}
                  style={{
                    transitionDelay: visibleSections.has('values') ? `${index * 150}ms` : '0ms'
                  }}
                >
                  <ValueCard icon={Icon} title={value.title} description={value.description} />
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
          <div className={`transition-all duration-1000 transform ${
            visibleSections.has('cta') ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
          }`}>
            <AboutCallToAction />
          </div>
        </section>
      </div>
    </div>
  );
}
