import { z } from 'zod';

export const aiOutputSchema = z.object({
  color: z
    .string()
    .describe(
      'a tailwind bg-color class code that represents the mood of the entry. Example bg-blue-300 for blue representing sadness.'
    ),
  summary: z.string().describe('quick summary of the entire entry.'),
  subject: z.string().describe('the subject of the journal entry.'),
  mood: z
    .string()
    .describe(
      'the mood of the person who wrote the journal entry. and a emoji.'
    ),
  negative: z
    .boolean()
    .describe(
      'is the journal entry negative? (i.e. does it contain negative emotions?).'
    ),
  recommendation: z
    .string()
    .describe(
      'A short recommendation based on the entry to deal with the situation.'
    ),
});
