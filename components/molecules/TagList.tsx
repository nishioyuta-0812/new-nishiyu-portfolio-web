interface TagListProps {
  tags: string[];
  size?: 'sm' | 'md';
}

export const TagList = ({ tags, size = 'md' }: TagListProps) => {
  return (
    <div className="flex flex-wrap gap-2">
      {tags.map((tag) => (
        <span
          key={tag}
          className={`rounded-full bg-primary/10 px-${size === 'sm' ? '2' : '3'} py-1 text-xs font-medium text-primary`}
        >
          {tag}
        </span>
      ))}
    </div>
  );
};