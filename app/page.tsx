import { Button } from '@/components/ui/button';
import { Code2, FileText, Laptop, Mail, Briefcase, Star } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const skills = [
  { name: 'フロントエンド開発', icon: Laptop, description: 'React, Next.js, Vue, Nuxt.js,TypeScript' },
  { name: 'バックエンド開発', icon: Code2, description: 'Node.js, Kotlin, Go, SQL' },
  { name: 'プロジェクト管理', icon: Briefcase, description: 'アジャイル開発, Git' },
  { name: '技術文書作成', icon: FileText, description: '設計書, API仕様書' },
  { name: 'コミュニケーション', icon: Mail, description: 'チーム協業, 顧客折衝' },
  { name: '品質管理', icon: Star, description: 'テスト設計, コードレビュー' },
];

export default function Home() {
  return (
    <div className="flex flex-col gap-20 py-8 md:py-16 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      {/* Hero Section */}
      <section className="flex flex-col items-center gap-8 text-center">
        <div
          className="absolute inset-0 -z-10 h-screen bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url("/backgrounds/home-bg-anime.jpeg")',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/50 to-background/80" />
        </div>
        <div className="relative h-40 w-40 overflow-hidden rounded-full border-4 border-primary/20 shadow-lg">
          <Image
            src="/images/yutaicon.JPG"
            alt="Profile"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="space-y-4">
          <h1 className="font-jp text-4xl font-bold">西尾 悠太</h1>
          <p className="text-2xl font-medium bg-gradient-to-r from-primary/80 to-accent/80 bg-clip-text text-transparent">
            Software Engineer
          </p>
          <p className="mx-auto max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8">
            5年以上のWeb開発経験を持つフルスタックエンジニアです。
            モダンな技術スタックを活用し、ユーザー体験と技術的完成度の両立を追求しています。
            チーム開発でのリーダー経験も豊富で、プロジェクトの成功に貢献してきました。
          </p>
        </div>
        <div className="flex gap-6">
          <Button size="lg" className="bg-primary/90 hover:bg-primary" asChild>
            <Link href="/projects">View Projects</Link>
          </Button>
          <Button size="lg" variant="outline" className="border-primary/20 hover:bg-primary/5" asChild>
            <Link href="/contact">Contact Me</Link>
          </Button>
        </div>
      </section>

      {/* Skills Overview */}
      <section>
        <h2 className="text-3xl font-bold text-center mb-12 font-jp">主なスキル</h2>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((skill) => {
            const Icon = skill.icon;
            return (
              <div
                key={skill.name}
                className="flex flex-col items-center gap-4 rounded-xl border border-primary/10 bg-card/80 p-6 text-center transition-all hover:border-primary/30 hover:shadow-lg"
              >
                <div className="rounded-full bg-primary/10 p-3">
                  <Icon className="h-8 w-8 text-primary" />
                </div>
                <div>
                  <h3 className="font-jp text-lg font-medium mb-2">{skill.name}</h3>
                  <p className="text-sm text-muted-foreground">{skill.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Call to Action */}
      <section className="text-center">
        <div className="rounded-2xl bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10 p-8 md:p-12">
          <h2 className="text-2xl font-bold mb-4 font-jp">プロジェクトに興味がありますか？</h2>
          <p className="text-muted-foreground mb-8">
            お気軽にご連絡ください。新しい挑戦をお待ちしています。
          </p>
          <Button size="lg" className="bg-primary/90 hover:bg-primary" asChild>
            <Link href="/contact">お問い合わせ</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
