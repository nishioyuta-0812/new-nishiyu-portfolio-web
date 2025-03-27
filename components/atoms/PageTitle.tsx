interface PageTitleProps {
  title: string;
  description?: string;
}

export const PageTitle = ({ title, description }: PageTitleProps) => {
  return (
    <section className="mb-24 text-center">
      <h1 className="font-jp mb-6 text-5xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
        {title}
      </h1>
      {description && (
        <p className="mx-auto max-w-[42rem] text-xl leading-relaxed text-muted-foreground">
          {description}
        </p>
      )}
    </section>
  );
};