interface PageTitleProps {
  title: string;
  description?: string;
  code?: string;
}

export const PageTitle = ({ title, description, code }: PageTitleProps) => {
  return (
    <section className="mb-24 text-center">
      {code && (
        <div className="flex items-center justify-center gap-3 mb-4">
          <div className="w-12 h-[1px] bg-gradient-to-r from-transparent to-[#1e90ff]/50" />
          <span className="font-mono text-xs text-[#e8b830]/60 tracking-widest">{code}</span>
          <div className="w-12 h-[1px] bg-gradient-to-l from-transparent to-[#1e90ff]/50" />
        </div>
      )}
      <h1 className="font-jp mb-6 text-5xl font-bold text-white/90 seed-text-glow tracking-wider">
        {title}
      </h1>
      {description && (
        <p className="mx-auto max-w-[42rem] text-xl leading-relaxed text-[#1e90ff]/50">
          {description}
        </p>
      )}
    </section>
  );
};
