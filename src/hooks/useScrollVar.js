import { useEffect } from 'react'

// Writes window scroll position to --sy on <html> (rAF throttled) for CSS-driven parallax.
export function useScrollVar() {
  useEffect(() => {
    const root = document.documentElement
    let raf = 0
    const update = () => {
      root.style.setProperty('--sy', String(window.scrollY))
      raf = 0
    }
    const onScroll = () => { if (!raf) raf = requestAnimationFrame(update) }
    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', onScroll)
      if (raf) cancelAnimationFrame(raf)
    }
  }, [])
}
