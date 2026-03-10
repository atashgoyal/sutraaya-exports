import React, { useState, useEffect } from 'react'
import Logo from './Logo'

const NAV_LINKS = [
  { label: 'Collection', href: '#collection' },
  { label: 'Our Story',  href: '#about' },
  { label: 'Categories', href: '#categories' },
  { label: 'Contact',    href: '#contact' },
]

export default function Header() {
  const [scrolled,     setScrolled]     = useState(false)
  const [menuOpen,     setMenuOpen]     = useState(false)
  const [activeSection, setActiveSection] = useState('')

  /* ── Scroll detection ──────────────────────── */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  /* ── Active section tracking ───────────────── */
  useEffect(() => {
    const sectionIds = NAV_LINKS.map((l) => l.href.replace('#', ''))
    const observers = sectionIds.map((id) => {
      const el = document.getElementById(id)
      if (!el) return null
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActiveSection(id) },
        { threshold: 0.35 }
      )
      obs.observe(el)
      return obs
    })
    return () => observers.forEach((o) => o && o.disconnect())
  }, [])

  /* ── Lock body scroll when menu open ──────── */
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  const handleNavClick = (href) => {
    setMenuOpen(false)
    const target = document.querySelector(href)
    if (target) {
      const offset = 72
      const top = target.getBoundingClientRect().top + window.scrollY - offset
      window.scrollTo({ top, behavior: 'smooth' })
    }
  }

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-ivory/95 backdrop-blur-md shadow-sm border-b border-cream'
            : 'bg-transparent'
        }`}
        style={{ height: '72px' }}
      >
        <div className="max-w-7xl mx-auto h-full px-6 flex items-center justify-between">
          {/* Logo */}
          <a
            href="#"
            onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }) }}
            className="flex items-center"
          >
            <Logo variant={scrolled ? 'dark' : 'light'} />
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map(({ label, href }) => (
              <button
                key={href}
                onClick={() => handleNavClick(href)}
                className={`nav-link transition-colors duration-200 ${
                  scrolled ? 'text-bark hover:text-gold' : 'text-ivory/90 hover:text-gold-light'
                } ${activeSection === href.replace('#', '') ? '!text-gold' : ''}`}
              >
                {label}
              </button>
            ))}
            <button
              onClick={() => handleNavClick('#contact')}
              className={`font-inter text-xs font-medium tracking-wider uppercase px-5 py-2.5 border transition-all duration-300 ${
                scrolled
                  ? 'border-terracotta text-terracotta hover:bg-terracotta hover:text-ivory'
                  : 'border-ivory/60 text-ivory hover:border-gold hover:text-gold'
              }`}
              style={{ letterSpacing: '0.14em' }}
            >
              Request a Quote
            </button>
          </nav>

          {/* Mobile Hamburger */}
          <button
            className="md:hidden flex flex-col gap-1.5 p-2 z-50"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            <span
              className={`block w-6 h-0.5 transition-all duration-300 ${
                menuOpen
                  ? 'rotate-45 translate-y-2 bg-bark'
                  : scrolled ? 'bg-bark' : 'bg-ivory'
              }`}
            />
            <span
              className={`block w-6 h-0.5 transition-all duration-300 ${
                menuOpen ? 'opacity-0 bg-bark' : scrolled ? 'bg-bark' : 'bg-ivory'
              }`}
            />
            <span
              className={`block w-6 h-0.5 transition-all duration-300 ${
                menuOpen
                  ? '-rotate-45 -translate-y-2 bg-bark'
                  : scrolled ? 'bg-bark' : 'bg-ivory'
              }`}
            />
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-40 bg-ivory/98 backdrop-blur-md flex flex-col items-center justify-center transition-all duration-500 ${
          menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        {/* Decorative background accent */}
        <div className="absolute inset-0 pattern-overlay opacity-30 pointer-events-none" />

        <nav className="flex flex-col items-center gap-8 relative z-10">
          <Logo variant="dark" />
          <div className="gold-divider-wide my-2" />
          {NAV_LINKS.map(({ label, href }, i) => (
            <button
              key={href}
              onClick={() => handleNavClick(href)}
              className="font-cormorant text-4xl font-light text-indigo-deep hover:text-gold transition-colors duration-200"
            >
              {label}
            </button>
          ))}
          <button
            onClick={() => handleNavClick('#contact')}
            className="mt-4 btn-primary"
          >
            Request a Quote
          </button>
        </nav>

        {/* Footer note */}
        <p className="absolute bottom-8 font-inter text-xs text-bark/40 tracking-widest uppercase">
          sutraayaexports.com
        </p>
      </div>
    </>
  )
}
