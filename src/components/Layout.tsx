import type { ReactNode } from 'react'
import icon from '../assets/icon.webp'
import { paths, site, type PageId } from '../site.ts'

const nav: { page: PageId; label: string }[] = [
  { page: 'support', label: 'Support' },
  { page: 'privacy', label: 'Privacy' },
]

const year = new Date().getFullYear()

export function Layout({ page, children }: { page: PageId; children: ReactNode }) {
  const current = (p: PageId) => (p === page ? 'page' : undefined)

  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <header className="site-header">
        <div className="container header-row">
          <a className="brand" href={paths.home} aria-current={current('home')}>
            <img src={icon} alt="" width={36} height={36} />
            <span>{site.name}</span>
          </a>
          <nav aria-label="Main">
            <ul className="nav-list">
              {nav.map((item) => (
                <li key={item.page}>
                  <a href={paths[item.page]} aria-current={current(item.page)}>
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </header>

      <main id="main">{children}</main>

      <footer className="site-footer">
        <div className="container footer-row">
          <p>
            © {year} {site.developer}
          </p>
          <ul className="nav-list">
            <li>
              <a href={paths.home}>Home</a>
            </li>
            <li>
              <a href={paths.support}>Support</a>
            </li>
            <li>
              <a href={paths.privacy}>Privacy policy</a>
            </li>
            <li>
              <EmailLink />
            </li>
          </ul>
        </div>
      </footer>
    </>
  )
}

export function EmailLink() {
  return <a href={`mailto:${site.contactEmail}`}>{site.contactEmail}</a>
}

/** Narrow reading column used by the text pages. */
export function Prose({ title, subtitle, children }: { title: string; subtitle: ReactNode; children: ReactNode }) {
  return (
    <article className="container prose">
      <h1>{title}</h1>
      <p className="muted">{subtitle}</p>
      {children}
    </article>
  )
}
