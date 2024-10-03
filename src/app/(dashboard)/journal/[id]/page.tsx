import { redirect } from 'next/navigation';
import { auth } from '@clerk/nextjs/server';

interface EntryPageProps {
  params: {
    id: string;
  };
}

export default function EntryPage({ params }: EntryPageProps) {
  const { userId } = auth();
  const { id } = params;

  if (!userId) {
    redirect('/sign-in');
  }

  return (
    <div>
      <h1>Hello Page {id}</h1>
    </div>
  );
}
