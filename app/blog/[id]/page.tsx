import { getAllPosts, getPostById } from '@/lib/contentful';
import { notFound } from 'next/navigation';
import { BlogPostContent } from '@/components/molecules/BlogPostContent';
import { BlogPostHeader } from '@/components/molecules/BlogPostHeader';
import { RelatedPosts } from '@/components/molecules/RelatedPosts';

export async function generateStaticParams() {
  const posts = await getAllPosts();
  return posts.map((post) => ({
    id: post.id,
  }));
}

export default async function BlogPost({ params }: { params: { id: string } }) {
  const post = await getPostById(params.id);
  
  if (!post) {
    notFound();
  }

  // 関連記事を取得（現在の記事を除く）
  const allPosts = await getAllPosts();
  const relatedPosts = allPosts
    .filter((p) => p.id !== post.id)
    .slice(0, 2);

  return (
    <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 md:py-20">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-y-0 left-0 w-1/2 bg-gradient-to-r from-primary/5 to-transparent blur-3xl" />
        <div className="absolute inset-y-0 right-0 w-1/2 bg-gradient-to-l from-accent/5 to-transparent blur-3xl" />
      </div>
      <BlogPostHeader post={post} />
      <BlogPostContent post={post} />
      <RelatedPosts posts={relatedPosts} />
    </div>
  );
}
