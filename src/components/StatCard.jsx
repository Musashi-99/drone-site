import Icon from './Icon.jsx'
import Reveal from './Reveal.jsx'

export default function StatCard({ icon, value, unit, label, accent, delay }) {
  return (
    <Reveal as="article" delay={delay} className={`stat${accent ? ' yellow' : ''}`}>
      <Icon name={icon} className="stat-ico" />
      <strong>{value}<span>{unit}</span></strong>
      <em>{label}</em>
    </Reveal>
  )
}
