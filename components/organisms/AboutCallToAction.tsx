import { Button } from '@/components/ui/button';
import Link from 'next/link';

export const AboutCallToAction = () => {
  return (
    <section className="relative text-center">
      <div className="rounded-3xl bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10 p-12 md:p-16 backdrop-blur-sm">
        <div className="absolute inset-0 -z-10 rounded-3xl bg-white/5" />
        <h2 className="font-jp mb-6 text-3xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
          一緒に素晴らしいものを作りましょう
        </h2>
        <p className="mb-10 text-lg text-muted-foreground">
          新しいプロジェクトや機会についてのご相談をお待ちしています。
        </p>
        <div className="flex justify-center gap-4">
          <Button size="lg" className="bg-primary/90 hover:bg-primary text-lg px-8" asChild>
            <Link href="/contact">お問い合わせ</Link>
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-primary/20 hover:bg-primary/5 text-lg px-8"
            asChild
          >
            <Link href="/projects">プロジェクトを見る</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};