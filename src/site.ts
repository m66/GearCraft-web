// Everything that may change before (or after) publishing lives here.

export const site = {
  name: 'GearCraft',
  fullName: 'GearCraft: Mechanical Puzzle',
  developer: 'Karen Manasyan',
  /** Public support address, shown on every page. Use one you are happy to see published. */
  contactEmail: '[CONTACT EMAIL]',
  /** Store listing URLs. Leave empty until a listing is live: its button then says "Coming soon". */
  googlePlayUrl: '',
  appStoreUrl: '',
}

export type PageId = 'home' | 'privacy' | 'support'

// Every page is its own HTML file (see vite.config.ts), so links are plain
// URLs under the base path the site is deployed to.
const base = import.meta.env.BASE_URL

export const paths: Record<PageId, string> = {
  home: base,
  privacy: `${base}privacy-policy/`,
  support: `${base}support/`,
}
