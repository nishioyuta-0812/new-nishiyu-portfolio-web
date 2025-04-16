import { PageLayout } from '@/components/template/PageLayout';
import { ProjectCard } from '@/components/molecules/ProjectCard';
import { ProjectsCallToAction } from '@/components/organisms/ProjectsCallToAction';

const projects = [
  {
    title: '謎解き情報サイトの開発',
    description: '謎解き情報サイト(ナゾヒロバ)の開発・運用を担当。',
    image: 'https://images.ctfassets.net/abbf825q640s/5x9JQvCTor3XfYxA52ctQC/1c3c4309a301b5e5bad2f008058c050b/ogp.png',
    tags: ['Nuxt.js', 'TypeScript', 'firebase', 'Supabase'],
    period: '2022.08 - 現在',
    role: 'フルスタックエンジニア',
    points: [
      'Nuxt.jsを使用したフロントエンド開発',
      'Nuxt2からNuxt3への移行',
    ],
    links: {
      demo: 'https://nazohiroba.com/',
    },
  },
  {
    title: 'スマホアプリゲームの開発',
    description: 'スマホアプリゲーム Tokotyuの開発を担当。※現在は入手不可',
    image: 'https://images.ctfassets.net/8xh65zd1fi2o/3qQSeZy3I7oH2qwaahWqqm/0f44810aa3f255d461702285f5124826/____________.png',
    tags: ['Unity', 'C#'],
    period: '2022.10 - 2023.03',
    role: 'フルスタックエンジニア',
    points: [
      'Unityを使用したゲーム開発',
      'C#を使用したゲームロジックの実装',
    ],
    links: {
    },
  },
];

export default function Projects() {
  return (
    <PageLayout
      title="プロジェクト"
      backgroundImage="/backgrounds/projects-bg-anime.jpeg"
      description="これまでに手がけた主要なプロジェクトをご紹介します。各プロジェクトで技術的な課題解決と価値提供にこだわってきました。"
    >
      {/* Projects Grid */}
      <section className="space-y-12 mb-24">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </section>

      {/* Call to Action */}
      <ProjectsCallToAction />
    </PageLayout>
  );
}
