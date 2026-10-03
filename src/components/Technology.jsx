import { technology as t } from '../data/content.js'
import StatCard from './StatCard.jsx'
import Reveal from './Reveal.jsx'

export default function Technology() {
  return (
    <section className="tech" id="technology">
      <div className="tag"><i /> {t.tag}</div>
      <div className="tech-body">
        <Reveal as="h2" className="h-mid">{t.title[0]}<br />{t.title[1]}</Reveal>
        <Reveal as="p" className="lead" delay={100}>{t.text}</Reveal>
        <div className="stats">
          {t.stats.map((s, i) => <StatCard key={s.label} {...s} delay={i * 90} />)}
        </div>
        <p className="foot">{t.note}</p>
      </div>
    </section>
  )
}
