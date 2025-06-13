# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

- `npm run dev` - Start development server
- `npm run build` - Build for production (static export)
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Architecture Overview

This is a Next.js portfolio website for a software engineer with static export configuration. The site integrates with Contentful CMS for blog content management.

### Key Technologies
- **Next.js 13.5.1** with App Router
- **TypeScript** for type safety
- **Tailwind CSS** for styling with custom theme
- **shadcn/ui** component library
- **Contentful** as headless CMS for blog posts
- **Static export** configuration for deployment

### Component Architecture

The project follows atomic design principles:

- **`components/atoms/`** - Basic UI elements (BackgroundGradient, Logo, PageTitle)
- **`components/molecules/`** - Composite components (BlogPostHeader, ContactInfoCard, ExperienceCard, Navigation, etc.)
- **`components/organisms/`** - Complex sections (Header, Footer, ContactForm, BlogCard, etc.)
- **`components/template/`** - Page layout templates (PageLayout)
- **`components/ui/`** - shadcn/ui components

### Data Management

- **`lib/contentful.ts`** - Contentful client configuration and data fetching functions
  - `getAllPosts()` - Fetch all blog posts
  - `getPostById(id)` - Fetch single blog post by ID
- **`lib/utils.ts`** - Utility functions (cn for class merging)

Environment variables required:
- `CONTENTFUL_SPACE_ID` - Contentful space identifier
- `CONTENTFUL_ACCESS_TOKEN` - Contentful API access token

### Routing Structure

- **`/`** - Homepage with hero, skills overview, and CTA
- **`/about`** - About page
- **`/blog`** - Blog listing page
- **`/blog/[id]`** - Individual blog post pages
- **`/contact`** - Contact page with form
- **`/projects`** - Projects showcase
- **`/skills`** - Skills detailed view

### Styling Configuration

- **Dark theme forced** via ThemeProvider
- **CSS variables** for theme colors
- **Japanese font support** with Noto Sans JP
- **Custom animations** and gradients throughout
- **Responsive design** with mobile-first approach

### Content Management

Blog posts are managed through Contentful with the following structure:
- Content type: `blog`
- Fields: title, thumbnail, readTime, content
- Rich text content support via `@contentful/rich-text-react-renderer`

### Static Export Configuration

The site is configured for static export (`output: 'export'`) with:
- Unoptimized images for static hosting
- ESLint disabled during builds
- All pages pre-rendered at build time