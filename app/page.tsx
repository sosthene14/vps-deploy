'use client'

import { Avatar } from '@/components/avatar'
import { LinkList } from '@/components/link-list'
import { ThemeToggle } from '@/components/theme-toggle'
import { profile, socialLinks } from '@/data/links'

export default function Page() {
  return (
    <main className="bio-page">
      <div className="ambient ambient-one" aria-hidden="true" />
      <div className="ambient ambient-two" aria-hidden="true" />
      <section className="bio-shell" aria-labelledby="profile-name">
        <ThemeToggle />
        <header className="profile-header">
          <Avatar src={profile.avatar} name={profile.name} />
          <p className="profile-handle">{profile.handle}</p>
          <h1 id="profile-name">{profile.name}</h1>
          <p className="profile-bio">{profile.bio}</p>
        </header>
        <LinkList links={profile.links} />
        <footer className="bio-footer">
          <div className="social-row" aria-label="Réseaux sociaux">
            {socialLinks.map(({ label, href, icon: Icon }) => <a key={label} href={href} target="_blank" rel="noreferrer" aria-label={label}><Icon aria-hidden="true" /></a>)}
          </div>
          <span className="footer-mark"><span aria-hidden="true">✳</span> linamakes</span>
        </footer>
      </section>
    </main>
  )
}
