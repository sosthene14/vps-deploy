import type { ProfileLink } from '@/data/links'

function LinkItem({ link, index }: { link: ProfileLink; index: number }) {
  const Icon = link.icon

  return (
    <a
      href={link.href}
      target="_blank"
      rel="noreferrer"
      className="bio-link"
      style={{ animationDelay: `${index * 90 + 180}ms` }}
    >
      <span className="link-icon" aria-hidden="true"><Icon /></span>
      <span className="link-copy">
        <strong>{link.label}</strong>
        <small>{link.description}</small>
      </span>
      <span className="link-arrow" aria-hidden="true">↗</span>
    </a>
  )
}

export function LinkList({ links }: { links: ProfileLink[] }) {
  return <nav className="link-list" aria-label="Liens de Lina">{links.map((link, index) => <LinkItem key={link.label} link={link} index={index} />)}</nav>
}
