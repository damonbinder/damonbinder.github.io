import { vinidariusText } from './vinidarius.ts';

// Full surviving text per source, keyed by work name. Only sources we've
// actually transcribed need an entry — pages without one just skip the
// full-text section.
export const sourceTexts: Record<string, { ref: string; latin: string; english: string }[]> = {
  Vinidarius: vinidariusText,
};
