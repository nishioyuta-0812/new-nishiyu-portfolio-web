import { PageLayout } from '@/components/template/PageLayout';
import { ProjectCard } from '@/components/molecules/ProjectCard';
import { ProjectsCallToAction } from '@/components/organisms/ProjectsCallToAction';

const projects = [
  {
    title: 'ECサイトリニューアル',
    description: '大手アパレルブランドのECサイトをNext.js/TypeScriptで刷新',
    image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8',
    tags: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Supabase'],
    period: '2023.04 - 2023.12',
    role: 'リードエンジニア',
    points: [
      'パフォーマンス最適化によりLighthouse スコア95点以上を達成',
      'マイクロサービスアーキテクチャの設計と実装',
      'チーム10名のマネジメントとコードレビュー',
    ],
    links: {
      github: 'https://github.com',
      demo: 'https://example.com',
    },
  },
  {
    title: '社内業務効率化システム',
    description: '申請承認ワークフローと文書管理機能を統合した業務システム',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40',
    tags: ['React', 'Node.js', 'PostgreSQL', 'Docker'],
    period: '2022.10 - 2023.03',
    role: 'フルスタックエンジニア',
    points: [
      '承認プロセスの自動化により処理時間を70%削減',
      'セキュアなドキュメント共有システムの実装',
      'レガシーシステムからのデータ移行を担当',
    ],
    links: {
      github: 'https://github.com',
    },
  },
  {
    title: 'AIチャットボット',
    description: 'GPT-4を活用したカスタマーサポート向けチャットボット',
    image: 'https://images.unsplash.com/photo-1531746790731-6c087fecd65a',
    tags: ['Python', 'FastAPI', 'OpenAI API', 'React'],
    period: '2022.07 - 2022.09',
    role: 'バックエンドエンジニア',
    points: [
      '問い合わせ対応時間を平均40%短縮',
      'カスタムプロンプトエンジニアリングの実装',
      '多言語対応機能の開発',
    ],
    links: {
      github: 'https://github.com',
      demo: 'https://example.com',
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
