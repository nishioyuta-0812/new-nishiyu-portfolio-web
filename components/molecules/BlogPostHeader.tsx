'use client'

import { Calendar, Clock } from 'lucide-react';
import Image from 'next/image';
import { BlogPost } from '@/lib/contentful';

interface BlogPostHeaderProps {
  post: BlogPost;
}

export const BlogPostHeader = ({ post }: BlogPostHeaderProps) => {
  return (
    <>
      {/* Article Header */}
      <header className="mb-12 text-center">
        <div className="flex justify-center gap-2 mb-6">
          {post.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-sm border border-[#1e90ff]/15 bg-[#1e90ff]/5 px-3 py-1 text-xs font-mono text-[#1e90ff]/60"
            >
              {tag}
            </span>
          ))}
        </div>
        <h1 className="font-jp mb-6 text-4xl md:text-5xl font-bold text-white/90 seed-text-glow tracking-wider">
          {post.title}
        </h1>
        <p className="mx-auto max-w-[42rem] text-xl leading-relaxed text-[#1e90ff]/50 mb-6">
          {post.description}
        </p>
        <div className="flex items-center justify-center gap-6">
          <div className="flex items-center gap-2 text-sm text-[#1e90ff]/40">
            <Calendar className="h-4 w-4" />
            <time dateTime={post.date} className="font-mono text-xs">
              {new Date(post.date).toLocaleDateString('ja-JP')}
            </time>
          </div>
          <div className="flex items-center gap-2 text-sm text-[#1e90ff]/40">
            <Clock className="h-4 w-4" />
            <span className="font-mono text-xs">{post.readTime}</span>
          </div>
        </div>
      </header>

      {/* Main Image */}
      <div className="relative mb-12 aspect-[21/9] overflow-hidden rounded-sm border border-[#1e90ff]/10">
        <Image
          src={post.image}
          alt={post.title}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-[#1e90ff]/[0.02]" />
        {/* Corner accents */}
        <div className="absolute top-0 left-0 w-4 h-4 border-t border-l border-[#1e90ff]/30 z-10" />
        <div className="absolute top-0 right-0 w-4 h-4 border-t border-r border-[#1e90ff]/30 z-10" />
        <div className="absolute bottom-0 left-0 w-4 h-4 border-b border-l border-[#1e90ff]/30 z-10" />
        <div className="absolute bottom-0 right-0 w-4 h-4 border-b border-r border-[#1e90ff]/30 z-10" />
      </div>
    </>
  );
};
