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
    period: '2023 - 現在',
    role: 'シニアフルスタックエンジニア',
    company: '株式会社テックイノベーション',
    description:
      'チームリーダーとして、大規模Webアプリケーションの設計・開発を担当。マイクロサービスアーキテクチャの導入や、パフォーマンス最適化を実現。',
  },
  {
    period: '2020 - 2023',
    role: 'フロントエンドエンジニア',
    company: '株式会社デジタルソリューションズ',
    description:
      'React/Next.jsを用いたWebアプリケーション開発。UI/UXの改善により、ユーザー満足度を30%向上。',
  },
  {
    period: '2018 - 2020',
    role: 'Webエンジニア',
    company: '株式会社テックスタート',
    description:
      'スタートアップでフルスタック開発を担当。新規サービスの立ち上げから運用まで幅広く経験。',
  },
];

const education = [
  {
    period: '2014 - 2018',
    degree: '情報工学学士',
    school: '工科大学',
    description: 'コンピュータサイエンスを専攻。アルゴリズムとデータ構造を重点的に学習。',
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
      backgroundImage="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=2940"
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
