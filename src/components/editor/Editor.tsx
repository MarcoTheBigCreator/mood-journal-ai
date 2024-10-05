'use client';

import { updateEntry } from '@/utils';
import { useState } from 'react';
import { useAutosave } from 'react-autosave';

interface EditorProps {
  entry: Entry;
}

export const Editor = ({ entry }: EditorProps) => {
  const [value, setValue] = useState<string>(entry.content);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useAutosave({
    data: value,
    onSave: async (_value) => {
      setIsLoading(true);
      const updatedEntry = await updateEntry(entry.id, _value);
      setIsLoading(false);
    },
  });

  return (
    <div className="w-full h-full">
      {isLoading && <div>...loading</div>}
      <textarea
        className="w-full h-full p-8 text-xl bg-neutral-700 rounded-2xl text-neutral-300 outline-none focus:outline-violet-400"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </div>
  );
};
