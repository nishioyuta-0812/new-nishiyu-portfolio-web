interface TagListProps {
  tags: string[];
  size?: 'sm' | 'md';
}

export const TagList = ({ tags, size = 'md' }: TagListProps) => {
  return (
    <div className="flex flex-wrap gap-1.5">
      {tags.map((tag) => (
        <span
          key={tag}
          className={`rounded-sm border border-[#1e90ff]/15 bg-[#1e90ff]/5 ${size === 'sm' ? 'px-2' : 'px-3'} py-0.5 text-[11px] text-[#1e90ff]/60 font-mono`}
        >
          {tag}
        </span>
      ))}
    </div>
  );
};
