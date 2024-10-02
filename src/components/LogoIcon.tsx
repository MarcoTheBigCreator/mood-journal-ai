import Link from 'next/link';
import { Icons } from './icons/Icons';

export const LogoIcon = () => {
  return (
    <Link
      href="#"
      className="font-normal flex space-x-2 items-center text-sm text-black py-1 relative z-20"
    >
      <Icons.Logo className="h-7 w-7 text-black dark:text-white group-hover:text-violet-700 dark:group-hover:text-violet-500 transition-all duration-200 ease-in-out" />
    </Link>
  );
};
