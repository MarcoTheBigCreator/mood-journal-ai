import { prisma } from '@/utils';

export const getUserByClerkId = async (userId: string) => {
  const user = await prisma.user.findUniqueOrThrow({
    where: {
      clerkId: userId,
    },
  });

  return user;
};
