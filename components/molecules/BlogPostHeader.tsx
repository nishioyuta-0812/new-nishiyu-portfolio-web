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
    </>
  );
}; 
