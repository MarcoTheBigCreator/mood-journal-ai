import { z } from 'zod';

export const aiOutputSchema = z.object({
  color: z
    .string()
    .describe(
      'a color that represents the mood of the entry use the tailwind colors, just the colors, not the entire class. Example blue for representing sadness.'
    ),
  summary: z
    .string()
    .describe(
      'quick summary of the entire entry. Capitalized the first letter of the first word.'
    ),
  subject: z
    .string()
    .describe(
      'the subject of the journal entry. Capitalized the first letter of the first word.'
    ),
  mood: z
    .string()
    .describe(
      'the mood of the person who wrote the journal entry. and a emoji. Capitalized the first letter of the first word.'
    ),
  negative: z
    .boolean()
    .describe(
      'is the journal entry negative? (i.e. does it contain negative emotions?). Capitalized the first letter of the first word.'
    ),
  recommendation: z
    .string()
    .describe(
      'a serie of deep recommendations based on the entry to deal with the situation to support the author. Capitalized the first letter of the first word.'
    ),
});
