import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Calendar, Clock, Share2, Tag } from 'lucide-react';
import Image from 'next/image';

// Blog posts data
const blogPosts = [
  {
    id: '1',
    title: 'マイクロサービスアーキテクチャの実践的導入ガイド',
    description: 'モノリシックなアプリケーションからマイクロサービスへの移行事例と、その過程で得られた知見を共有します。',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa',
    date: '2024-03-15',
    readTime: '10 min',
    tags: ['Architecture', 'Microservices', 'DevOps'],
  },
  {
    id: '2',
    title: 'Next.js 14で実現するパフォーマンス最適化',
    description: 'App RouterとServer Componentsを活用した最新のパフォーマンス最適化テクニックを紹介します。',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f',
    date: '2024-03-10',
    readTime: '8 min',
    tags: ['Next.js', 'Performance', 'React'],
  },
  {
    id: '3',
    title: 'AIを活用した開発生産性の向上',
    description: 'GitHub Copilotなどの AI ツールを活用した開発効率化の実践例を紹介します。',
    image: 'https://images.unsplash.com/photo-1555949963-ff9fe0c870eb',
    date: '2024-03-05',
    readTime: '12 min',
    tags: ['AI', 'Productivity', 'Development'],
  },
  {
    id: '4',
    title: 'モダンなフロントエンド開発環境の構築',
    description: 'TypeScript、ESLint、Prettier を組み合わせた理想的な開発環境の構築方法を解説します。',
    image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6',
    date: '2024-03-01',
    readTime: '15 min',
    tags: ['TypeScript', 'Development', 'Tools'],
  },
];

export function generateStaticParams() {
  return blogPosts.map((post) => ({
    id: post.id,
  }));
}

// 記事の詳細なコンテンツ
const blogContent = `
マイクロサービスアーキテクチャは、多くの組織で採用されている現代的なアプリケーション設計パターンです。
本記事では、実際のプロジェクトでの導入事例を基に、計画から実装、運用までの詳細な手順と注意点を解説します。

## 1. マイクロサービス導入の背景

モノリシックなアプリケーションが成長するにつれ、以下の課題が顕在化してきました：

- デプロイメントの複雑化
- スケーリングの難しさ
- チーム間の依存関係

## 2. アーキテクチャの設計

システムを以下のサービスに分割しました：

- ユーザー認証サービス
- 商品管理サービス
- 注文処理サービス
- 在庫管理サービス

## 3. 技術スタックの選定

各サービスで採用した主な技術：

- Node.js / Express.js
- Python / FastAPI
- PostgreSQL
- Redis
- Docker & Kubernetes

## 4. 実装のポイント

### 4.1 サービス間通信

- REST APIとgRPCの使い分け
- メッセージキューの活用
- 非同期処理の実装

### 4.2 データ管理

- データベースの分割方針
- トランザクション管理
- データの整合性確保

## 5. 運用体制の整備

- モニタリングとロギング
- CI/CDパイプラインの構築
- 障害対応フロー

## 6. 得られた成果

- デプロイ頻度が週1回から日次へ改善
- 障害影響範囲の局所化
- チームの自律性向上

## まとめ

マイクロサービスへの移行は、技術的な課題だけでなく、組織的な変革も必要とします。
段階的な移行と、適切なモニタリングが成功のカギとなりました。
`;

// 関連記事
const relatedPosts = [
  {
    id: 2,
    title: 'Next.js 14で実現するパフォーマンス最適化',
    description: 'App RouterとServer Componentsを活用した最新のパフォーマンス最適化テクニックを紹介します。',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f',
    date: '2024-03-10',
    readTime: '8 min',
    tags: ['Next.js', 'Performance', 'React'],
  },
  {
    id: 3,
    title: 'AIを活用した開発生産性の向上',
    description: 'GitHub Copilotなどの AI ツールを活用した開発効率化の実践例を紹介します。',
    image: 'https://images.unsplash.com/photo-1555949963-ff9fe0c870eb',
    date: '2024-03-05',
    readTime: '12 min',
    tags: ['AI', 'Productivity', 'Development'],
  },
];

export default function BlogPost() {
  const post = {
    id: '1',
    title: 'マイクロサービスアーキテクチャの実践的導入ガイド',
    description: 'モノリシックなアプリケーションからマイクロサービスへの移行事例と、その過程で得られた知見を共有します。',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa',
    date: '2024-03-15',
    readTime: '10 min',
    tags: ['Architecture', 'Microservices', 'DevOps'],
    content: blogContent,
  };

  return (
    <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 md:py-20">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-y-0 left-0 w-1/2 bg-gradient-to-r from-primary/5 to-transparent blur-3xl" />
        <div className="absolute inset-y-0 right-0 w-1/2 bg-gradient-to-l from-accent/5 to-transparent blur-3xl" />
      </div>

      {/* Article Header */}
      <header className="mb-12 text-center">
        <div className="flex justify-center gap-2 mb-6">
          {post.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary"
            >
              {tag}
            </span>
          ))}
        </div>
        <h1 className="font-jp mb-6 text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
          {post.title}
        </h1>
        <p className="mx-auto max-w-[42rem] text-xl leading-relaxed text-muted-foreground mb-6">
          {post.description}
        </p>
        <div className="flex items-center justify-center gap-6">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Calendar className="h-4 w-4" />
            <time dateTime={post.date}>
              {new Date(post.date).toLocaleDateString('ja-JP')}
            </time>
          </div>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Clock className="h-4 w-4" />
            <span>{post.readTime}</span>
          </div>
        </div>
      </header>

      {/* Main Image */}
      <div className="relative mb-12 aspect-[21/9] overflow-hidden rounded-xl">
        <Image
          src={post.image}
          alt={post.title}
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Article Content */}
      <article className="prose prose-neutral dark:prose-invert mx-auto mb-24">
        {post.content.split('\n\n').map((paragraph, index) => {
          if (paragraph.startsWith('#')) {
            const level = paragraph.match(/^#+/)[0].length;
            const text = paragraph.replace(/^#+\s/, '');
            const HeadingTag = `h${level}` as keyof JSX.IntrinsicElements;
            return (
              <HeadingTag key={index} className="font-jp">
                {text}
              </HeadingTag>
            );
          }
          return <p key={index}>{paragraph}</p>;
        })}
      </article>

      {/* Share Button */}
      <div className="mb-24 text-center">
        <Button variant="outline" size="lg" className="gap-2">
          <Share2 className="h-4 w-4" />
          記事をシェアする
        </Button>
      </div>

      {/* Related Posts */}
      <section>
        <h2 className="font-jp text-2xl font-bold mb-8">関連記事</h2>
        <div className="grid gap-8 md:grid-cols-2">
          {relatedPosts.map((post) => (
            <Card key={post.id} className="overflow-hidden border-primary/10 transition-all duration-300 hover:border-primary/30 hover:shadow-lg">
              <div className="grid grid-cols-3 gap-4">
                <div className="relative h-full">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="col-span-2 p-4">
                  <CardHeader className="p-0">
                    <div className="flex flex-wrap gap-1 mb-2">
                      {post.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full bg-primary/10 px-2 py-0.5 text-xs font-medium text-primary"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <CardTitle className="font-jp text-lg line-clamp-2">
                      {post.title}
                    </CardTitle>
                  </CardHeader>
                  <CardFooter className="p-0 mt-2">
                    <div className="flex items-center gap-4 text-xs text-muted-foreground">
                      <time dateTime={post.date}>
                        {new Date(post.date).toLocaleDateString('ja-JP')}
                      </time>
                      <span>{post.readTime}</span>
                    </div>
                  </CardFooter>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}
