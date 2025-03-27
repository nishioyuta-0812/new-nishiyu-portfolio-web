import { Logo } from '@/components/atoms/Logo';
import { Navigation } from '@/components/molecules/Navigation';
import { MobileMenu } from '@/components/molecules/MobileMenu';
import Link from 'next/link';

export const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex h-14 items-center">
        <Link href="/" className="mr-6">
          <Logo />
        </Link>
        <Navigation />
        <MobileMenu />
      </div>
    </header>
  );
};