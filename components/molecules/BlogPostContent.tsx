'use client'

import ReactMarkdown from 'react-markdown';
import { BlogPost } from '@/lib/contentful';

interface BlogPostContentProps {
  post: BlogPost;
}

export const BlogPostContent = ({ post }: BlogPostContentProps) => {
  return (
    <article className="prose prose-neutral dark:prose-invert mx-auto mb-24 prose-headings:text-white/90 prose-p:text-[#1e90ff]/50 prose-a:text-[#1e90ff] prose-strong:text-white/80 prose-code:text-[#e8b830]/70 prose-pre:bg-[#0a0f1e] prose-pre:border prose-pre:border-[#1e90ff]/10">
      <ReactMarkdown>{post.content}</ReactMarkdown>
    </article>
  );
};
