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
    title: 'Authentic Handcrafted Products',
    text:  'Every piece is individually shaped and crafted by skilled artisans — no two are identical.',
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true">
        <circle cx="16" cy="10" r="5" stroke="#B8962E" strokeWidth="1.5" fill="none"/>
        <path d="M8 28c0-4.4 3.6-8 8-8s8 3.6 8 8" stroke="#B8962E" strokeWidth="1.5" strokeLinecap="round" fill="none"/>
        <path d="M22 14c2.2.8 4 2.8 4 5.5" stroke="#B8962E" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    title: 'Direct Artisan Sourcing',
    text:  'We work directly with artisan communities across India, ensuring authenticity and fair partnerships.',
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true">
        <path d="M8 16l5 5 11-11" stroke="#B8962E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <circle cx="16" cy="16" r="11" stroke="#B8962E" strokeWidth="1.5" fill="none"/>
      </svg>
    ),
    title: 'Consistent Quality Checks',
    text:  'Every product is carefully inspected before export, ensuring reliability for retail and import partners.',
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true">
        <rect x="4" y="20" width="24" height="8" rx="1" stroke="#B8962E" strokeWidth="1.5" fill="none"/>
        <path d="M8 20V14a4 4 0 014-4h8a4 4 0 014 4v6" stroke="#B8962E" strokeWidth="1.5" strokeLinejoin="round" fill="none"/>
        <path d="M13 10V8M19 10V8" stroke="#B8962E" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    title: 'Custom Orders & Global Shipping',
    text:  'Custom orders available with worldwide shipping support to the US, UK, EU and beyond.',
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
            <p className="reveal section-eyebrow mb-3">About Sutraaya Exports</p>
            <h2 className="reveal section-title reveal-delay-1 mb-6">
              Where Ancient Craft
              <span className="block italic font-light text-terracotta">
                Meets the Modern World
              </span>
            </h2>
            <div className="reveal reveal-delay-2 gold-divider mb-8" />

            <div className="reveal reveal-delay-2 space-y-5 font-inter text-sm text-bark/70 leading-relaxed">
              <p>
                Sutraaya Exports brings India's rich craft heritage to global markets. From the
                renowned Blue Pottery of Jaipur — a centuries-old craft recognised with a{' '}
                <em className="text-bark/90">Geographical Indication</em> tag — to the intricate
                hand block-print textiles of Rajasthan, finely carved wooden crafts, and
                artisan-made bags, our collections celebrate timeless traditions and skilled
                craftsmanship.
              </p>
              <p>
                We work closely with artisan communities across India to curate high-quality
                handmade products that reflect authenticity, culture, and sustainability. Every
                piece is carefully selected, quality-checked, and prepared for international
                markets, ensuring reliable sourcing for retailers and import partners.
              </p>
              <p>
                By choosing <strong className="font-medium text-indigo-deep">Sutraaya Exports</strong>,
                you support artisan livelihoods while bringing distinctive handmade creations into
                homes around the world.
              </p>
              <p className="italic text-bark/60">Crafted in India, delivered worldwide.</p>
            </div>

            <div className="reveal reveal-delay-3 mt-8">
              <button
                className="btn-primary"
                onClick={() => {
                  const el = document.getElementById('collection')
                  if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 72, behavior: 'smooth' })
                }}
              >
                View Collection
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
        <div className="mt-20">
          <div className="text-center mb-10">
            <p className="reveal section-eyebrow mb-3">Why Partner With Us</p>
            <div className="reveal reveal-delay-2 gold-divider mx-auto mb-8" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
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
      </div>
    </section>
  )
}
