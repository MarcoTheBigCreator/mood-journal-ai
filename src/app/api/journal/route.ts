import { NextResponse } from 'next/server';
import { redirect } from 'next/navigation';
import { revalidatePath } from 'next/cache';
import { auth } from '@clerk/nextjs/server';
import { getUserByClerkId } from '@/actions';
import { prisma } from '@/utils';

export async function POST(request: Request) {
  const { userId } = auth();

  if (!userId) {
    return redirect('/sign-in');
  }

  const user = await getUserByClerkId(userId);

  const createEntry = await prisma.journalEntry.create({
    data: {
      userId: user.id,
      content: 'Write about your day here',
    },
  });

  revalidatePath('/journal', 'page');

  return NextResponse.json({ data: createEntry });
}
