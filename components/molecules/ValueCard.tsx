import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { DivideIcon as LucideIcon } from 'lucide-react';

interface ValueCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

export const ValueCard = ({ icon: Icon, title, description }: ValueCardProps) => {
  return (
    <Card key={title} className="group border-primary/10 transition-all duration-300 hover:border-primary/30 hover:shadow-lg">
      <CardHeader>
        <div className="flex items-center gap-2">
          <div className="rounded-full bg-primary/10 p-2 transition-colors group-hover:bg-primary/20">
            <Icon className="h-5 w-5 text-primary" />
          </div>
          <CardTitle className="font-jp text-xl">
            {title}
          </CardTitle>
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground">{description}</p>
      </CardContent>
    </Card>
  );
};