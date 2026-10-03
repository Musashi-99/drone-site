import Icon from './Icon.jsx'
import Reveal from './Reveal.jsx'

export default function FeatureChip({ icon, text, accent, x, y, delay }) {
  return (
    <Reveal className={`chip${accent ? ' yellow' : ''}`} delay={delay} style={{ '--x': `${x}%`, '--y': `${y}%` }}>
      <span className="cico"><Icon name={icon} /></span>
      <span>{text}</span>
    </Reveal>
  )
}
