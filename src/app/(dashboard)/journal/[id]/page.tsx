import { redirect } from 'next/navigation';
import { auth } from '@clerk/nextjs/server';
import { Editor } from '@/components';
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
    {
      name: 'Summary',
      value: '',
    },
    {
      name: 'Subject',
      value: '',
    },
    {
      name: 'Mood',
      value: '',
    },
    {
      name: 'Negative',
      value: '',
    },
    {
      name: 'Recommendation',
      value: '',
    },
  ];

  return (
    <div className="h-full w-full grid grid-cols-3 space-x-3">
      <div className="col-span-2">
        <Editor entry={entry} />
      </div>

      {/* TODO: Make this a component */}
      <div className="border rounded-xl border-violet-400">
        <div className="bg-blue-400 rounded-xl px-6 py-10">
          <h2 className="text-2xl">Analysis</h2>
        </div>
        <div>
          <ul>
            {analysisData.map((data) => (
              <li
                key={data.name}
                className="text-lg flex items-center justify-between"
              >
                <span className="font-bold">{data.name}:</span> {data.value}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
