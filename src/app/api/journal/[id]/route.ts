import { NextResponse } from 'next/server';
import { revalidatePath } from 'next/cache';
import { auth } from '@clerk/nextjs/server';
import { getUserByClerkId } from '@/actions';
import { analyze, prisma } from '@/utils';

interface JournalRouteProps {
  params: {
    id: string;
  };
}

export async function PATCH(request: Request, { params }: JournalRouteProps) {
  const { content } = await request.json();

  const { userId } = auth();

  if (!userId) {
    return NextResponse.json('Unauthorized', { status: 401 });
  }

  const user = await getUserByClerkId(userId);

  try {
    const updatedEntry = await prisma.journalEntry.update({
      where: {
        userId_id: {
          userId: user.id,
          id: params.id,
        },
      },
      data: {
        content,
      },
    });

    const updatedAiAnalysis = await prisma.aiAnalysis.update({
      where: {
        journalEntryId: updatedEntry.id,
      },
      data: {
        ...(await analyze(updatedEntry.content)),
      },
    });

    return NextResponse.json({
      data: { ...updatedEntry, aiAnalysis: updatedAiAnalysis },
    });
  } catch (error) {
    return NextResponse.json(error, { status: 400 });
  } finally {
    revalidatePath('/journal', 'page');
    revalidatePath(`/journal/${params.id}`, 'page');
  }
}
