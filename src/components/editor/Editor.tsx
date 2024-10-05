'use client';

import { useState, useRef, useEffect } from 'react';
import { useAutosave } from 'react-autosave';
import { updateEntry } from '@/utils';
import { Loader2, CheckCircle } from 'lucide-react';
import { cn } from '@/lib';
import { titleFont } from '@/config';

interface EditorProps {
  entry: Entry;
}

export const Editor = ({ entry }: EditorProps) => {
  const [value, setValue] = useState<string>(entry.content);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isSaved, setIsSaved] = useState<boolean>(false);
  const [isFocused, setIsFocused] = useState<boolean>(false);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  useAutosave({
    data: value,
    onSave: async (_value) => {
      setIsLoading(true);
      setIsSaved(false);
      const updatedEntry = await updateEntry(entry.id, _value);
      setIsLoading(false);
      setIsSaved(true);
    },
  });

  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.focus();
    }
  }, []);

  return (
    <div
      className={cn(
        'relative h-full bg-neutral-800 bg-opacity-50 backdrop-blur-md rounded-xl border transition-all duration-300',
        isFocused
          ? 'border-violet-400 shadow-[0_0_0_2px_rgba(167,139,250,0.3)]'
          : 'border-violet-500'
      )}
    >
      <div className="absolute top-2 left-2 right-2 flex items-center justify-between z-10 bg-neutral-900 bg-opacity-70 backdrop-blur-sm rounded-lg px-3 py-1.5">
        <h2
          className={`${titleFont.className} text-lg font-semibold text-violet-300`}
        >
          22 April 2024
        </h2>
        <div className="flex items-center space-x-2">
          {isLoading && (
            <div className="flex items-center text-violet-400">
              <Loader2 className="w-4 h-4 mr-1 animate-spin" />
              <span className={`${titleFont.className} text-xs`}>
                Saving...
              </span>
            </div>
          )}
          {isSaved && (
            <div className="flex items-center text-green-400">
              <CheckCircle className="w-4 h-4 mr-1" />
              <span className={`${titleFont.className} text-xs`}>Saved</span>
            </div>
          )}
        </div>
      </div>
      <textarea
        ref={textareaRef}
        className="w-full h-full pt-14 px-6 pb-6 text-base bg-transparent text-neutral-100 outline-none focus:outline-none resize-none"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
      />
    </div>
  );
};
