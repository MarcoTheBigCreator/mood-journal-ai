import { redirect } from 'next/navigation';
import { auth } from '@clerk/nextjs/server';
import { getEntriesByUserId, getUserByClerkId } from '@/actions';
import { titleFont } from '@/config';
import { EntryCard, NewEntryCard } from '@/components';

export default async function JournalPage() {
  const { userId } = auth();

  if (!userId) {
    return redirect('/sign-in');
  }

  const user = await getUserByClerkId(userId);

  const entries = await getEntriesByUserId(user.id);

  return (
    <div>
      <h2
        className={`${titleFont.className} text-5xl my-8 flex justify-center`}
      >
        Journal
      </h2>
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          <NewEntryCard />
          {entries.map((entry) => (
            <EntryCard key={entry.id} entry={entry} />
          ))}
        </div>
      </div>
    </div>
  );
}
