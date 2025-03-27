import { PageLayout } from '@/components/template/PageLayout';
import { BlogCard } from '@/components/organisms/BlogCard';
import { Button } from '@/components/ui/button';

const blogPosts = [
  {
    id: 1,
    title: 'マイクロサービスアーキテクチャの実践的導入ガイド',
    description: 'モノリシックなアプリケーションからマイクロサービスへの移行事例と、その過程で得られた知見を共有します。',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa',
    date: '2024-03-15',
    readTime: '10 min',
    tags: ['Architecture', 'Microservices', 'DevOps'],
    excerpt: 'マイクロサービスアーキテクチャは、多くの組織で採用されている現代的なアプリケーション設計パターンです。本記事では、実際のプロジェクトでの導入事例を基に、計画から実装、運用までの詳細な手順と注意点を解説します。',
  },
  {
    id: 2,
    title: 'Next.js 14で実現するパフォーマンス最適化',
    description: 'App RouterとServer Componentsを活用した最新のパフォーマンス最適化テクニックを紹介します。',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f',
    date: '2024-03-10',
    readTime: '8 min',
    tags: ['Next.js', 'Performance', 'React'],
    excerpt: 'Next.js 14では、さらなるパフォーマンスの向上が実現可能になりました。本記事では、App RouterとServer Componentsを中心に、実践的な最適化手法とベストプラクティスを解説します。',
  },
  {
    id: 3,
    title: 'AIを活用した開発生産性の向上',
    description: 'GitHub Copilotなどの AI ツールを活用した開発効率化の実践例を紹介します。',
    image: 'https://images.unsplash.com/photo-1555949963-ff9fe0c870eb',
    date: '2024-03-05',
    readTime: '12 min',
    tags: ['AI', 'Productivity', 'Development'],
    excerpt: '近年、開発現場でのAIツールの活用が進んでいます。本記事では、GitHub CopilotやChatGPTなどのAIツールを効果的に活用し、開発生産性を向上させる具体的な方法を解説します。',
  },
  {
    id: 4,
    title: 'モダンなフロントエンド開発環境の構築',
    description: 'TypeScript、ESLint、Prettier を組み合わせた理想的な開発環境の構築方法を解説します。',
    image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6',
    date: '2024-03-01',
    readTime: '15 min',
    tags: ['TypeScript', 'Development', 'Tools'],
    excerpt: '効率的なフロントエンド開発には、適切な開発環境の構築が不可欠です。本記事では、TypeScript、ESLint、Prettierなどのツールを組み合わせた、モダンな開発環境の構築手順を詳しく解説します。',
  },
];

export default function Blog() {
  return (
    <PageLayout
      title="技術ブログ"
      backgroundImage="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?q=80&w=2940"
      description="ソフトウェア開発に関する知見、最新技術のトレンド、プロジェクトでの経験などを発信しています。"
    >
      {/* Featured Post */}
      <section className="mb-24">
        <BlogCard post={blogPosts[0]} variant="featured" />
      </section>

      {/* Recent Posts */}
      <section>
        <h2 className="font-jp text-2xl font-bold mb-8">最新の記事</h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {blogPosts.slice(1).map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>
      </section>

      {/* Newsletter */}
      <section className="mt-24 text-center">
        <div className="rounded-3xl bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10 p-12 md:p-16 backdrop-blur-sm">
          <div className="absolute inset-0 -z-10 rounded-3xl bg-white/5" />
          <h2 className="font-jp mb-6 text-3xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            最新の技術情報をお届けします
          </h2>
          <p className="mb-10 text-lg text-muted-foreground">
            ブログの更新情報や、技術的な知見を定期的にお届けします。
          </p>
          <Button size="lg" className="bg-primary/90 hover:bg-primary text-lg px-8">
            購読する
          </Button>
        </div>
      </section>
    </PageLayout>
  );
}
