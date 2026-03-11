import { useScrollAnimation } from '../hooks/useScrollAnimation'

const CONTACT_ITEMS = [
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
        <path d="M3 3h12a1 1 0 011 1v10a1 1 0 01-1 1H3a1 1 0 01-1-1V4a1 1 0 011-1z"
              stroke="#B8962E" strokeWidth="1.2" fill="none"/>
        <path d="M2 4l7 6 7-6" stroke="#B8962E" strokeWidth="1.2" strokeLinecap="round"/>
      </svg>
    ),
    label: 'Email',
    value: 'shruti@sutraayaexports.com',
    href:  'mailto:shruti@sutraayaexports.com',
  },
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
        <path d="M9 2a7 7 0 016 10.5L16 16l-3.5-1A7 7 0 119 2z"
              stroke="#B8962E" strokeWidth="1.2" fill="none"/>
        <path d="M6.5 7.5c.5 1 1.5 2 2.5 2.5"
              stroke="#B8962E" strokeWidth="1.2" strokeLinecap="round"/>
      </svg>
    ),
    label: 'WhatsApp',
    value: '+91 98118 18950',
    href:  'https://wa.me/919811818950',
  },
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
        <path d="M9 2a5 5 0 00-5 5c0 4 5 9 5 9s5-5 5-9a5 5 0 00-5-5z"
              stroke="#B8962E" strokeWidth="1.2" fill="none"/>
        <circle cx="9" cy="7" r="2" stroke="#B8962E" strokeWidth="1.2"/>
      </svg>
    ),
    label: 'Location',
    value: 'Gurugram, Haryana, India',
    href:  null,
  },
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
        <circle cx="9" cy="9" r="7" stroke="#B8962E" strokeWidth="1.2" fill="none"/>
        <path d="M9 4v5l3 3" stroke="#B8962E" strokeWidth="1.2" strokeLinecap="round"/>
      </svg>
    ),
    label: 'Response Time',
    value: 'Within 24 hours (Mon–Sat)',
    href:  null,
  },
]

export default function Contact() {
  const sectionRef = useScrollAnimation()

  return (
    <section id="contact" className="py-24 bg-ivory" ref={sectionRef}>
      <div className="max-w-2xl mx-auto px-6 text-center">

        <p className="reveal section-eyebrow mb-3">Get in Touch</p>
        <h2 className="reveal section-title reveal-delay-1 mb-6">
          Let's Build Something
          <span className="block italic font-light text-terracotta">Beautiful Together</span>
        </h2>
        <div className="reveal reveal-delay-2 gold-divider mb-8 mx-auto" />

        <p className="reveal reveal-delay-2 font-inter text-sm text-bark/70 leading-relaxed mb-10">
          Whether you're a boutique retailer, interior designer, hotel buyer, wholesaler,
          handicraft importer or a thoughtful individual — reach out directly and we'll get back to you.
        </p>

        {/* Contact details */}
        <div className="reveal reveal-delay-3 grid grid-cols-1 sm:grid-cols-2 gap-5 text-left">
          {CONTACT_ITEMS.map(({ icon, label, value, href }) => (
            <div key={label} className="flex items-start gap-4 p-5 bg-white border border-cream">
              <div className="mt-0.5 w-8 h-8 flex-shrink-0 flex items-center justify-center bg-cream border border-gold/30">
                {icon}
              </div>
              <div>
                <p className="font-inter text-xs text-bark/40 tracking-wider uppercase mb-0.5"
                   style={{ fontSize: '10px', letterSpacing: '0.18em' }}>
                  {label}
                </p>
                {href ? (
                  <a href={href} target="_blank" rel="noopener noreferrer"
                     className="font-inter text-sm text-bark hover:text-terracotta transition-colors duration-200">
                    {value}
                  </a>
                ) : (
                  <p className="font-inter text-sm text-bark">{value}</p>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Direct CTA */}
        <div className="reveal reveal-delay-4 mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="https://wa.me/919811818950"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M8 1.5a6.5 6.5 0 015.5 9.9L14.5 14.5l-3.1-.9A6.5 6.5 0 118 1.5z"
                    stroke="currentColor" strokeWidth="1.4" fill="none"/>
              <path d="M5.5 6.5c.4.8 1.2 1.6 2 2" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
            </svg>
            Chat on WhatsApp
          </a>
          <a
            href="mailto:shruti@sutraayaexports.com"
            className="btn-outline"
          >
            Send an Email
          </a>
        </div>

      </div>
    </section>
  )
}
