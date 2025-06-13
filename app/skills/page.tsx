"use client";

import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  Brain,
  Code2,
  Database,
  Globe,
  Layout,
  Link as LinkIcon,
  Server,
  Settings,
  Smartphone,
  TestTube,
  Users,
} from 'lucide-react';
import Link from 'next/link';
import { useState, useEffect, useRef } from 'react';

const skillCategories = [
  {
    title: 'フロントエンド',
    icon: Layout,
    description: 'モダンなWebフロントエンド開発',
    skills: [
      { name: 'React/Next.js', years: 1, description: '大規模アプリケーション開発経験あり' },
      { name: 'Vue/Nuxt.js', years: 2, description: '大規模アプリケーション開発経験あり' },
      { name: 'Angular/TS・Dart', years: 2, description: '大規模アプリケーション開発経験あり' },
      { name: 'TypeScript', years: 5, description: '型安全な開発を徹底' },
      { name: 'HTML/CSS', years: 5, description: 'セマンティックなマークアップ' },
      { name: 'Tailwind CSS', years: 3, description: '効率的なスタイリング' },
    ],
  },
  {
    title: 'バックエンド',
    icon: Server,
    description: 'スケーラブルなサーバーサイド開発',
    skills: [
      { name: 'Java', years: 3, description: 'Spring Bootでの開発経験' },
      { name: 'Kotlin', years: 3, description: 'Spring Bootでの開発経験' },
      { name: 'Elixir', years: 1, description: 'Phoenixでの開発経験' },
      { name: 'Clojure', years: 1, description: 'バックエンド開発' },
      { name: 'Node.js', years: 3, description: 'Express, Fastifyでのサーバー構築' },
      { name: 'GraphQL', years: 1, description: 'APIスキーマ設計と実装' },
      { name: 'REST API', years: 5, description: 'RESTful設計原則に基づく開発' },
      { name: 'Go', years: 1, description: 'バックエンド開発' },
      { name: 'ruby', years: 2, description: 'railsでの開発経験' },
    ],
  },
  {
    title: 'データベース',
    icon: Database,
    description: 'データモデリングと最適化',
    skills: [
      { name: 'MySQL', years: 5, description: 'スキーマ設計と運用' },
      { name: 'PostgreSQL', years: 2, description: 'パフォーマンスチューニング' },
      { name: 'Redis', years: 3, description: 'キャッシュ戦略の実装' },
      { name: 'spanner', years: 1, description: 'データベース設計・運用' },
    ],
  },
  {
    title: 'インフラストラクチャ',
    icon: Globe,
    description: 'クラウドインフラの設計と運用',
    skills: [
      { name: 'AWS', years: 3, description: 'ECS, Lambda等のサービス活用' },
      { name: 'GCP', years: 2, description: 'GCS, サービス活用' },
      { name: 'Docker', years: 5, description: 'コンテナ化と運用自動化' },
      { name: 'Kubernetes', years: 5, description: 'コンテナ化と運用自動化' },
      { name: 'CI/CD', years: 5, description: 'GitHub Actions, CircleCI' },
      { name: 'Terraform', years: 3, description: 'IaCによるインフラ管理' },
    ],
  },
  {
    title: 'テスト/品質管理',
    icon: TestTube,
    description: '品質を担保する自動化テスト',
    skills: [
      { name: 'Jest', years: 4, description: 'ユニットテスト作成' },
      { name: 'Gauge', years: 3, description: 'E2Eテスト実装' },
    ],
  },
  {
    title: 'その他',
    icon: Brain,
    description: '開発をサポートするスキル',
    skills: [
      { name: 'Git', years: 5, description: 'バージョン管理とチーム開発' },
      { name: 'アジャイル開発', years: 5, description: 'スクラムマスター経験' },
      { name: 'XP', years: 2, description: 'ペアプロなど' },
    ],
  },
];

const certifications = [
  { name: 'ITパスポート', year: '2020' },
];

const tools = [
  { icon: Code2, name: 'VSCode', description: 'プライマリエディタ' },
  { icon: Code2, name: 'Cursor', description: 'プライマリエディタ' },
  { icon: Settings, name: 'WebStorm', description: 'JavaScript/TypeScript開発' },
  { icon: LinkIcon, name: 'Postman', description: 'API開発・テスト' },
  { icon: Users, name: 'Slack', description: 'チームコミュニケーション' },
];

