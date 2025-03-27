import { Logo } from '@/components/atoms/Logo';
import Link from 'next/link';
import { FaGithub } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { SiGmail } from "react-icons/si";

const socialLinks = [
  {
    icon: FaGithub,
    href: 'https://github.com/nishioyuta-0812',
    label: 'GitHub',
  },
  {
    icon: BsTwitterX,
    href: 'https://x.com/yutakun_27',
    label: 'X',
  },
  {
    icon: SiGmail,
    href: 'mailto:yutanishi0812@gmail.com',
    label: 'Email',
  },
];

export const Footer = () => {
  return (
    <footer className="border-t">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col items-center gap-8 py-8 md:flex-row md:justify-between md:py-12">
        <div className="flex flex-col items-center gap-4 md:items-start">
          <Logo />
          <p className="text-center text-sm text-muted-foreground md:text-left">
            Built with Next.js and Tailwind CSS
          </p>
        </div>
        <div className="flex gap-4">
          {socialLinks.map((link) => {
            const Icon = link.icon;
            return (
              <Link
                key={link.href}
                href={link.href}
                className="text-muted-foreground hover:text-foreground"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Icon className="h-5 w-5" />
                <span className="sr-only">{link.label}</span>
              </Link>
            );
          })}
        </div>
      </div>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-8 text-center text-sm text-muted-foreground">
        <p>© {new Date().getFullYear()} Yuta Nishio. All rights reserved.</p>
      </div>
    </footer>
  );
};
