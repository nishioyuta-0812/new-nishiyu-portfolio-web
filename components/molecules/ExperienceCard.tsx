import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Briefcase, GraduationCap } from 'lucide-react';

interface ExperienceCardProps {
  type: 'work' | 'education';
  title: string;
  organization: string;
  period: string;
  description: string;
}

export const ExperienceCard = ({
  type,
  title,
  organization,
  period,
  description,
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
        <p className="text-muted-foreground">{description}</p>
      </CardContent>
    </Card>
  );
};