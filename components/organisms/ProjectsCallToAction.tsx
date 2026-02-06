import { Button } from '@/components/ui/button';
import Link from 'next/link';

export const ProjectsCallToAction = () => {
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
          <span className="font-mono text-[10px] text-[#e8b830]/50 tracking-widest">NEW MISSION</span>
          <div className="w-8 h-[1px] bg-gradient-to-l from-transparent to-[#e8b830]/40" />
        </div>

        <h2 className="font-jp mb-6 text-3xl font-bold text-white/90 seed-text-glow">
          一緒に新しいプロジェクトを始めませんか？
        </h2>
        <p className="mb-10 text-lg text-[#1e90ff]/50">
          あなたのプロジェクトについて、お気軽にご相談ください。
        </p>
        <Button
          size="lg"
          className="bg-[#1e90ff]/20 border border-[#1e90ff]/30 text-[#1e90ff] hover:bg-[#1e90ff]/30 hover:border-[#1e90ff]/50 hover:text-white text-lg px-8 transition-all duration-300"
          asChild
        >
          <Link href="/contact">お問い合わせ</Link>
        </Button>
      </div>
    </section>
  );
}
