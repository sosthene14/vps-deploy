import type { LucideIcon } from 'lucide-react'
import { BriefcaseBusiness, Code2, PlaySquare, Sparkles } from 'lucide-react'

export type ProfileLink = {
  label: string
  href: string
  description: string
  icon: LucideIcon
}

export const profile = {
  name: 'Lina Moreau',
  handle: '@linamakes',
  bio: 'Designer numérique, collectionneuse d’idées et créatrice de produits utiles.',
  avatar: '/avatar-lina.png',
  links: [
    { label: 'Portfolio', description: 'Mes projets & expérimentations', href: 'https://example.com', icon: Sparkles },
    { label: 'LinkedIn', description: 'Parlons design et numérique', href: 'https://linkedin.com', icon: BriefcaseBusiness },
    { label: 'YouTube', description: 'Coulisses, conseils & inspirations', href: 'https://youtube.com', icon: PlaySquare },
    { label: 'GitHub', description: 'Mes projets open source', href: 'https://github.com', icon: Code2 },
  ] satisfies ProfileLink[],
}

export const socialLinks = [
  { label: 'LinkedIn', href: 'https://linkedin.com', icon: BriefcaseBusiness },
  { label: 'GitHub', href: 'https://github.com', icon: Code2 },
]

export type Profile = typeof profile

export default profile

// Modify this file to update the profile and links in one place.
// Icons are imported from lucide-react and can be swapped easily.
// The page uses the local avatar asset in /public.
// All links open in a new tab for a link-in-bio experience.
// Keep labels short for comfortable reading on mobile.
// The data shape is intentionally small and serializable.
// This is a static configuration; no backend is required.
// Add more ProfileLink entries to extend the list.
// Use absolute URLs for external destinations.
// The profile object is consumed by the page component.
// TypeScript validates each link icon and destination.
// End of configuration.
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const _configNote = ''

export type { LucideIcon }
export { BriefcaseBusiness, Code2, PlaySquare, Sparkles }

