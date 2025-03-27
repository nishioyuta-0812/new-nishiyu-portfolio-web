export const BackgroundGradient = () => {
  return (
    <div className="absolute inset-0 -z-10">
      <div className="absolute inset-y-0 left-0 w-1/2 bg-gradient-to-r from-primary/5 to-transparent blur-3xl" />
      <div className="absolute inset-y-0 right-0 w-1/2 bg-gradient-to-l from-accent/5 to-transparent blur-3xl" />
    </div>
  );
};