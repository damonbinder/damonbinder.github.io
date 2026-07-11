import { vinidariusText } from './vinidarius.ts';
import { manasollasaText } from './manasollasa.ts';

// Full surviving text per source, keyed by work name. Only sources we've
// actually transcribed need an entry — pages without one just skip the
// full-text section. `english` is optional: a source can ship with the
// original-language text transcribed while translations are still being
// worked up entry by entry.
//
// Apicius is deliberately NOT here: at ~450 recipes it is too long to
// reproduce, and the Latin is Grocock & Grainger's copyrighted critical
// edition — the source page points readers to buy that edition instead.
export const sourceTexts: Record<string, { ref: string; latin: string; english?: string }[]> = {
  Vinidarius: vinidariusText,
  Mānasollāsa: manasollasaText,
};
