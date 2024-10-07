export const getColorClasses = (color: string) => {
  const baseColors: Record<string, { bg: string; text: string }> = {
    red: { bg: 'bg-red-500', text: 'text-red-300' },
    blue: { bg: 'bg-blue-500', text: 'text-blue-300' },
    green: { bg: 'bg-green-500', text: 'text-green-300' },
    yellow: { bg: 'bg-yellow-500', text: 'text-yellow-300' },
    purple: { bg: 'bg-purple-500', text: 'text-purple-300' },
    pink: { bg: 'bg-pink-500', text: 'text-pink-300' },
    indigo: { bg: 'bg-indigo-500', text: 'text-indigo-300' },
    gray: { bg: 'bg-gray-500', text: 'text-gray-300' },
    violet: { bg: 'bg-violet-500', text: 'text-violet-300' },
    orange: { bg: 'bg-orange-500', text: 'text-orange-300' },
    teal: { bg: 'bg-teal-500', text: 'text-teal-300' },
    cyan: { bg: 'bg-cyan-500', text: 'text-cyan-300' },
    lime: { bg: 'bg-lime-500', text: 'text-lime-300' },
    amber: { bg: 'bg-amber-500', text: 'text-amber-300' },
    emerald: { bg: 'bg-emerald-500', text: 'text-emerald-300' },
    fuchsia: { bg: 'bg-fuchsia-500', text: 'text-fuchsia-300' },
    rose: { bg: 'bg-rose-500', text: 'text-rose-300' },
    sky: { bg: 'bg-sky-500', text: 'text-sky-300' },
    slate: { bg: 'bg-slate-500', text: 'text-slate-300' },
  };

  return baseColors[color] || { bg: 'bg-violet-500', text: 'text-violet-300' };
};
