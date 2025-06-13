import { getAllPosts, BlogPost } from '@/lib/contentful';
import BlogPageLayout from '@/components/template/BlogPageLayout';

export default async function Blog() {
  let blogPosts: BlogPost[];
  
  try {
    blogPosts = await getAllPosts();
  } catch (error) {
    console.error('Failed to fetch blog posts:', error);
    blogPosts = [];
  }

  return <BlogPageLayout blogPosts={blogPosts} />;
}
