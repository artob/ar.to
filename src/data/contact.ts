// Contact details shown on the home page, ported from the legacy site.
// Icons are in `src/icons/`; see DESIGN.md for their provenance.
export const email = 'arto@bendiken.net';

export const tagline =
  'Autodidact, coder, cypherpunk, entrepreneur, hacker, and maker.';

export const links = [
  { icon: 'x', name: 'Follow me on X (Twitter)', url: 'https://x.com/bendiken' },
  { icon: 'github', name: 'Follow me on GitHub', url: 'https://github.com/artob' },
  {
    icon: 'linkedin',
    name: 'Contact me on LinkedIn',
    url: 'https://www.linkedin.com/in/arto/',
  },
  {
    icon: 'instagram',
    name: 'Follow me on Instagram',
    url: 'https://www.instagram.com/arto.bendiken/',
  },
  {
    icon: 'facebook',
    name: 'Follow me on Facebook',
    url: 'https://facebook.com/bendiken',
  },
  {
    icon: 'goodreads',
    name: 'Follow me on Goodreads',
    url: 'https://www.goodreads.com/artob',
  },
  {
    icon: 'crunchbase',
    name: 'Follow me on Crunchbase',
    url: 'https://www.crunchbase.com/person/arto-bendiken',
  },
  { icon: 'keybase', name: 'Contact me on Keybase', url: 'https://keybase.io/arto' },
  { icon: 'email', name: `Email me at ${email}`, url: `mailto:${email}` },
] as const;
