import { NextResponse } from 'next/server';
import { revalidatePath } from 'next/cache';
import { auth } from '@clerk/nextjs/server';
import { getUserByClerkId } from '@/actions';
import { prisma } from '@/utils';

export async function POST(request: Request) {
  const { userId } = auth();

  if (!userId) {
    return NextResponse.json('Unauthorized', { status: 401 });
  }

  const user = await getUserByClerkId(userId);

  try {
    const createEntry = await prisma.journalEntry.create({
      data: {
        userId: user.id,
        content:
          'Write about your day here... (it will be saved automatically) 📝',
      },
    });

    return NextResponse.json({ data: createEntry });
  } catch (error) {
    return NextResponse.json(error, { status: 400 });
  } finally {
    revalidatePath('/journal', 'page');
  }
}
