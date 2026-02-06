import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { TagList } from '@/components/molecules/TagList';
import { PostMeta } from '@/components/molecules/PostMeta';
import Image from 'next/image';
import Link from 'next/link';
import { BlogPost } from '@/lib/contentful';

interface BlogCardProps {
  post: BlogPost;
  variant?: 'default' | 'featured';
}

export const BlogCard = ({ post, variant = 'default' }: BlogCardProps) => {
  if (variant === 'featured') {
    return (
      <Link href={`/blog/${post.id}`} className="group">
        <Card className="relative overflow-hidden border-[#1e90ff]/10 bg-[#0a0f1e]/60 backdrop-blur-sm transition-all duration-300 hover:border-[#1e90ff]/30 hover:shadow-[0_0_25px_rgba(30,144,255,0.1)]">
          {/* Corner accents */}
          <div className="absolute top-0 left-0 w-4 h-4 border-t border-l border-[#1e90ff]/20 group-hover:border-[#e8b830]/40 transition-colors duration-500 z-10" />
          <div className="absolute top-0 right-0 w-4 h-4 border-t border-r border-[#1e90ff]/20 group-hover:border-[#e8b830]/40 transition-colors duration-500 z-10" />
          <div className="absolute bottom-0 left-0 w-4 h-4 border-b border-l border-[#1e90ff]/20 group-hover:border-[#e8b830]/40 transition-colors duration-500 z-10" />
          <div className="absolute bottom-0 right-0 w-4 h-4 border-b border-r border-[#1e90ff]/20 group-hover:border-[#e8b830]/40 transition-colors duration-500 z-10" />

          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="relative h-64 md:h-full min-h-[250px]">
              <Image
                src={post.image}
                alt={post.title}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#060a14]/90 hidden md:block" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#060a14]/90 to-transparent md:hidden" />
              <div className="absolute inset-0 bg-[#1e90ff]/[0.02]" />
              <div className="absolute top-3 left-3 px-2 py-0.5 bg-[#0a0f1e]/80 border border-[#1e90ff]/20 rounded-sm">
                <span className="font-mono text-[10px] text-[#e8b830]/60 tracking-wider">FEATURED</span>
              </div>
            </div>
            <div className="p-6 md:p-8">
              <CardHeader className="p-0">
                <TagList tags={post.tags} />
                <CardTitle className="font-jp text-2xl md:text-3xl mb-2 text-white/90">
                  {post.title}
                </CardTitle>
                <CardDescription className="text-base text-[#1e90ff]/50">
                  {post.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="p-0 mt-6">
                <p className="text-[#1e90ff]/40 line-clamp-5 text-sm">
                  {post.content}
                </p>
              </CardContent>
              <PostMeta date={post.date} readTime={post.readTime} className="mt-6" />
            </div>
          </div>
        </Card>
      </Link>
    );
  }

  return (
    <Link href={`/blog/${post.id}`}>
      <Card className="group relative overflow-hidden border-[#1e90ff]/10 bg-[#0a0f1e]/60 backdrop-blur-sm transition-all duration-300 hover:border-[#1e90ff]/30 hover:shadow-[0_0_20px_rgba(30,144,255,0.08)]">
        {/* Corner accents */}
        <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-[#1e90ff]/20 group-hover:border-[#e8b830]/40 transition-colors duration-500 z-10" />
        <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-[#1e90ff]/20 group-hover:border-[#e8b830]/40 transition-colors duration-500 z-10" />
        <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-[#1e90ff]/20 group-hover:border-[#e8b830]/40 transition-colors duration-500 z-10" />
        <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-[#1e90ff]/20 group-hover:border-[#e8b830]/40 transition-colors duration-500 z-10" />

        <div className="relative h-48">
          <Image
            src={post.image}
            alt={post.title}
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-[#1e90ff]/[0.03]" />
        </div>
        <CardHeader>
          <TagList tags={post.tags} size="sm" />
          <CardTitle className="font-jp text-xl text-white/90">{post.title}</CardTitle>
          <CardDescription className="text-[#1e90ff]/50">{post.description}</CardDescription>
        </CardHeader>
        <CardContent>
          {post.content && (
            <p className="text-sm text-[#1e90ff]/40 line-clamp-3">
              {post.content}
            </p>
          )}
        </CardContent>
        <div className="px-6 pb-6">
          <PostMeta date={post.date} readTime={post.readTime} />
        </div>
      </Card>
    </Link>
  );
};
