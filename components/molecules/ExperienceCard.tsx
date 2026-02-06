import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Briefcase, GraduationCap } from 'lucide-react';

interface ExperienceCardProps {
  type: 'work' | 'education';
  title: string;
  organization: string;
  period: string;
  description: string;
  tags?: string[];
}

export const ExperienceCard = ({
  type,
  title,
  organization,
  period,
  description,
  tags = [],
}: ExperienceCardProps) => {
  const Icon = type === 'work' ? Briefcase : GraduationCap;

  return (
    <Card className="group relative border-[#1e90ff]/10 bg-[#0a0f1e]/60 backdrop-blur-sm transition-all duration-300 hover:border-[#1e90ff]/30 hover:shadow-[0_0_20px_rgba(30,144,255,0.08)] overflow-hidden">
      {/* Corner accents */}
      <div className="absolute top-0 left-0 w-3 h-3 border-t border-l border-[#1e90ff]/20 group-hover:border-[#e8b830]/40 transition-colors duration-500" />
      <div className="absolute top-0 right-0 w-3 h-3 border-t border-r border-[#1e90ff]/20 group-hover:border-[#e8b830]/40 transition-colors duration-500" />
      <div className="absolute bottom-0 left-0 w-3 h-3 border-b border-l border-[#1e90ff]/20 group-hover:border-[#e8b830]/40 transition-colors duration-500" />
      <div className="absolute bottom-0 right-0 w-3 h-3 border-b border-r border-[#1e90ff]/20 group-hover:border-[#e8b830]/40 transition-colors duration-500" />

      <CardHeader>
        <div className="flex items-center gap-3">
          <div className="rounded border border-[#1e90ff]/20 bg-[#1e90ff]/5 p-2 transition-all duration-300 group-hover:bg-[#1e90ff]/10 group-hover:border-[#1e90ff]/30">
            <Icon className="h-4 w-4 text-[#1e90ff]/70 group-hover:text-[#1e90ff]" />
          </div>
          <div className="flex-1">
            <CardTitle className="font-jp text-lg text-white/90">{title}</CardTitle>
            <CardDescription className="text-[#1e90ff]/40 flex items-center gap-2 mt-1">
              <span>{organization}</span>
              <span className="text-[#e8b830]/40">|</span>
              <span className="font-mono text-xs text-[#e8b830]/50">{period}</span>
            </CardDescription>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-[#1e90ff]/50 text-sm mb-3 leading-relaxed">{description}</p>
        {tags.length > 0 && (
          <div className="flex flex-wrap gap-1.5">
            {tags.map((tag, index) => (
              <span
                key={index}
                className="rounded-sm border border-[#1e90ff]/15 bg-[#1e90ff]/5 px-2 py-0.5 text-[11px] text-[#1e90ff]/60 font-mono transition-colors duration-200 hover:border-[#1e90ff]/30 hover:text-[#1e90ff]/80"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  );
};
