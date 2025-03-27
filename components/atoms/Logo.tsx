import { Code2 } from 'lucide-react';

export const Logo = () => {
  return (
    <div className="flex items-center gap-2">
      <Code2 className="w-6 h-6 text-primary" />
      <span className="font-bold text-lg">Portfolio</span>
    </div>
  );
};