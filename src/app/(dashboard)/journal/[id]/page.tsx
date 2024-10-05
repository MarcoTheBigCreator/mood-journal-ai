import { redirect } from 'next/navigation';
import { auth } from '@clerk/nextjs/server';
import { Analysis, Editor } from '@/components';
import { getEntry, getUserByClerkId } from '@/actions';

interface EntryPageProps {
  params: {
    id: string;
  };
}

export default async function EntryPage({ params }: EntryPageProps) {
  const { userId } = auth();
  const { id } = params;

  if (!userId) {
    redirect('/sign-in');
  }

  const journalUser = await getUserByClerkId(userId);
  const journalUserId = journalUser.id;

  const entry = await getEntry(journalUserId, id);

  const analysisData = [
    { name: 'Summary', value: '' },
    { name: 'Subject', value: '' },
    { name: 'Mood', value: '' },
    { name: 'Negative', value: '' },
    { name: 'Recommendation', value: '' },
  ];

  return (
    <div className="flex flex-col lg:flex-row gap-6 h-full">
      <div className="flex-grow lg:w-2/3">
        <Editor entry={entry} />
      </div>
      <div className="lg:w-1/3">
        <Analysis analysisData={analysisData} />
      </div>
    </div>
  );
}
