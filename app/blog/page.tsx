import { PageLayout } from '@/components/template/PageLayout';
import { BlogCard } from '@/components/organisms/BlogCard';
import { getAllPosts } from '@/lib/contentful';

export default async function Blog() {
  const blogPosts = await getAllPosts();

  return (
    <PageLayout
      title="技術ブログ"
      backgroundImage="/backgrounds/blog-bg-anime.jpeg"
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
      {/* <section className="mt-24 text-center">
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
      </section> */}
    </PageLayout>
  );
}
