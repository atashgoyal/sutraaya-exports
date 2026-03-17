import React from 'react'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

const BUYER_TYPES = [
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="3" y="10" width="22" height="15" rx="1" stroke="#B8962E" strokeWidth="1.4" fill="none"/>
        <path d="M9 10V7a5 5 0 0110 0v3" stroke="#B8962E" strokeWidth="1.4" strokeLinecap="round" fill="none"/>
        <circle cx="14" cy="17" r="2" stroke="#B8962E" strokeWidth="1.2" fill="none"/>
      </svg>
    ),
    title: 'Boutique & Home Décor Stores',
    description: 'Curated artisan pieces that stand out on shelves and tell a story of heritage craft.',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="4" y="4" width="8" height="8" rx="1" stroke="#B8962E" strokeWidth="1.4" fill="none"/>
        <rect x="16" y="4" width="8" height="8" rx="1" stroke="#B8962E" strokeWidth="1.4" fill="none"/>
        <rect x="4" y="16" width="8" height="8" rx="1" stroke="#B8962E" strokeWidth="1.4" fill="none"/>
        <rect x="16" y="16" width="8" height="8" rx="1" stroke="#B8962E" strokeWidth="1.4" fill="none"/>
      </svg>
    ),
    title: 'Wholesale Importers',
    description: 'Bulk orders at competitive prices with full export documentation and logistics support.',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M4 22V10l10-6 10 6v12" stroke="#B8962E" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
        <rect x="10" y="14" width="8" height="8" stroke="#B8962E" strokeWidth="1.2" fill="none"/>
        <path d="M10 10h8" stroke="#B8962E" strokeWidth="1.2" strokeLinecap="round"/>
      </svg>
    ),
    title: 'Hotel & Hospitality Buyers',
    description: 'Authentic Indian accents for lobbies, rooms, and dining spaces that delight global guests.',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="3" y="6" width="22" height="16" rx="2" stroke="#B8962E" strokeWidth="1.4" fill="none"/>
        <path d="M8 11h12M8 15h8" stroke="#B8962E" strokeWidth="1.3" strokeLinecap="round"/>
        <circle cx="21" cy="15" r="2" stroke="#B8962E" strokeWidth="1.2" fill="none"/>
      </svg>
    ),
    title: 'Online Retailers & Marketplaces',
    description: 'High-resolution product images, detailed descriptions, and drop-shipping-ready packaging.',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M14 3l2.5 7h7l-5.5 4 2 7L14 17l-6 4 2-7L4.5 10h7z" stroke="#B8962E" strokeWidth="1.4" strokeLinejoin="round" fill="none"/>
      </svg>
    ),
    title: 'Gift & Lifestyle Brands',
    description: 'Unique handmade pieces that add meaning and artisan provenance to curated gift collections.',
  },
]

const HOW_IT_WORKS = [
  {
    step: '01',
    title: 'Browse the Collection',
    description: 'Explore our curated range of Blue Pottery, fabrics, wooden crafts, and more.',
  },
  {
    step: '02',
    title: 'Share Your Requirements',
    description: 'Tell us your quantities, customisation needs, and destination market.',
  },
  {
    step: '03',
    title: 'Receive a Custom Quote',
    description: 'We provide transparent pricing with full HSN codes and export documentation.',
  },
  {
    step: '04',
    title: 'Delivered to Your Door',
    description: 'We handle packaging, quality checks, and end-to-end international shipping.',
  },
]

export default function WhoWeServe() {
  const sectionRef = useScrollAnimation()

  return (
    <section id="who-we-serve" className="py-24 bg-cream" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-6">

        {/* ── Who We Serve ─────────────────────────── */}
        <div className="text-center mb-16">
          <p className="reveal section-eyebrow mb-3">Our Buyers</p>
          <h2 className="reveal section-title reveal-delay-1 mb-5">
            Who We Serve
          </h2>
          <div className="reveal reveal-delay-2 gold-divider mx-auto mb-6" />
          <p className="reveal reveal-delay-3 font-inter text-sm text-bark/60 max-w-xl mx-auto leading-relaxed">
            From independent boutiques to global hospitality brands — we supply authentic
            Indian artisan goods to buyers who value quality, heritage, and story.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 mb-24">
          {BUYER_TYPES.map(({ icon, title, description }, i) => (
            <div
              key={title}
              className={`reveal reveal-delay-${Math.min(i + 1, 6)} bg-ivory border border-cream p-6 flex flex-col items-center text-center`}
            >
              <div className="mb-4">{icon}</div>
              <h3 className="font-cormorant text-lg font-medium text-indigo-deep leading-tight mb-2">
                {title}
              </h3>
              <p className="font-inter text-xs text-bark/60 leading-relaxed">
                {description}
              </p>
            </div>
          ))}
        </div>

        {/* ── How It Works ─────────────────────────── */}
        <div className="text-center mb-16">
          <p className="reveal section-eyebrow mb-3">The Process</p>
          <h2 className="reveal section-title reveal-delay-1 mb-5">
            How It Works
          </h2>
          <div className="reveal reveal-delay-2 gold-divider mx-auto" />
        </div>

        <div className="relative">
          {/* Connecting line — desktop only */}
          <div
            className="hidden lg:block absolute top-8 left-[12.5%] right-[12.5%] h-px"
            style={{ background: 'linear-gradient(90deg, transparent, #B8962E 20%, #B8962E 80%, transparent)' }}
            aria-hidden="true"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {HOW_IT_WORKS.map(({ step, title, description }, i) => (
              <div
                key={step}
                className={`reveal reveal-delay-${Math.min(i + 1, 6)} flex flex-col items-center text-center`}
              >
                {/* Step number circle */}
                <div
                  className="w-16 h-16 flex items-center justify-center border border-gold/40 bg-ivory mb-6 relative z-10"
                  style={{ flexShrink: 0 }}
                >
                  <span
                    className="font-cormorant font-light text-gold"
                    style={{ fontSize: '22px', lineHeight: 1 }}
                  >
                    {step}
                  </span>
                </div>
                <h3 className="font-cormorant text-xl font-medium text-indigo-deep mb-3 leading-tight">
                  {title}
                </h3>
                <p className="font-inter text-xs text-bark/60 leading-relaxed max-w-xs">
                  {description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="reveal mt-16 text-center">
          <p className="font-cormorant italic text-xl text-bark/60 mb-6">
            Ready to start sourcing? Let's talk.
          </p>
          <button
            className="btn-primary"
            onClick={() => {
              const el = document.getElementById('contact')
              if (el) {
                const top = el.getBoundingClientRect().top + window.scrollY - 72
                window.scrollTo({ top, behavior: 'smooth' })
              }
            }}
          >
            Get in Touch
          </button>
        </div>

      </div>
    </section>
  )
}
