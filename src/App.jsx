import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import Technology from './components/Technology.jsx'
import Perimeter from './components/Perimeter.jsx'
import { useScrollVar } from './hooks/useScrollVar.js'

export default function App() {
  useScrollVar()
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Technology />
        <Perimeter />
      </main>
    </>
  )
}
