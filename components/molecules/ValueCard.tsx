import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { LucideIcon } from 'lucide-react';

interface ValueCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

export const ValueCard = ({ icon: Icon, title, description }: ValueCardProps) => {
  return (
    <Card className="group relative border-[#1e90ff]/10 bg-[#0a0f1e]/60 backdrop-blur-sm transition-all duration-300 hover:border-[#1e90ff]/30 hover:shadow-[0_0_20px_rgba(30,144,255,0.08)] overflow-hidden">
      {/* Corner accents */}
      <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-[#1e90ff]/20 group-hover:border-[#e8b830]/40 transition-colors duration-500" />
      <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-[#1e90ff]/20 group-hover:border-[#e8b830]/40 transition-colors duration-500" />
      <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-[#1e90ff]/20 group-hover:border-[#e8b830]/40 transition-colors duration-500" />
      <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-[#1e90ff]/20 group-hover:border-[#e8b830]/40 transition-colors duration-500" />

      <CardHeader>
        <div className="flex items-center gap-3">
          <div className="rounded border border-[#1e90ff]/20 bg-[#1e90ff]/5 p-2 transition-all duration-300 group-hover:bg-[#1e90ff]/10 group-hover:border-[#1e90ff]/30">
            <Icon className="h-4 w-4 text-[#1e90ff]/70 group-hover:text-[#1e90ff]" />
          </div>
          <CardTitle className="font-jp text-lg text-white/90">{title}</CardTitle>
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-[#1e90ff]/50 text-sm leading-relaxed">{description}</p>
      </CardContent>
    </Card>
  );
};
