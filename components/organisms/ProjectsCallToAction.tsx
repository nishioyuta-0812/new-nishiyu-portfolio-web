import { Button } from '@/components/ui/button';
import Link from 'next/link';

export const ProjectsCallToAction = () => {
  return (
    <section className="relative text-center">
      <div className="rounded-3xl bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10 p-12 md:p-16 backdrop-blur-sm">
        <div className="absolute inset-0 -z-10 rounded-3xl bg-white/5" />
        <h2 className="font-jp mb-6 text-3xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
          一緒に新しいプロジェクトを始めませんか？
        </h2>
        <p className="mb-10 text-lg text-muted-foreground">
          あなたのプロジェクトについて、お気軽にご相談ください。
        </p>
        <Button size="lg" className="bg-primary/90 hover:bg-primary text-lg px-8" asChild>
          <Link href="/contact">お問い合わせ</Link>
        </Button>
      </div>
    </section>
  );
}