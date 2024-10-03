import { Card, CardContent } from './ui/Card';
import { PlusCircle } from 'lucide-react';

export const NewEntryCard = () => {
  return (
    <Card className="flex items-center justify-center h-full bg-violet-700 bg-opacity-20 backdrop-blur-lg hover:bg-opacity-30 transition-all duration-200 border-violet-500">
      <CardContent className="flex flex-col items-center p-6">
        <PlusCircle className="w-12 h-12 mb-2 text-violet-300" />
        <p className="text-lg font-medium text-violet-100">New Entry</p>
      </CardContent>
    </Card>
  );
};
