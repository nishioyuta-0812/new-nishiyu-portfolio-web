'use client'

import ReactMarkdown from 'react-markdown';
import { BlogPost } from '@/lib/contentful';

interface BlogPostContentProps {
  post: BlogPost;
}

export const BlogPostContent = ({ post }: BlogPostContentProps) => {
  return (
    <article className="prose prose-neutral dark:prose-invert mx-auto mb-24">
      <ReactMarkdown>{post.content}</ReactMarkdown>
    </article>
  );
}; 
