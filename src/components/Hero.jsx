import { hero } from '../data/content.js'
import Reveal from './Reveal.jsx'

export default function Hero() {
  const { reviews } = hero
  return (
    <section className="hero">
      <h1 className="h-big">
        <span className="l1">{hero.line1}</span>
        <span className="l2">{hero.line2}</span>
      </h1>

      <div className="hero-meta">
        <a className="play" href="#" onClick={(e) => e.preventDefault()}>
          <span className="play-btn">
            <svg width="12" height="12" viewBox="0 0 14 14" aria-hidden="true"><path d="M3 1.5v11l9-5.5z" fill="#111" /></svg>
          </span>
          <span>Watch video</span>
        </a>
        <p className="hero-about"><b>AEGISFRONT</b> {hero.about}</p>
      </div>

      {/* Stage has a fixed aspect ratio: photo fills the lower 75%, drone straddles its top edge. */}
      <div className="hero-stage">
        <svg className="arcs" viewBox="0 0 200 100" aria-hidden="true" preserveAspectRatio="none">
          <path d="M0 100A100 100 0 0 1 200 100Z" fill="var(--yellow)" />
          <path d="M42 100A58 58 0 0 1 158 100Z" fill="var(--bg)" />
          <path d="M-14 100A114 114 0 0 1 28 18" fill="none" stroke="var(--yellow)" strokeWidth="9" />
        </svg>

        <div className="hero-photo">
          <div className="photo-bg" style={{ backgroundImage: 'url(/assets/hero-bg.png)' }} />
          <div className="sun-glow" />
        </div>

        <div className="hero-drone">
          <img src="/assets/hero-drone.png" alt="Aegisfront hybrid defense multicopter" />
        </div>

        <Reveal as="aside" className="reviews">
          <div className="reviews-top">
            <strong>{reviews.count}</strong>
            <span className="avatars">
              {reviews.avatars.map((a, i) => (
                <img key={a} src={a} alt="" onError={(e) => e.currentTarget.classList.add('ph')} style={{ zIndex: 5 - i }} />
              ))}
            </span>
          </div>
          <small>{reviews.label}</small>
          <p>{reviews.text}</p>
          <a href="#">
            <svg width="11" height="11" viewBox="0 0 12 12" aria-hidden="true"><circle cx="6" cy="6" r="5" fill="none" stroke="#111" /><path d="M3 5h6M3 7h6" stroke="#111" /></svg>
            See more
          </a>
        </Reveal>
      </div>
    </section>
  )
}
