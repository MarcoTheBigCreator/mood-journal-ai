export const revalidate = 60;

import { redirect } from 'next/navigation';
import { auth } from '@clerk/nextjs/server';
import { getEntriesByUserIdPaginated, getUserByClerkId } from '@/actions';
import { titleFont } from '@/config';
import { EntryGrid, Pagination } from '@/components';

interface JournalSearchParamsProps {
  searchParams: {
    page?: string;
  };
}

export default async function JournalPage({
  searchParams,
}: JournalSearchParamsProps) {
  const { userId } = auth();

  if (!userId) {
    return redirect('/sign-in');
  }

  const page = searchParams.page ? parseInt(searchParams.page) : 1;

  const user = await getUserByClerkId(userId);

  const { entries, totalPages } = await getEntriesByUserIdPaginated({
    userId: user.id,
    page,
  });

  return (
    <>
      <div className="flex-grow container mx-auto px-4 py-8">
        <h2 className={`${titleFont.className} text-4xl mb-8 text-center`}>
          Journal
        </h2>
        <EntryGrid entries={entries} />
      </div>
      <div className="mt-auto">
        <Pagination totalPages={totalPages} />
      </div>
    </>
  );
}
