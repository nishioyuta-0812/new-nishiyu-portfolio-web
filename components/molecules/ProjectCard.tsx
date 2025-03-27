import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

interface ProjectCardProps {
  project: {
    title: string;
    description: string;
    image: string;
    period: string;
    role: string;
    points: string[];
    tags: string[];
    links: {
      github?: string;
      demo?: string;
    };
  };
}

export const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <Card className="overflow-hidden border-primary/10 transition-all duration-300 hover:border-primary/30 hover:shadow-lg">
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        {/* Project Image */}
        <div className="relative h-64 md:h-full">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
        </div>

        {/* Project Details */}
        <div className="p-6">
          <CardHeader className="p-0 mb-4">
            <div className="flex items-center gap-4 mb-4">
              <CardTitle className="font-jp text-2xl">
                {project.title}
              </CardTitle>
            </div>
            <CardDescription className="text-base">
              {project.description}
            </CardDescription>
          </CardHeader>

          <CardContent className="p-0 space-y-6">
            {/* Period & Role */}
            <div className="space-y-2">
              <p className="text-sm">
                <span className="font-medium">期間:</span>{' '}
                <span className="text-muted-foreground">{project.period}</span>
              </p>
              <p className="text-sm">
                <span className="font-medium">役割:</span>{' '}
                <span className="text-muted-foreground">{project.role}</span>
              </p>
            </div>

            {/* Key Points */}
            <div className="space-y-2">
              <p className="font-medium text-sm">主な成果:</p>
              <ul className="list-disc list-inside space-y-1">
                {project.points.map((point, index) => (
                  <li key={index} className="text-sm text-muted-foreground">
                    {point}
                  </li>
                ))}
              </ul>
            </div>

            {/* Technologies */}
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary"
                >
                  {tag}
                </span>
              ))}
            </div>
          </CardContent>

          <CardFooter className="p-0 pt-6 flex gap-4">
            {project.links.github && (
              <Button variant="outline" size="sm" className="gap-2" asChild>
                <Link href={project.links.github} target="_blank">
                  <Github className="h-4 w-4" />
                  GitHub
                </Link>
              </Button>
            )}
            {project.links.demo && (
              <Button variant="outline" size="sm" className="gap-2" asChild>
                <Link href={project.links.demo} target="_blank">
                  <ExternalLink className="h-4 w-4" />
                  Demo
                </Link>
              </Button>
            )}
          </CardFooter>
        </div>
      </div>
    </Card>
  );
};