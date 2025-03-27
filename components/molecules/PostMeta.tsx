import { Calendar, Clock } from 'lucide-react';

interface PostMetaProps {
  date: string;
  readTime?: string;
  className?: string;
}

export const PostMeta = ({ date, readTime, className = '' }: PostMetaProps) => {
  return (
    <div className={`flex items-center gap-4 ${className}`}>
      <div className="flex items-center gap-2 text-sm text-muted-foreground">
        <Calendar className="h-4 w-4" />
        <time dateTime={date}>
          {new Date(date).toLocaleDateString('ja-JP')}
        </time>
      </div>
      {readTime && (
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <Clock className="h-4 w-4" />
          <span>{readTime}</span>
        </div>
      )}
    </div>
  );
};