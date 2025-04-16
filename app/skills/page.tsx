import { PageLayout } from '@/components/template/PageLayout';
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
  return (
    <PageLayout
      title="スキル & 技術"
      backgroundImage="/backgrounds/skills-bg-anime.jpeg"
      description="5年以上のキャリアで培った技術スタックと専門知識をご紹介します。フロントエンドからインフラまで、幅広い領域での実践的なスキルを持っています。"
    >

      {/* Skill Categories */}
      <section className="mb-24 space-y-12">
        {skillCategories.map((category, index) => {
          const Icon = category.icon;
          return (
            <Card key={index} className="border-primary/10 transition-all duration-300 hover:border-primary/30 hover:shadow-lg">
              <CardHeader>
                <div className="flex items-center gap-4">
                  <div className="rounded-full bg-primary/10 p-2">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <CardTitle className="font-jp text-2xl">{category.title}</CardTitle>
                    <CardDescription>{category.description}</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex items-center justify-between gap-4">
                      <div className="flex-1">
                        <p className="font-medium mb-1">{skill.name}</p>
                        <p className="text-sm text-muted-foreground">{skill.description}</p>
                      </div>
                      <div className="text-right">
                        <p className="font-bold text-primary">{skill.years}年</p>
                      </div>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          );
        })}
      </section>

      {/* Additional Skills */}
      <section className="mb-24 grid gap-8 md:grid-cols-2">
        {/* Certifications */}
        <Card className="border-primary/10 transition-all duration-300 hover:border-primary/30 hover:shadow-lg">
          <CardHeader>
            <CardTitle className="font-jp text-2xl">資格・認定</CardTitle>
            <CardDescription>取得した技術資格</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="space-y-4">
              {certifications.map((cert, index) => (
                <li key={index} className="flex items-center gap-4">
                  <div className="rounded-full bg-primary/10 p-2">
                    <Brain className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium">{cert.name}</p>
                    <p className="text-sm text-muted-foreground">取得年: {cert.year}</p>
                  </div>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>

        {/* Tools */}
        <Card className="border-primary/10 transition-all duration-300 hover:border-primary/30 hover:shadow-lg">
          <CardHeader>
            <CardTitle className="font-jp text-2xl">開発ツール</CardTitle>
            <CardDescription>普段使用している開発環境</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="space-y-4">
              {tools.map((tool, index) => {
                const Icon = tool.icon;
                return (
                  <li key={index} className="flex items-center gap-4">
                    <div className="rounded-full bg-primary/10 p-2">
                      <Icon className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium">{tool.name}</p>
                      <p className="text-sm text-muted-foreground">{tool.description}</p>
                    </div>
                  </li>
                );
              })}
            </ul>
          </CardContent>
        </Card>
      </section>

      {/* Call to Action */}
      <section className="text-center">
        <div className="rounded-3xl bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10 p-12 md:p-16 backdrop-blur-sm">
          <div className="absolute inset-0 -z-10 rounded-3xl bg-white/5" />
          <h2 className="font-jp mb-6 text-3xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            プロジェクトでの活用事例をご覧ください
          </h2>
          <p className="mb-10 text-lg text-muted-foreground">
            これらのスキルを活用した具体的なプロジェクト実績をご紹介しています。
          </p>
          <Button size="lg" className="bg-primary/90 hover:bg-primary text-lg px-8" asChild>
            <Link href="/projects">プロジェクトを見る</Link>
          </Button>
        </div>
      </section>
    </PageLayout>
  );
}
