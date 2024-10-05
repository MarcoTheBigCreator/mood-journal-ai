import { cn } from '@/lib';
import { titleFont } from '@/config';

interface AnalysisProps {
  analysisData: {
    name: string;
    value: string;
  }[];
}

export const Analysis = ({ analysisData }: AnalysisProps) => {
  return (
    <div className="bg-neutral-800 bg-opacity-50 backdrop-blur-md rounded-xl border border-violet-500 overflow-hidden">
      <div className="bg-violet-700 bg-opacity-50 px-6 py-4">
        <h2
          className={`${titleFont.className} text-2xl font-bold text-violet-100`}
        >
          Analysis
        </h2>
      </div>
      <div className="p-6 space-y-6">
        {analysisData.map((data, index) => (
          <div
            key={data.name}
            className={cn(
              'pb-4',
              index !== analysisData.length - 1 &&
                'border-b border-violet-300 border-opacity-30'
            )}
          >
            <h3
              className={`${titleFont.className} text-lg font-semibold text-violet-300 mb-2`}
            >
              {data.name}
            </h3>
            <p className="text-neutral-200">{data.value || 'N/A'}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
