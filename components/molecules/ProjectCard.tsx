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
    <Card className="group relative overflow-hidden border-[#1e90ff]/10 bg-[#0a0f1e]/60 backdrop-blur-sm transition-all duration-300 hover:border-[#1e90ff]/30 hover:shadow-[0_0_25px_rgba(30,144,255,0.1)]">
      {/* Corner accents */}
      <div className="absolute top-0 left-0 w-4 h-4 border-t border-l border-[#1e90ff]/20 group-hover:border-[#e8b830]/40 transition-colors duration-500 z-10" />
      <div className="absolute top-0 right-0 w-4 h-4 border-t border-r border-[#1e90ff]/20 group-hover:border-[#e8b830]/40 transition-colors duration-500 z-10" />
      <div className="absolute bottom-0 left-0 w-4 h-4 border-b border-l border-[#1e90ff]/20 group-hover:border-[#e8b830]/40 transition-colors duration-500 z-10" />
      <div className="absolute bottom-0 right-0 w-4 h-4 border-b border-r border-[#1e90ff]/20 group-hover:border-[#e8b830]/40 transition-colors duration-500 z-10" />

      <div className="grid grid-cols-1 gap-0 md:grid-cols-2">
        {/* Project Image */}
        <div className="relative h-64 md:h-full min-h-[250px]">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#060a14]/90 hidden md:block" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#060a14]/90 to-transparent md:hidden" />
          {/* HUD overlay on image */}
          <div className="absolute inset-0 bg-[#1e90ff]/[0.02]" />
          <div className="absolute top-3 left-3 px-2 py-0.5 bg-[#0a0f1e]/80 border border-[#1e90ff]/20 rounded-sm">
            <span className="font-mono text-[10px] text-[#e8b830]/60 tracking-wider">PROJECT FILE</span>
          </div>
        </div>

        {/* Project Details */}
        <div className="p-6">
          <CardHeader className="p-0 mb-4">
            <CardTitle className="font-jp text-xl text-white/90 mb-2">
              {project.title}
            </CardTitle>
            <CardDescription className="text-[#1e90ff]/50 text-sm">
              {project.description}
            </CardDescription>
          </CardHeader>

          <CardContent className="p-0 space-y-4">
            <div className="space-y-1.5">
              <p className="text-xs">
                <span className="font-mono text-[#e8b830]/40 mr-2">PERIOD:</span>
                <span className="text-[#1e90ff]/60">{project.period}</span>
              </p>
              <p className="text-xs">
                <span className="font-mono text-[#e8b830]/40 mr-2">ROLE:</span>
                <span className="text-[#1e90ff]/60">{project.role}</span>
              </p>
            </div>

            <div className="space-y-1.5">
              <p className="font-mono text-[10px] text-[#e8b830]/40 tracking-wider">KEY RESULTS:</p>
              <ul className="space-y-1">
                {project.points.map((point, index) => (
                  <li key={index} className="text-xs text-[#1e90ff]/50 flex items-start gap-2">
                    <span className="text-[#1e90ff]/30 mt-0.5">▸</span>
                    {point}
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-wrap gap-1.5">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-sm border border-[#1e90ff]/15 bg-[#1e90ff]/5 px-2 py-0.5 text-[11px] text-[#1e90ff]/60 font-mono"
                >
                  {tag}
                </span>
              ))}
            </div>
          </CardContent>

          <CardFooter className="p-0 pt-4 flex gap-3">
            {project.links.github && (
              <Button
                variant="outline"
                size="sm"
                className="gap-2 border-[#1e90ff]/20 text-[#1e90ff]/60 hover:bg-[#1e90ff]/10 hover:border-[#1e90ff]/40 hover:text-[#1e90ff] text-xs"
                asChild
              >
                <Link href={project.links.github} target="_blank">
                  <Github className="h-3.5 w-3.5" />
                  GitHub
                </Link>
              </Button>
            )}
            {project.links.demo && (
              <Button
                variant="outline"
                size="sm"
                className="gap-2 border-[#1e90ff]/20 text-[#1e90ff]/60 hover:bg-[#1e90ff]/10 hover:border-[#1e90ff]/40 hover:text-[#1e90ff] text-xs"
                asChild
              >
                <Link href={project.links.demo} target="_blank">
                  <ExternalLink className="h-3.5 w-3.5" />
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
