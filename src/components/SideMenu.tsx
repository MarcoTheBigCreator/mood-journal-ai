'use client';

import { useState } from 'react';
import { UserButton } from '@clerk/nextjs';
import { Sidebar, SidebarBody, SidebarLink } from './ui/Sidebar';
import { NotebookText, Settings } from 'lucide-react';
import { LogoWithText, LogoIcon } from './Logo';

export const SideMenu = () => {
  const links = [
    {
      label: 'Journal Dashboard',
      href: '#',
      icon: (
        <NotebookText className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
      ),
    },
    {
      label: 'Settings',
      href: '#',
      icon: (
        <Settings className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
      ),
    },
  ];

  const [open, setOpen] = useState(false);

  return (
    <>
      <Sidebar open={open} setOpen={setOpen}>
        <SidebarBody className="justify-between gap-10">
          <div className="flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
            {open ? <LogoWithText /> : <LogoIcon />}
            <div className="mt-8 flex flex-col gap-2">
              {links.map((link, idx) => (
                <SidebarLink key={idx} link={link} />
              ))}
            </div>
          </div>
          <div>
            {open ? (
              <UserButton
                appearance={{
                  elements: {
                    userButtonBox: {
                      flexDirection: 'row-reverse',
                    },
                    userButtonOuterIdentifier: {
                      fontSize: '0.875rem',
                      lineHeight: '1.25rem',
                      margin: '0',
                      paddingLeft: '0.2rem',
                      fontWeight: '400',
                    },
                  },
                }}
                showName
              />
            ) : (
              <UserButton />
            )}
          </div>
        </SidebarBody>
      </Sidebar>
    </>
  );
};
