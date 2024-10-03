import { redirect } from 'next/navigation';
import { auth } from '@clerk/nextjs/server';
import { getEntriesByUserIdPaginated, getUserByClerkId } from '@/actions';
import { titleFont } from '@/config';
import { EntryGrid, Pagination } from '@/components';

export default async function JournalPage() {
  const { userId } = auth();

  if (!userId) {
    return redirect('/sign-in');
  }

  const user = await getUserByClerkId(userId);

  const { entries, totalPages } = await getEntriesByUserIdPaginated({
    userId: user.id,
  });

  return (
    <div>
      <h2
        className={`${titleFont.className} text-5xl my-8 flex justify-center`}
      >
        My Journal
      </h2>
      <p className="text-sm md:text-base text-center text-violet-400 m-3">
        Track your emotions, monitor your mental health, and start a new journal
        or view past entries.
      </p>

      <div className="container mx-auto px-4 py-8">
        <EntryGrid entries={entries} />
      </div>
      <Pagination totalPages={totalPages} />
    </div>
  );
}
