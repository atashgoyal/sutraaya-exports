import { useEffect, useRef } from 'react'

/**
 * Adds .visible class to elements with .reveal class when they enter the viewport.
 * Returns a ref to attach to the container element.
 */
export function useScrollAnimation(options = {}) {
  const ref = useRef(null)

  useEffect(() => {
    const { threshold = 0.12, rootMargin = '0px 0px -60px 0px' } = options

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold, rootMargin }
    )

    const container = ref.current
    if (!container) return

    const elements = container.querySelectorAll('.reveal')
    elements.forEach((el) => observer.observe(el))

    return () => {
      elements.forEach((el) => observer.unobserve(el))
    }
  }, [])

  return ref
}

/**
 * Observe a single element ref.
 */
export function useReveal(options = {}) {
  const ref = useRef(null)

  useEffect(() => {
    const { threshold = 0.15, rootMargin = '0px 0px -40px 0px' } = options
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('visible')
          observer.unobserve(el)
        }
      },
      { threshold, rootMargin }
    )

    observer.observe(el)
    return () => observer.unobserve(el)
  }, [])

  return ref
}
