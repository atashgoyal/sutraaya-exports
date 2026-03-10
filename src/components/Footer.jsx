import React from 'react'
import Logo from './Logo'

const SOCIAL_LINKS = [
  {
    label: 'Instagram',
    href:  'https://www.instagram.com/sutraayaofficial?igsh=bmJvM3B1dTltMmMx&utm_source=qr',
    icon: (
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
        <rect x="2" y="2" width="14" height="14" rx="4" stroke="currentColor" strokeWidth="1.3" fill="none"/>
        <circle cx="9" cy="9" r="3.5" stroke="currentColor" strokeWidth="1.3" fill="none"/>
        <circle cx="13.5" cy="4.5" r="1" fill="currentColor"/>
      </svg>
    ),
  },
  {
    label: 'Facebook',
    href:  'https://www.facebook.com/profile.php?id=61587769965156',
    icon: (
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
        <circle cx="9" cy="9" r="7" stroke="currentColor" strokeWidth="1.3" fill="none"/>
        <path d="M10.5 5H9a2 2 0 00-2 2v1H5.5v2.5H7V16h2.5v-5.5H11L11.5 8H9.5V7a.5.5 0 01.5-.5h1V5z"
              stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
      </svg>
    ),
  },
  {
    label: 'WhatsApp',
    href:  'https://wa.me/919811818950',
    icon: (
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
        <path d="M9 2a7 7 0 016 10.5L16 16l-3.5-1A7 7 0 119 2z"
              stroke="currentColor" strokeWidth="1.3" fill="none"/>
        <path d="M6.5 7.5c.5 1 1.5 2 2.5 2.5"
              stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/>
      </svg>
    ),
  },
]

const FOOTER_LINKS = {
  Collection: [
    { label: 'Blue Pottery Plates',    href: '#collection' },
    { label: 'Vases & Handis',         href: '#collection' },
    { label: 'Jars & Canisters',       href: '#collection' },
    { label: 'Egg Holders',            href: '#collection' },
    { label: 'Décor & Bells',          href: '#collection' },
  ],
  Company: [
    { label: 'Our Story',              href: '#about' },
    { label: 'Heartful Crafts Partner',href: 'https://deals.heartfulcraft.com/shruti-srivastava/' },
    { label: 'Contact Us',             href: '#contact' },
    { label: 'Request a Quote',        href: '#contact' },
  ],
  Export: [
    { label: 'US & Canada',            href: '#contact' },
    { label: 'United Kingdom',         href: '#contact' },
    { label: 'European Union',         href: '#contact' },
    { label: 'Australia & NZ',         href: '#contact' },
    { label: 'Bulk & Wholesale',       href: '#contact' },
  ],
}

export default function Footer() {
  const year = new Date().getFullYear()

  const handleNav = (e, href) => {
    if (href.startsWith('#')) {
      e.preventDefault()
      const target = document.querySelector(href)
      if (target) {
        const top = target.getBoundingClientRect().top + window.scrollY - 72
        window.scrollTo({ top, behavior: 'smooth' })
      }
    }
  }

  return (
    <footer className="bg-bark text-ivory/80">

      {/* ── Top Banner ──────────────────────────── */}
      <div
        className="border-b border-ivory/10"
        style={{ background: 'linear-gradient(135deg, #1A237E 0%, #2C1810 100%)' }}
      >
        <div className="max-w-7xl mx-auto px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="font-cormorant text-3xl font-light text-ivory mb-1">
              Ready to bring India home?
            </h3>
            <p className="font-inter text-xs text-ivory/50 tracking-wide">
              Exclusive artisan pieces, ready for worldwide export.
            </p>
          </div>
          <button
            className="flex-shrink-0 btn-primary"
            onClick={(e) => handleNav(e, '#contact')}
          >
            Request a Quote
          </button>
        </div>
      </div>

      {/* ── Main Footer ─────────────────────────── */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">

          {/* Brand column */}
          <div className="lg:col-span-2">
            <Logo variant="light" />
            <p className="mt-6 font-inter text-xs text-ivory/50 leading-relaxed max-w-xs">
              Sutraaya Exports is your trusted bridge to India's finest handcrafted heritage.
              We curate, authenticate, and export premium artisan goods to discerning buyers
              across the globe.
            </p>

            {/* Social icons */}
            <div className="flex items-center gap-3 mt-8">
              {SOCIAL_LINKS.map(({ label, href, icon }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith('http') ? '_blank' : undefined}
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-9 h-9 flex items-center justify-center border border-ivory/20 text-ivory/50
                             hover:border-gold hover:text-gold transition-all duration-200"
                >
                  {icon}
                </a>
              ))}
            </div>

            {/* Cert badges */}
            <div className="flex flex-wrap items-center gap-3 mt-8">
              {['GI Certified Crafts', 'Ethical Sourcing', 'Export Quality'].map((badge) => (
                <span
                  key={badge}
                  className="px-3 py-1 border border-gold/30 text-gold/70 font-inter"
                  style={{ fontSize: '10px', letterSpacing: '0.1em' }}
                >
                  {badge}
                </span>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(FOOTER_LINKS).map(([heading, links]) => (
            <div key={heading}>
              <h4
                className="font-inter font-medium text-ivory/90 mb-5"
                style={{ fontSize: '11px', letterSpacing: '0.2em', textTransform: 'uppercase' }}
              >
                {heading}
              </h4>
              <ul className="space-y-3">
                {links.map(({ label, href }) => (
                  <li key={label}>
                    <a
                      href={href}
                      target={href.startsWith('http') ? '_blank' : undefined}
                      rel="noopener noreferrer"
                      onClick={(e) => handleNav(e, href)}
                      className="font-inter text-xs text-ivory/50 hover:text-gold transition-colors duration-200"
                    >
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* ── Bottom bar ──────────────────────────── */}
      <div className="border-t border-ivory/10">
        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-inter text-xs text-ivory/30" style={{ letterSpacing: '0.06em' }}>
            © {year} Sutraaya Exports. All rights reserved.
          </p>
          <p className="font-inter text-xs text-ivory/30" style={{ letterSpacing: '0.06em' }}>
            Handcrafted in India. Loved by the World.
          </p>
          <div className="flex items-center gap-4">
            {['Privacy Policy', 'Terms of Service'].map((item) => (
              <a
                key={item}
                href="#"
                className="font-inter text-xs text-ivory/30 hover:text-ivory/60 transition-colors duration-200"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