export default function Skills() {
  const [isVisible, setIsVisible] = useState(false);
  const [visibleSections, setVisibleSections] = useState<Set<string>>(new Set());
  
  const heroRef = useRef(null);
  const skillsRef = useRef(null);
  const additionalRef = useRef(null);
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
    [heroRef, skillsRef, additionalRef, ctaRef].forEach(ref => {
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
              backgroundImage: 'url("/backgrounds/skills-bg-anime.jpeg")',
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
              スキル & 技術
            </h1>
            <p className="text-xl md:text-2xl text-blue-200/90 leading-relaxed drop-shadow-lg">
              5年以上のキャリアで培った技術スタックと専門知識をご紹介します。
              <br className="hidden sm:block" />
              フロントエンドからインフラまで、幅広い領域での実践的なスキルを持っています。
            </p>
          </div>
        </section>

        {/* Skill Categories */}
        <section 
          ref={skillsRef}
          id="skills"
          className="mb-24 space-y-12"
        >
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <div
                key={index}
                className={`transition-all duration-700 transform ${
                  visibleSections.has('skills') ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
                }`}
                style={{
                  transitionDelay: visibleSections.has('skills') ? `${index * 150}ms` : '0ms'
                }}
              >
                <Card className="border-blue-500/20 bg-gray-800/60 backdrop-blur-sm transition-all duration-300 hover:border-blue-400/50 hover:shadow-2xl hover:shadow-blue-500/30">
                  <CardHeader>
                    <div className="flex items-center gap-4">
                      <div className="rounded-full bg-gradient-to-r from-blue-500/20 to-cyan-500/20 p-3 border border-blue-400/30">
                        <Icon className="h-6 w-6 text-blue-400" />
                      </div>
                      <div>
                        <CardTitle className="font-jp text-2xl bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">{category.title}</CardTitle>
                        <CardDescription className="text-blue-200/70">{category.description}</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    {category.skills.map((skill, skillIndex) => (
                      <div key={skillIndex}>
                        <div className="flex items-center justify-between gap-4">
                          <div className="flex-1">
                            <p className="font-medium mb-1 text-blue-200">{skill.name}</p>
                            <p className="text-sm text-blue-300/70">{skill.description}</p>
                          </div>
                          <div className="text-right">
                            <p className="font-bold text-cyan-400">{skill.years}年</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </CardContent>
                </Card>
              </div>
            );
          })}
        </section>

        {/* Additional Skills */}
        <section 
          ref={additionalRef}
          id="additional"
          className="mb-24 grid gap-8 md:grid-cols-2"
        >
          {/* Certifications */}
          <div className={`transition-all duration-700 transform ${
            visibleSections.has('additional') ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
          }`}>
            <Card className="border-blue-500/20 bg-gray-800/60 backdrop-blur-sm transition-all duration-300 hover:border-blue-400/50 hover:shadow-2xl hover:shadow-blue-500/30">
              <CardHeader>
                <CardTitle className="font-jp text-2xl bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">資格・認定</CardTitle>
                <CardDescription className="text-blue-200/70">取得した技術資格</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4">
                  {certifications.map((cert, index) => (
                    <li key={index} className="flex items-center gap-4">
                      <div className="rounded-full bg-gradient-to-r from-blue-500/20 to-cyan-500/20 p-2 border border-blue-400/30">
                        <Brain className="h-5 w-5 text-blue-400" />
                      </div>
                      <div>
                        <p className="font-medium text-blue-200">{cert.name}</p>
                        <p className="text-sm text-blue-300/70">取得年: {cert.year}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* Tools */}
          <div className={`transition-all duration-700 delay-150 transform ${
            visibleSections.has('additional') ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
          }`}>
            <Card className="border-blue-500/20 bg-gray-800/60 backdrop-blur-sm transition-all duration-300 hover:border-blue-400/50 hover:shadow-2xl hover:shadow-blue-500/30">
              <CardHeader>
                <CardTitle className="font-jp text-2xl bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">開発ツール</CardTitle>
                <CardDescription className="text-blue-200/70">普段使用している開発環境</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4">
                  {tools.map((tool, index) => {
                    const Icon = tool.icon;
                    return (
                      <li key={index} className="flex items-center gap-4">
                        <div className="rounded-full bg-gradient-to-r from-blue-500/20 to-cyan-500/20 p-2 border border-blue-400/30">
                          <Icon className="h-5 w-5 text-blue-400" />
                        </div>
                        <div>
                          <p className="font-medium text-blue-200">{tool.name}</p>
                          <p className="text-sm text-blue-300/70">{tool.description}</p>
                        </div>
                      </li>
                    );
                  })}
                </ul>
              </CardContent>
            </Card>
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
            <h2 className="font-jp mb-6 text-3xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              プロジェクトでの活用事例をご覧ください
            </h2>
            <p className="mb-10 text-lg text-blue-200/80">
              これらのスキルを活用した具体的なプロジェクト実績をご紹介しています。
            </p>
            <Button size="lg" className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white transform hover:scale-110 transition-all duration-500 shadow-lg hover:shadow-xl hover:shadow-blue-500/50 border border-blue-400/30" asChild>
              <Link href="/projects">プロジェクトを見る</Link>
            </Button>
          </div>
        </section>
      </div>
    </div>
  );
}
