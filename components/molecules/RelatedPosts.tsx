'use client'

import {
  Card,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import Image from 'next/image';
import { BlogPost } from '@/lib/contentful';

interface RelatedPostsProps {
  posts: BlogPost[];
}

export const RelatedPosts = ({ posts }: RelatedPostsProps) => {
  return (
    <section>
      <h2 className="font-jp text-2xl font-bold mb-8">関連記事</h2>
      <div className="grid gap-8 md:grid-cols-2">
        {posts.map((post) => (
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
  );
}; 
