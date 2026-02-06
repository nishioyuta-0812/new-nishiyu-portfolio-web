import { Calendar, Clock } from 'lucide-react';

interface PostMetaProps {
  date: string;
  readTime?: string;
  className?: string;
}

export const PostMeta = ({ date, readTime, className = '' }: PostMetaProps) => {
  return (
    <div className={`flex items-center gap-4 ${className}`}>
      <div className="flex items-center gap-2 text-xs text-[#1e90ff]/40">
        <Calendar className="h-3.5 w-3.5" />
        <time dateTime={date} className="font-mono">
          {new Date(date).toLocaleDateString('ja-JP')}
        </time>
      </div>
      {readTime && (
        <div className="flex items-center gap-2 text-xs text-[#1e90ff]/40">
          <Clock className="h-3.5 w-3.5" />
          <span className="font-mono">{readTime}</span>
        </div>
      )}
    </div>
  );
};
