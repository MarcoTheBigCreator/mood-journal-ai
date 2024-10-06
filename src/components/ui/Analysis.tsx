'use client';

import { cn } from '@/lib';
import { titleFont } from '@/config';
import { getColorClasses } from '@/utils';

interface AnalysisProps {
  aiAnalysis: AiAnalysis;
}

export const Analysis = ({ aiAnalysis }: AnalysisProps) => {
  const { color, summary, subject, mood, negative, recommendation } =
    aiAnalysis;

  const analysisData = [
    { label: 'Summary', value: summary },
    { label: 'Subject', value: subject },
    { label: 'Mood', value: mood },
    { label: 'Negative', value: negative ? 'Yes' : 'No' },
    { label: 'Recommendations', value: recommendation },
  ];

  const { bg, text } = getColorClasses(color);

  return (
    <div className="bg-neutral-800 bg-opacity-50 backdrop-blur-md rounded-xl border border-violet-500 overflow-hidden">
      <div className={cn('px-6 py-4 bg-opacity-50 backdrop-blur-sm', bg)}>
        <h2
          className={cn(
            titleFont.className,
            'text-2xl font-bold text-neutral-100'
          )}
        >
          Analysis
        </h2>
      </div>
      <div className="p-6 space-y-6">
        {analysisData.map((data, index) => (
          <div
            key={data.label}
            className={cn(
              'pb-4',
              index !== analysisData.length - 1 &&
                'border-b border-violet-300 border-opacity-30'
            )}
          >
            <h3
              className={cn(
                titleFont.className,
                'text-lg font-semibold mb-2',
                text
              )}
            >
              {data.label}
            </h3>
            <p className="text-neutral-200">{data.value || 'N/A'}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
