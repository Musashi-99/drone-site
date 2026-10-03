import { brand, nav } from '../data/content.js'

export default function Navbar() {
  return (
    <header className="nav-wrap">
      <nav className="nav" aria-label="Primary">
        <a className="brand" href="#">
          <img src="/assets/logo-mark.svg" alt="" />
          <span>{brand}</span>
        </a>
        <ul>
          {nav.map((n) => (
            <li key={n.label}><a href={n.href}>{n.label}</a></li>
          ))}
        </ul>
        <button className="nav-menu" aria-label="Menu"><span /><span /></button>
      </nav>
      <a className="btn-yellow" href="#">
        Request a call
        <svg width="9" height="9" viewBox="0 0 10 10" aria-hidden="true"><path d="M1 9L9 1M3 1h6v6" fill="none" stroke="currentColor" strokeWidth="1.2" /></svg>
      </a>
    </header>
  )
}
