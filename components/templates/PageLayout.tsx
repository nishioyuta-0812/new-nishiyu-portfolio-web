import { BackgroundGradient } from '@/components/atoms/BackgroundGradient';
import { PageTitle } from '@/components/atoms/PageTitle';

interface PageLayoutProps {
  title: string;
  description?: string;
  backgroundImage?: string;
  children: React.ReactNode;
}

export const PageLayout = ({ title, description, backgroundImage, children }: PageLayoutProps) => {
  return (
    <div className="relative">
      <BackgroundGradient />
      {backgroundImage && (
        <div className="absolute inset-0 -z-20 h-[600px] w-full">
          <div
            className="h-full w-full bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${backgroundImage})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/80 to-background" />
        </div>
      )}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 md:py-32">
        <div className="relative mb-32">
          <PageTitle title={title} description={description} />
        </div>
        {children}
      </div>
    </div>
  );
};