import { useEffect, useRef, useState } from 'react'

/**
 * Revela un elemento con fade + translateY cuando entra en viewport.
 * Devuelve [ref, isVisible] para aplicar la clase "reveal is-visible".
 */
export default function useReveal(threshold = 0.15) {
  const ref = useRef(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const node = ref.current
    if (!node) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { threshold }
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [threshold])

  return [ref, isVisible]
}
