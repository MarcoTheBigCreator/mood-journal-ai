'use server';

import { prisma } from '@/utils';

export const getEntriesByUserId = async (userId: string) => {
  const entries = await prisma.journalEntry.findMany({
    where: {
      userId,
    },
    orderBy: {
      createdAt: 'desc',
    },
  });

  return entries;
};
