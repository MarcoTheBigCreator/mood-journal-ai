export const getColorClasses = (color: string) => {
  const baseColors: Record<string, { bg: string; text: string }> = {
    blue: { bg: 'bg-blue-500', text: 'text-blue-300' },
    red: { bg: 'bg-red-500', text: 'text-red-300' },
    green: { bg: 'bg-green-500', text: 'text-green-300' },
    yellow: { bg: 'bg-yellow-500', text: 'text-yellow-300' },
    purple: { bg: 'bg-purple-500', text: 'text-purple-300' },
    pink: { bg: 'bg-pink-500', text: 'text-pink-300' },
    indigo: { bg: 'bg-indigo-500', text: 'text-indigo-300' },
    gray: { bg: 'bg-gray-500', text: 'text-gray-300' },
  };

  return baseColors[color] || { bg: 'bg-violet-500', text: 'text-violet-300' };
};
