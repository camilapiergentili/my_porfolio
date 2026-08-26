import { useEffect, useState } from 'react'

/**
 * Devuelve true cuando el usuario scrolleó más de `threshold` px.
 * Único punto de verdad para este comportamiento (antes duplicado
 * entre App y Navigation con umbrales distintos).
 */
export default function useScrolled(threshold = 10) {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > threshold)
    handleScroll()
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [threshold])

  return scrolled
}
