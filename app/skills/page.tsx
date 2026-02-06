"use client";

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Brain, Code2, Database, Globe, Layout, Link as LinkIcon, Server, Settings, TestTube, Users } from 'lucide-react';
import Link from 'next/link';
import { useState, useEffect, useRef } from 'react';

const skillCategories = [
  {
    title: 'フロントエンド', icon: Layout, code: 'SYS-FE',
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
    title: 'バックエンド', icon: Server, code: 'SYS-BE',
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
    title: 'データベース', icon: Database, code: 'SYS-DB',
    description: 'データモデリングと最適化',
    skills: [
      { name: 'MySQL', years: 5, description: 'スキーマ設計と運用' },
      { name: 'PostgreSQL', years: 2, description: 'パフォーマンスチューニング' },
      { name: 'Redis', years: 3, description: 'キャッシュ戦略の実装' },
      { name: 'spanner', years: 1, description: 'データベース設計・運用' },
    ],
  },
  {
    title: 'インフラストラクチャ', icon: Globe, code: 'SYS-IF',
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
    title: 'テスト/品質管理', icon: TestTube, code: 'SYS-QA',
    description: '品質を担保する自動化テスト',
    skills: [
      { name: 'Jest', years: 4, description: 'ユニットテスト作成' },
      { name: 'Gauge', years: 3, description: 'E2Eテスト実装' },
    ],
  },
  {
    title: 'その他', icon: Brain, code: 'SYS-OT',
    description: '開発をサポートするスキル',
    skills: [
      { name: 'Git', years: 5, description: 'バージョン管理とチーム開発' },
      { name: 'アジャイル開発', years: 5, description: 'スクラムマスター経験' },
      { name: 'XP', years: 2, description: 'ペアプロなど' },
    ],
  },
];

