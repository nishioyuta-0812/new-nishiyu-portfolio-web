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
    <Card className="group border-primary/10 transition-all duration-300 hover:border-primary/30 hover:shadow-lg">
      <CardHeader>
        <div className="flex items-center gap-2">
          <div className="rounded-full bg-primary/10 p-2 transition-colors group-hover:bg-primary/20">
            <Icon className="h-5 w-5 text-primary" />
          </div>
          <CardTitle className="font-jp text-xl">{title}</CardTitle>
        </div>
        <CardDescription>
          {organization} | {period}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground mb-2">{description}</p>
        {tags.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {tags.map((tag, index) => (
              <span
                key={index}
                className="rounded-full bg-primary/10 px-3 py-1 text-sm text-primary"
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