'use client';

interface EditorProps {
  entry: Entry;
}

export const Editor = ({ entry }: EditorProps) => {
  return <div>{entry.content}</div>;
};
