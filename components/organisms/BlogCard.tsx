import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { TagList } from '@/components/molecules/TagList';
import { PostMeta } from '@/components/molecules/PostMeta';
import Image from 'next/image';
import Link from 'next/link';

interface BlogCardProps {
  post: {
    id: string | number;
    title: string;
    description: string;
    image: string;
    date: string;
    readTime: string;
    tags: string[];
    excerpt?: string;
  };
  variant?: 'default' | 'featured';
}

export const BlogCard = ({ post, variant = 'default' }: BlogCardProps) => {
  if (variant === 'featured') {
    return (
      <Card className="overflow-hidden border-primary/10 transition-all duration-300 hover:border-primary/30 hover:shadow-lg">
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="relative h-64 md:h-full">
            <Image
              src={post.image}
              alt={post.title}
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
          </div>
          <div className="p-6 md:p-8">
            <CardHeader className="p-0">
              <TagList tags={post.tags} />
              <CardTitle className="font-jp text-2xl md:text-3xl mb-2">
                {post.title}
              </CardTitle>
              <CardDescription className="text-base">
                {post.description}
              </CardDescription>
            </CardHeader>
            <CardContent className="p-0 mt-6">
              <Link href={`/blog/${post.id}`} className="group">
                <p className="text-muted-foreground group-hover:text-muted-foreground/80">
                  {post.excerpt}
                </p>
              </Link>
            </CardContent>
            <PostMeta date={post.date} readTime={post.readTime} className="mt-6" />
          </div>
        </div>
      </Card>
    );
  }

  return (
    <Link href={`/blog/${post.id}`}>
      <Card className="overflow-hidden border-primary/10 transition-all duration-300 hover:border-primary/30 hover:shadow-lg">
        <div className="relative h-48">
          <Image
            src={post.image}
            alt={post.title}
            fill
            className="object-cover"
          />
        </div>
        <CardHeader>
          <TagList tags={post.tags} size="sm" />
          <CardTitle className="font-jp text-xl">{post.title}</CardTitle>
          <CardDescription>{post.description}</CardDescription>
        </CardHeader>
        <CardContent>
          {post.excerpt && (
            <p className="text-sm text-muted-foreground line-clamp-3">
              {post.excerpt}
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