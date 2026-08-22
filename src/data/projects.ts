// Standalone projects. Each lives independently (its own app / URL) but is
// surfaced here so the hub links out to it.
export interface Project {
  title: string;
  blurb: string;
  date: string; // display string, e.g. "January 2026" or "2016–2018"
  href?: string; // live URL; omit if not yet deployed
}

export const projects: Project[] = [
  {
    title: 'Blink',
    blurb:
      'A browser shooter you aim by looking and fire by blinking.',
    date: 'August 2026',
    href: '/blink/',
  },
  {
    title: 'The Indo-European Family Tree',
    blurb:
      'An interactive, time-calibrated tree of the Indo-European languages.',
    date: 'July 2026',
    href: '/language-tree/',
  },
  {
    title: 'Harmonics Lab',
    blurb:
      'Build a sound from its harmonics and play it across a keyboard.',
    date: 'July 2026',
    href: '/harmonic-lab/',
  },
  {
    title: 'Random Lives',
    blurb:
      'Biographical stories of randomly sampled people from across all of human history.',
    date: 'January 2026',
    href: 'https://random-lives.github.io/random-lives/',
  },
  {
    title: 'Physics Simulations',
    blurb:
      'A collection of interactive physics simulations that run in your browser.',
    date: '2016–2018',
    href: '/simulations/',
  },
];
