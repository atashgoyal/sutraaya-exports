import React, { useEffect, useRef } from 'react'

export default function Hero() {
  const headingRef = useRef(null)
  const subRef     = useRef(null)
  const ctaRef     = useRef(null)
  const badgeRef   = useRef(null)

  useEffect(() => {
    const els = [badgeRef, headingRef, subRef, ctaRef]
    els.forEach((ref, i) => {
      if (!ref.current) return
      ref.current.style.opacity = '0'
      ref.current.style.transform = 'translateY(24px)'
      setTimeout(() => {
        if (!ref.current) return
        ref.current.style.transition = 'opacity 0.9s cubic-bezier(0.22,1,0.36,1), transform 0.9s cubic-bezier(0.22,1,0.36,1)'
        ref.current.style.opacity = '1'
        ref.current.style.transform = 'translateY(0)'
      }, 200 + i * 180)
    })
  }, [])

  const handleScroll = (href) => {
    const target = document.querySelector(href)
    if (target) {
      const top = target.getBoundingClientRect().top + window.scrollY - 72
      window.scrollTo({ top, behavior: 'smooth' })
    }
  }

  return (
    <section className="hero-bg relative min-h-screen flex flex-col items-center justify-center text-center px-6 pt-24 pb-16">

      {/* ── Decorative mandala rings ─────────────── */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <radialGradient id="rg1" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#B8962E" stopOpacity="0.12" />
            <stop offset="100%" stopColor="#B8962E" stopOpacity="0" />
          </radialGradient>
        </defs>
        {/* Large faint gold ring */}
        <circle cx="50%" cy="48%" r="38%" stroke="#B8962E" strokeOpacity="0.08" strokeWidth="1" fill="url(#rg1)" />
        <circle cx="50%" cy="48%" r="28%" stroke="#B8962E" strokeOpacity="0.1"  strokeWidth="0.5" fill="none" />
        <circle cx="50%" cy="48%" r="18%" stroke="#B8962E" strokeOpacity="0.12" strokeWidth="0.5" fill="none" />

        {/* Diamond lattice corner accents */}
        <g stroke="#B8962E" strokeOpacity="0.1" strokeWidth="0.5" fill="none">
          <line x1="0" y1="0"    x2="180" y2="180" />
          <line x1="0" y1="180" x2="180" y2="0"    />
          <line x1="100%" y1="0"    x2="calc(100% - 180px)" y2="180" />
          <line x1="100%" y1="180" x2="calc(100% - 180px)" y2="0"    />
        </g>

        {/* Subtle star-burst rays */}
        {Array.from({ length: 12 }).map((_, i) => {
          const angle = (i * 30 * Math.PI) / 180
          const cx = 50, cy = 48
          const r1 = 20, r2 = 45
          const x1 = cx + r1 * Math.cos(angle)
          const y1 = cy + r1 * Math.sin(angle)
          const x2 = cx + r2 * Math.cos(angle)
          const y2 = cy + r2 * Math.sin(angle)
          return (
            <line
              key={i}
              x1={`${x1}%`} y1={`${y1}%`}
              x2={`${x2}%`} y2={`${y2}%`}
              stroke="#B8962E"
              strokeOpacity="0.06"
              strokeWidth="0.5"
            />
          )
        })}
      </svg>

      {/* ── Hero content ─────────────────────────── */}
      <div className="relative z-10 max-w-3xl mx-auto">

        {/* Eyebrow badge */}
        <div ref={badgeRef} className="inline-flex items-center gap-3 mb-8">
          <span className="block w-8 h-px bg-gold opacity-60" />
          <span
            className="font-inter text-xs font-medium tracking-widest uppercase text-gold-light"
            style={{ letterSpacing: '0.3em' }}
          >
            Est. India · Global Artisan Exports
          </span>
          <span className="block w-8 h-px bg-gold opacity-60" />
        </div>

        {/* Main heading */}
        <h1
          ref={headingRef}
          className="font-cormorant text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-light text-ivory leading-[1.05] mb-6"
        >
          Handcrafted
          <span className="block italic font-light" style={{ color: '#D4AF5A' }}>
            in India.
          </span>
          <span className="block font-extralight">
            Loved by the World.
          </span>
        </h1>

        {/* Decorative divider */}
        <div className="flex items-center justify-center gap-4 my-8">
          <span className="block w-16 h-px bg-gold opacity-40" />
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
            <path d="M10 2 L12 8 L18 8 L13 12 L15 18 L10 14 L5 18 L7 12 L2 8 L8 8 Z"
                  fill="#B8962E" fillOpacity="0.6" />
          </svg>
          <span className="block w-16 h-px bg-gold opacity-40" />
        </div>

        {/* Subheading */}
        <p
          ref={subRef}
          className="font-inter text-base md:text-lg text-ivory/70 leading-relaxed max-w-xl mx-auto mb-10"
          style={{ fontWeight: 300 }}
        >
          We partner with India's finest artisans to bring authentic, ethically crafted Blue
          Pottery, textile and handicrafts to homes across the world.
        </p>

        {/* CTA Buttons */}
        <div ref={ctaRef} className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            className="btn-primary"
            onClick={() => handleScroll('#collection')}
          >
            <span>Explore Collection</span>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5"
                    strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
          <button
            className="btn-outline"
            onClick={() => handleScroll('#about')}
          >
            Our Story
          </button>
        </div>
      </div>

      {/* ── Scroll indicator ─────────────────────── */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
        <span className="font-inter text-xs text-ivory/30 tracking-widest uppercase"
              style={{ letterSpacing: '0.2em' }}>Scroll</span>
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
          <path d="M5 7l5 5 5-5" stroke="#B8962E" strokeOpacity="0.5" strokeWidth="1.5"
                strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>

      {/* ── Bottom fade to ivory ──────────────────── */}
      <div
        className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none"
        style={{ background: 'linear-gradient(to bottom, transparent, #FAF7F0)' }}
      />
    </section>
  )
}
