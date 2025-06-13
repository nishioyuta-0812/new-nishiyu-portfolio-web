import { createClient } from 'contentful';
import { Document } from '@contentful/rich-text-types';

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID!,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN!,
});

export interface BlogPost {
  id: string;
  title: string;
  description: string;
  image: string;
  date: string;
  readTime: string;
  tags: string[];
  content: string;
}

export async function getAllPosts(): Promise<BlogPost[]> {
  try {
    const response = await client.getEntries({
      content_type: 'blog',
    });

    return response.items.map((item: any) => ({
      id: item.sys.id,
      title: item.fields.title || 'Untitled',
      description: item.fields.description || '',
      image: item.fields.thumbnail?.fields?.file?.url || '',
      date: item.sys.updatedAt.substring(0,10),
      readTime: item.fields.readTime || '5分',
      tags: item.fields.tags || [],
      content: item.fields.content || '',
    }));
  } catch (error) {
    console.error('Error fetching posts from Contentful:', error);
    return [];
  }
}

export async function getPostById(id: string): Promise<BlogPost | null> {
  try {
    const response = await client.getEntry(id);
    const item = response as any;
    
    return {
      id: item.sys.id,
      title: item.fields.title || 'Untitled',
      description: item.fields.description || '',
      image: item.fields.thumbnail?.fields?.file?.url || '',
      date: item.sys.updatedAt.substring(0,10),
      readTime: item.fields.readTime || '5分',
      tags: item.fields.tags || [],
      content: item.fields.content || '',
    };
  } catch (error) {
    console.error('Error fetching post by ID from Contentful:', error);
    return null;
  }
} 
