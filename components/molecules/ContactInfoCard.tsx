import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { DivideIcon as LucideIcon } from 'lucide-react';

interface ContactInfoCardProps {
  icon: typeof LucideIcon;
  title: string;
  children: React.ReactNode;
}

export const ContactInfoCard = ({ icon: Icon, title, children }: ContactInfoCardProps) => {
  return (
    <Card className="border-primary/10 transition-all duration-300 hover:border-primary/30 hover:shadow-lg">
      <CardHeader>
        <div className="flex items-center gap-2">
          <div className="rounded-full bg-primary/10 p-2">
            <Icon className="h-5 w-5 text-primary" />
          </div>
          <CardTitle className="font-jp text-lg">{title}</CardTitle>
        </div>
      </CardHeader>
      <CardContent>
        <CardDescription>{children}</CardDescription>
      </CardContent>
    </Card>
  );
};