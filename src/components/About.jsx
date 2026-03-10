import React from 'react'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

const PILLARS = [
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true">
        <path d="M16 4C16 4 8 9 8 17a8 8 0 0016 0C24 9 16 4 16 4z"
              stroke="#B8962E" strokeWidth="1.5" strokeLinejoin="round" fill="none"/>
        <path d="M16 12v8M12 16h8" stroke="#B8962E" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    title: 'Handmade',
    text:  'Every piece is individually shaped, painted, and fired by skilled artisans — no two are identical.',
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true">
        <circle cx="16" cy="16" r="10" stroke="#B8962E" strokeWidth="1.5" fill="none"/>
        <path d="M16 6 C10 10 10 22 16 26 C22 22 22 10 16 6Z"
              stroke="#B8962E" strokeWidth="1.5" fill="none"/>
        <path d="M6 16h20" stroke="#B8962E" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    title: 'Eco-Friendly',
    text:  'Natural mineral pigments, local quartz, and lead-free glazes. Gentle on the planet, stunning in your space.',
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true">
        <rect x="4" y="20" width="24" height="8" rx="1" stroke="#B8962E" strokeWidth="1.5" fill="none"/>
        <path d="M8 20V14a4 4 0 014-4h8a4 4 0 014 4v6" stroke="#B8962E" strokeWidth="1.5" strokeLinejoin="round" fill="none"/>
        <path d="M13 10V8M19 10V8" stroke="#B8962E" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    title: 'Worldwide Shipping',
    text:  'Professionally packed and insured worldwide delivery to the US, UK, EU and beyond.',
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true">
        <path d="M16 28C16 28 4 22 4 12a6 6 0 0112-1 6 6 0 0112 1C28 22 16 28 16 28z"
              stroke="#B8962E" strokeWidth="1.5" strokeLinejoin="round" fill="none"/>
      </svg>
    ),
    title: 'Ethically Sourced',
    text:  'We partner directly with certified artisan co-operatives, ensuring fair wages and dignified work.',
  },
]

export default function About() {
  const sectionRef = useScrollAnimation()

  return (
    <section id="about" className="py-24 bg-cream" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* ── Left: Story text ─────────────────── */}
          <div>
            <p className="reveal section-eyebrow mb-3">Our Heritage</p>
            <h2 className="reveal section-title reveal-delay-1 mb-6">
              Where Ancient Craft
              <span className="block italic font-light text-terracotta">
                Meets the Modern World
              </span>
            </h2>
            <div className="reveal reveal-delay-2 gold-divider mb-8" />

            <div className="reveal reveal-delay-2 space-y-5 font-inter text-sm text-bark/70 leading-relaxed">
              <p>
                For over five centuries, the artisans of Jaipur have practised the rare art of
                Blue Pottery — a craft so distinctive it carries a{' '}
                <em className="text-bark/90">Geographical Indication</em> tag by the Government of India.
                Rooted in Persian and Mughal traditions, it is shaped by hand, glazed with mineral
                pigments, and fired at low temperatures to preserve its signature cobalt brilliance.
              </p>
              <p>
                At <strong className="font-medium text-indigo-deep">Sutraaya Exports</strong>, we act
                as the bridge between these master craftspeople and homes around the world. In
                partnership with{' '}
                <a
                  href="https://deals.heartfulcraft.com/shruti-srivastava/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-terracotta hover:text-terracotta-dark underline underline-offset-2 transition-colors duration-200"
                >
                  Heartful Crafts
                </a>
                , we curate, quality-check, and export the finest pieces with the same care they
                were created with.
              </p>
              <p>
                Every purchase supports an artisan family, preserves a living tradition, and
                brings a piece of India's soul into your home.
              </p>
            </div>

            <div className="reveal reveal-delay-3 mt-8 flex flex-col sm:flex-row gap-4">
              <button
                className="btn-primary"
                onClick={() => {
                  const el = document.getElementById('collection')
                  if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 72, behavior: 'smooth' })
                }}
              >
                View Collection
              </button>
              <button
                className="btn-outline"
                onClick={() => {
                  const el = document.getElementById('contact')
                  if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 72, behavior: 'smooth' })
                }}
              >
                Partner With Us
              </button>
            </div>
          </div>

          {/* ── Right: Visual quote + stats ──────── */}
          <div className="reveal reveal-delay-2">
            {/* Pull quote card */}
            <div
              className="relative p-10 bg-indigo-deep text-ivory overflow-hidden mb-8"
              style={{ borderLeft: '3px solid #B8962E' }}
            >
              {/* Large decorative quote mark */}
              <span
                className="absolute top-2 right-6 font-cormorant text-8xl text-gold/20 leading-none select-none"
                aria-hidden="true"
              >
                "
              </span>
              <p className="font-cormorant text-2xl font-light italic leading-snug relative z-10 mb-6">
                We don't just sell pottery. We carry forward a living legacy — one brushstroke
                at a time.
              </p>
              <div className="flex items-center gap-3">
                <div className="w-8 h-px bg-gold opacity-60" />
                <span className="font-inter text-xs text-ivory/60 tracking-wider uppercase"
                      style={{ letterSpacing: '0.18em' }}>
                  Sutraaya Exports
                </span>
              </div>
            </div>

            {/* Stats row */}
            <div className="grid grid-cols-3 gap-4">
              {[
                { value: '500+',  label: 'Artisan Families' },
                { value: '20+',   label: 'Countries Served' },
                { value: '100%',  label: 'Handcrafted' },
              ].map(({ value, label }) => (
                <div key={label} className="text-center p-5 bg-white border border-cream">
                  <p className="font-cormorant text-4xl font-light text-indigo-deep mb-1">
                    {value}
                  </p>
                  <p className="font-inter text-xs text-bark/50 tracking-wide">
                    {label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── Four Pillars ─────────────────────────── */}
        <div className="mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {PILLARS.map(({ icon, title, text }, i) => (
            <div
              key={title}
              className={`reveal reveal-delay-${i + 1} flex flex-col items-center text-center p-8 bg-white border border-cream hover:border-gold transition-colors duration-300`}
            >
              <div className="mb-4 w-12 h-12 flex items-center justify-center">{icon}</div>
              <h3 className="font-cormorant text-xl font-medium text-indigo-deep mb-3">{title}</h3>
              <p className="font-inter text-xs text-bark/60 leading-relaxed">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
