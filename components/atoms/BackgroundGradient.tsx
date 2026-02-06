export const BackgroundGradient = () => {
  return (
    <div className="absolute inset-0 -z-10">
      <div className="absolute inset-y-0 left-0 w-1/2 bg-gradient-to-r from-[#1e90ff]/[0.03] to-transparent blur-3xl" />
      <div className="absolute inset-y-0 right-0 w-1/2 bg-gradient-to-l from-[#1e90ff]/[0.02] to-transparent blur-3xl" />
    </div>
  );
};
