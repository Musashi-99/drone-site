import { perimeter as p } from '../data/content.js'
import FeatureChip from './FeatureChip.jsx'
import Reveal from './Reveal.jsx'

export default function Perimeter() {
  return (
    <section className="perimeter" id="perimeter">
      <div className="tag"><i /> {p.tag}</div>
      <Reveal as="h2" className="h-mid perimeter-head">{p.title[0]}<br />{p.title[1]}</Reveal>

      {/* Field has a fixed aspect ratio: ground fills the lower 75%, drone sits across its top edge. */}
      <div className="field">
        <div className="ground">
          <div className="photo-bg" style={{ backgroundImage: 'url(/assets/perimeter-bg.png)' }} />
        </div>
        <div className="field-drone">
          <img src="/assets/perimeter-drone.png" alt="Perimeter 8 UAV" />
        </div>
        <div className="chips">
          {p.chips.map((c, i) => <FeatureChip key={c.text} {...c} delay={i * 90} />)}
        </div>
      </div>
    </section>
  )
}
