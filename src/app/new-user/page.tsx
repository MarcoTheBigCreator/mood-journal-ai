import { redirect } from 'next/navigation';
import { currentUser } from '@clerk/nextjs/server';
import { prisma } from '@/utils';

const createNewUser = async () => {
  const user = await currentUser();

  const match = await prisma.user.findUnique({
    where: { clerkId: user!.id },
  });

  if (!match) {
    await prisma.user.create({
      data: {
        clerkId: user!.id,
        email: user!.emailAddresses[0].emailAddress,
      },
    });
  }
};

export default async function NewUserPage() {
  await createNewUser();
  redirect('/journal');
}
