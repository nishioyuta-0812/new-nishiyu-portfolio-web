'use client'

import {
  Card,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import Image from 'next/image';
import Link from 'next/link';
import { BlogPost } from '@/lib/contentful';

interface RelatedPostsProps {
  posts: BlogPost[];
}

export const RelatedPosts = ({ posts }: RelatedPostsProps) => {
  return (
    <section>
      <div className="flex items-center gap-3 mb-8">
        <div className="w-8 h-[1px] bg-[#1e90ff]/30" />
        <span className="font-mono text-xs text-[#e8b830]/50 tracking-wider">RELATED ENTRIES</span>
        <div className="flex-1 h-[1px] bg-[#1e90ff]/10" />
      </div>
      <div className="grid gap-8 md:grid-cols-2">
        {posts.map((post) => (
          <Link key={post.id} href={`/blog/${post.id}`}>
            <Card className="group relative overflow-hidden border-[#1e90ff]/10 bg-[#0a0f1e]/60 backdrop-blur-sm transition-all duration-300 hover:border-[#1e90ff]/30 hover:shadow-[0_0_20px_rgba(30,144,255,0.08)]">
              {/* Corner accents */}
              <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-[#1e90ff]/20 group-hover:border-[#e8b830]/40 transition-colors duration-500 z-10" />
              <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-[#1e90ff]/20 group-hover:border-[#e8b830]/40 transition-colors duration-500 z-10" />
              <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-[#1e90ff]/20 group-hover:border-[#e8b830]/40 transition-colors duration-500 z-10" />
              <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-[#1e90ff]/20 group-hover:border-[#e8b830]/40 transition-colors duration-500 z-10" />

              <div className="grid grid-cols-3 gap-4">
                <div className="relative h-full min-h-[120px]">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-[#1e90ff]/[0.03]" />
                </div>
                <div className="col-span-2 p-4">
                  <CardHeader className="p-0">
                    <div className="flex flex-wrap gap-1 mb-2">
                      {post.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-sm border border-[#1e90ff]/15 bg-[#1e90ff]/5 px-2 py-0.5 text-[10px] font-mono text-[#1e90ff]/60"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <CardTitle className="font-jp text-lg text-white/90 line-clamp-2">
                      {post.title}
                    </CardTitle>
                  </CardHeader>
                  <CardFooter className="p-0 mt-2">
                    <div className="flex items-center gap-4 text-xs text-[#1e90ff]/40 font-mono">
                      <time dateTime={post.date}>
                        {new Date(post.date).toLocaleDateString('ja-JP')}
                      </time>
                      <span>{post.readTime}</span>
                    </div>
                  </CardFooter>
                </div>
              </div>
            </Card>
          </Link>
        ))}
      </div>
    </section>
  );
};
