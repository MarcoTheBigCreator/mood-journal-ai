'use client';

import { titleFont } from '@/config';
import { motion } from 'framer-motion';
import { Icons } from './icons/Icons';
import Link from 'next/link';

export const LogoWithText = () => {
  return (
    <Link
      href="#"
      className="font-normal flex space-x-2 items-center text-xl text-white py-1 relative z-20"
    >
      <Icons.Logo className="h-7 w-7 pr-1 flex-shrink-0" />
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className={`${titleFont.className}`}
      >
        MTBJournal
      </motion.span>
    </Link>
  );
};

export const LogoIcon = () => {
  return (
    <Link
      href="#"
      className="font-normal flex space-x-2 items-center text-3xl text-white py-1 relative z-20"
    >
      <Icons.Logo className="h-7 w-7 justify-start pr-1 flex-shrink-0" />
    </Link>
  );
};
