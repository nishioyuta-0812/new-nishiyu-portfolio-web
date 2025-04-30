import { PageLayout } from '@/components/template/PageLayout';
import { ExperienceCard } from '@/components/molecules/ExperienceCard';
import { ValueCard } from '@/components/molecules/ValueCard';
import { AboutCallToAction } from '@/components/organisms/AboutCallToAction';
import {
  Heart,
  Lightbulb,
  Target,
  Users,
} from 'lucide-react';

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
  return (
    <PageLayout
      title="私について"
      backgroundImage="/backgrounds/about-anime.jpeg"
      description="技術を通じて、ユーザーとビジネスに価値を提供することを使命としています。フロントエンドからバックエンドまで、幅広い技術スタックを活用して、最適なソリューションを実現します。"
    >

      {/* Career History */}
      <section className="mb-24">
        <div className="mb-8">
          <h2 className="font-jp mb-3 text-3xl font-bold">経歴</h2>
          <p className="text-lg text-muted-foreground">
            これまでのキャリアと主な成果をご紹介します。
          </p>
        </div>
        <div className="space-y-6">
          {experience.map((item, index) => (
            <ExperienceCard
              key={index}
              type="work"
              title={item.role}
              organization={item.company}
              period={item.period}
              description={item.description}
              tags={item.tags}
            />
          ))}
          {education.map((item, index) => (
            <ExperienceCard
              key={index}
              type="education"
              title={item.degree}
              organization={item.school}
              period={item.period}
              description={item.description}
            />
          ))}
        </div>
      </section>

      {/* Values */}
      <section className="mb-24">
        <div className="mb-8">
          <h2 className="font-jp mb-3 text-3xl font-bold">価値観</h2>
          <p className="text-lg text-muted-foreground">
            エンジニアとしての信念と大切にしていること
          </p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2">
          {values.map((value, index) => {
            const Icon = value.icon;
            return <ValueCard key={index} icon={Icon} title={value.title} description={value.description} />;
          })}
        </div>
      </section>

      {/* Call to Action */}
      <AboutCallToAction />
    </PageLayout>
  );
}