const certifications = [{ name: 'ITパスポート', year: '2020' }];

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
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setVisibleSections(prev => new Set([...prev, entry.target.id]));
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

    [heroRef, skillsRef, additionalRef, ctaRef].forEach(ref => {
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
              <span className="font-mono text-xs text-[#e8b830]/60 tracking-widest">ARMAMENT DATA</span>
              <div className="w-12 h-[1px] bg-gradient-to-l from-transparent to-[#1e90ff]/50" />
            </div>
            <h1 className="font-jp text-4xl md:text-6xl font-bold text-white seed-text-glow tracking-wider">
              スキル & 技術
            </h1>
            <p className="text-lg md:text-xl text-[#1e90ff]/60 leading-relaxed">
              5年以上のキャリアで培った技術スタックと専門知識をご紹介します。
              <br className="hidden sm:block" />
              フロントエンドからインフラまで、幅広い領域での実践的なスキルを持っています。
            </p>
          </div>
        </section>

        {/* Skill Categories */}
        <section ref={skillsRef} id="skills" className="mb-24 space-y-8">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <div
                key={index}
                className={`transition-all duration-700 transform ${visibleSections.has('skills') ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}
                style={{ transitionDelay: visibleSections.has('skills') ? `${index * 100}ms` : '0ms' }}
              >
                <Card className="relative border-[#1e90ff]/10 bg-[#0a0f1e]/60 backdrop-blur-sm transition-all duration-300 hover:border-[#1e90ff]/30 hover:shadow-[0_0_20px_rgba(30,144,255,0.08)] overflow-hidden">
                  {/* Corner accents */}
                  <div className="absolute top-0 left-0 w-3 h-3 border-t border-l border-[#1e90ff]/20" />
                  <div className="absolute top-0 right-0 w-3 h-3 border-t border-r border-[#1e90ff]/20" />
                  <div className="absolute bottom-0 left-0 w-3 h-3 border-b border-l border-[#1e90ff]/20" />
                  <div className="absolute bottom-0 right-0 w-3 h-3 border-b border-r border-[#1e90ff]/20" />

                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <div className="rounded border border-[#1e90ff]/20 bg-[#1e90ff]/5 p-2.5">
                        <Icon className="h-5 w-5 text-[#1e90ff]/70" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2">
                          <span className="font-mono text-[10px] text-[#e8b830]/40">{category.code}</span>
                        </div>
                        <CardTitle className="font-jp text-xl text-white/90">{category.title}</CardTitle>
                        <CardDescription className="text-[#1e90ff]/40">{category.description}</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    {category.skills.map((skill, skillIndex) => (
                      <div key={skillIndex} className="flex items-center justify-between gap-4 py-2 border-b border-[#1e90ff]/5 last:border-0">
                        <div className="flex-1">
                          <p className="font-medium text-sm text-white/80">{skill.name}</p>
                          <p className="text-xs text-[#1e90ff]/40">{skill.description}</p>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="w-16 h-1 bg-[#1e90ff]/10 rounded-full overflow-hidden">
                            <div
                              className="h-full bg-gradient-to-r from-[#1e90ff] to-[#00bfff] rounded-full"
                              style={{ width: `${Math.min(skill.years * 20, 100)}%` }}
                            />
                          </div>
                          <span className="font-mono text-xs text-[#e8b830]/60 w-8 text-right">{skill.years}yr</span>
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
        <section ref={additionalRef} id="additional" className="mb-24 grid gap-6 md:grid-cols-2">
          <div className={`transition-all duration-700 transform ${visibleSections.has('additional') ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
            <Card className="group relative border-[#1e90ff]/10 bg-[#0a0f1e]/60 backdrop-blur-sm h-full overflow-hidden transition-all duration-300 hover:border-[#1e90ff]/30 hover:shadow-[0_0_20px_rgba(30,144,255,0.08)]">
              <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-[#1e90ff]/20 group-hover:border-[#e8b830]/40 transition-colors duration-500" />
              <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-[#1e90ff]/20 group-hover:border-[#e8b830]/40 transition-colors duration-500" />
              <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-[#1e90ff]/20 group-hover:border-[#e8b830]/40 transition-colors duration-500" />
              <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-[#1e90ff]/20 group-hover:border-[#e8b830]/40 transition-colors duration-500" />
              <CardHeader>
                <div className="flex items-center gap-2 mb-1">
                  <span className="font-mono text-[10px] text-[#e8b830]/40">CERT</span>
                </div>
                <CardTitle className="font-jp text-xl text-white/90">資格・認定</CardTitle>
                <CardDescription className="text-[#1e90ff]/40">取得した技術資格</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {certifications.map((cert, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <div className="rounded border border-[#1e90ff]/20 bg-[#1e90ff]/5 p-1.5">
                        <Brain className="h-4 w-4 text-[#1e90ff]/60" />
                      </div>
                      <div>
                        <p className="font-medium text-sm text-white/80">{cert.name}</p>
                        <p className="text-xs text-[#1e90ff]/40 font-mono">{cert.year}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>

          <div className={`transition-all duration-700 delay-150 transform ${visibleSections.has('additional') ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
            <Card className="group relative border-[#1e90ff]/10 bg-[#0a0f1e]/60 backdrop-blur-sm h-full overflow-hidden transition-all duration-300 hover:border-[#1e90ff]/30 hover:shadow-[0_0_20px_rgba(30,144,255,0.08)]">
              <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-[#1e90ff]/20 group-hover:border-[#e8b830]/40 transition-colors duration-500" />
              <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-[#1e90ff]/20 group-hover:border-[#e8b830]/40 transition-colors duration-500" />
              <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-[#1e90ff]/20 group-hover:border-[#e8b830]/40 transition-colors duration-500" />
              <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-[#1e90ff]/20 group-hover:border-[#e8b830]/40 transition-colors duration-500" />
              <CardHeader>
                <div className="flex items-center gap-2 mb-1">
                  <span className="font-mono text-[10px] text-[#e8b830]/40">TOOLS</span>
                </div>
                <CardTitle className="font-jp text-xl text-white/90">開発ツール</CardTitle>
                <CardDescription className="text-[#1e90ff]/40">普段使用している開発環境</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {tools.map((tool, index) => {
                    const ToolIcon = tool.icon;
                    return (
                      <li key={index} className="flex items-center gap-3">
                        <div className="rounded border border-[#1e90ff]/20 bg-[#1e90ff]/5 p-1.5">
                          <ToolIcon className="h-4 w-4 text-[#1e90ff]/60" />
                        </div>
                        <div>
                          <p className="font-medium text-sm text-white/80">{tool.name}</p>
                          <p className="text-xs text-[#1e90ff]/40">{tool.description}</p>
                        </div>
                      </li>
                    );
                  })}
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* CTA */}
        <section ref={ctaRef} id="cta" className="text-center">
          <div className={`relative rounded border border-[#1e90ff]/20 p-8 md:p-12 overflow-hidden transition-all duration-700 transform hover:border-[#e8b830]/30 ${visibleSections.has('cta') ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}
            style={{
              background: 'linear-gradient(135deg, rgba(10, 15, 30, 0.9) 0%, rgba(30, 144, 255, 0.05) 50%, rgba(10, 15, 30, 0.9) 100%)',
              boxShadow: 'inset 0 1px 0 rgba(30, 144, 255, 0.1), 0 20px 50px rgba(30, 144, 255, 0.05)',
            }}>
            <div className="absolute top-2 left-2 w-6 h-6 border-t border-l border-[#1e90ff]/30" />
            <div className="absolute top-2 right-2 w-6 h-6 border-t border-r border-[#1e90ff]/30" />
            <div className="absolute bottom-2 left-2 w-6 h-6 border-b border-l border-[#1e90ff]/30" />
            <div className="absolute bottom-2 right-2 w-6 h-6 border-b border-r border-[#1e90ff]/30" />

            <div className="relative z-10">
              <div className="flex items-center justify-center gap-3 mb-4">
                <div className="w-8 h-[1px] bg-[#e8b830]/30" />
                <span className="font-mono text-[10px] text-[#e8b830]/50 tracking-widest">MISSION BRIEF</span>
                <div className="w-8 h-[1px] bg-[#e8b830]/30" />
              </div>
              <h2 className="font-jp mb-4 text-2xl md:text-3xl font-bold bg-gradient-to-r from-[#1e90ff] to-[#00bfff] bg-clip-text text-transparent">
                プロジェクトでの活用事例をご覧ください
              </h2>
              <p className="mb-8 text-[#1e90ff]/50 max-w-lg mx-auto">
                これらのスキルを活用した具体的なプロジェクト実績をご紹介しています。
              </p>
              <Button size="lg" className="bg-gradient-to-r from-[#1e90ff] to-[#0066cc] hover:from-[#3ba0ff] hover:to-[#1e90ff] text-white border border-[#1e90ff]/30 transition-all duration-500 hover:shadow-[0_0_30px_rgba(30,144,255,0.3)] hover:scale-105 tracking-wider" asChild>
                <Link href="/projects">
                  <span className="flex items-center gap-2">
                    <span className="font-mono text-xs opacity-50">▶</span>
                    プロジェクトを見る
                  </span>
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
