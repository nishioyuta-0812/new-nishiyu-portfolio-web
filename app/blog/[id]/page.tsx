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

  const allPosts = await getAllPosts();
  const relatedPosts = allPosts
    .filter((p) => p.id !== post.id)
    .slice(0, 2);

  return (
    <div className="relative bg-[#060a14] overflow-hidden">
      <div className="fixed inset-0 pointer-events-none opacity-[0.02]"
        style={{
          backgroundImage: `linear-gradient(rgba(30, 144, 255, 1) 1px, transparent 1px), linear-gradient(90deg, rgba(30, 144, 255, 1) 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }}
      />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 md:py-20 z-10">
        <BlogPostHeader post={post} />
        <BlogPostContent post={post} />
        <RelatedPosts posts={relatedPosts} />
      </div>
    </div>
  );
}
