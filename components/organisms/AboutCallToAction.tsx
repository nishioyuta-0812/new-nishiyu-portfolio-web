import { Button } from '@/components/ui/button';
import Link from 'next/link';

export const AboutCallToAction = () => {
  return (
    <section className="relative text-center">
      <div className="group relative rounded-sm border border-[#1e90ff]/10 bg-[#0a0f1e]/40 backdrop-blur-sm p-12 md:p-16 overflow-hidden transition-all duration-500 hover:border-[#1e90ff]/20">
        {/* Corner accents */}
        <div className="absolute top-0 left-0 w-6 h-6 border-t border-l border-[#1e90ff]/20 group-hover:border-[#e8b830]/40 transition-colors duration-500" />
        <div className="absolute top-0 right-0 w-6 h-6 border-t border-r border-[#1e90ff]/20 group-hover:border-[#e8b830]/40 transition-colors duration-500" />
        <div className="absolute bottom-0 left-0 w-6 h-6 border-b border-l border-[#1e90ff]/20 group-hover:border-[#e8b830]/40 transition-colors duration-500" />
        <div className="absolute bottom-0 right-0 w-6 h-6 border-b border-r border-[#1e90ff]/20 group-hover:border-[#e8b830]/40 transition-colors duration-500" />

        <div className="flex items-center justify-center gap-3 mb-6">
          <div className="w-8 h-[1px] bg-gradient-to-r from-transparent to-[#e8b830]/40" />
          <span className="font-mono text-[10px] text-[#e8b830]/50 tracking-widest">MISSION REQUEST</span>
          <div className="w-8 h-[1px] bg-gradient-to-l from-transparent to-[#e8b830]/40" />
        </div>

        <h2 className="font-jp mb-6 text-3xl font-bold text-white/90 seed-text-glow">
          一緒に素晴らしいものを作りましょう
        </h2>
        <p className="mb-10 text-lg text-[#1e90ff]/50">
          新しいプロジェクトや機会についてのご相談をお待ちしています。
        </p>
        <div className="flex justify-center gap-4 flex-col md:flex-row">
          <Button
            size="lg"
            className="bg-[#1e90ff]/20 border border-[#1e90ff]/30 text-[#1e90ff] hover:bg-[#1e90ff]/30 hover:border-[#1e90ff]/50 hover:text-white text-lg px-8 transition-all duration-300"
            asChild
          >
            <Link href="/contact">お問い合わせ</Link>
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-[#1e90ff]/20 text-[#1e90ff]/60 hover:bg-[#1e90ff]/10 hover:border-[#1e90ff]/40 hover:text-[#1e90ff] text-lg px-8"
            asChild
          >
            <Link href="/projects">プロジェクトを見る</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};
