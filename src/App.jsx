import { useState, useEffect, useCallback } from 'react'
import Header  from './components/Header'
import Hero    from './components/Hero'
import Products from './components/Products'
import About   from './components/About'
import Contact from './components/Contact'
import Footer  from './components/Footer'

/* ─────────────────────────────────────────────────
   Inquiry Modal — triggered when a product card's
   "Inquire" / "Request quote" is clicked.
───────────────────────────────────────────────── */
function InquiryModal({ product, onClose }) {
  useEffect(() => {
    document.body.style.overflow = 'hidden'
    const onKey = (e) => e.key === 'Escape' && onClose()
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKey)
    }
  }, [onClose])

  if (!product) return null

  const waMessage = encodeURIComponent(`Hi, I'm interested in: ${product.name}`)

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4"
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-bark/70 backdrop-blur-sm" onClick={onClose} />

      {/* Modal */}
      <div className="relative z-10 bg-ivory max-w-lg w-full overflow-hidden shadow-2xl animate-fade-up">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center text-bark/40 hover:text-bark transition-colors z-20"
          aria-label="Close modal"
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M2 2l12 12M14 2L2 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
          </svg>
        </button>

        <div className="grid grid-cols-2">
          {/* Image */}
          <div className="aspect-square bg-cream overflow-hidden">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover"
            />
          </div>
          {/* Info */}
          <div className="p-6 flex flex-col justify-between">
            <div>
              <p className="font-inter text-xs text-gold tracking-widest uppercase mb-2"
                 style={{ letterSpacing: '0.2em', fontSize: '10px' }}>
                {product.category}
              </p>
              <h3 className="font-cormorant text-2xl font-medium text-indigo-deep leading-tight mb-3">
                {product.name}
              </h3>
              <p className="font-inter text-xs text-bark/60 leading-relaxed">
                {product.description}
              </p>
            </div>
            <div className="space-y-3 mt-6">
              <a
                href={`https://wa.me/919811818950?text=${waMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary w-full justify-center text-xs"
              >
                Enquire on WhatsApp
              </a>
              <button
                className="w-full font-inter text-xs text-bark/50 hover:text-gold transition-colors duration-200 tracking-wide"
                onClick={onClose}
              >
                Continue Browsing
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

/* ─────────────────────────────────────────────────
   Social + Back-to-top sticky cluster
───────────────────────────────────────────────── */
const SOCIALS = [
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/sutraayaofficial?igsh=bmJvM3B1dTltMmMx&utm_source=qr',
    icon: (
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
        <rect x="2" y="2" width="12" height="12" rx="3.5" stroke="currentColor" strokeWidth="1.4"/>
        <circle cx="8" cy="8" r="3" stroke="currentColor" strokeWidth="1.4"/>
        <circle cx="11.5" cy="4.5" r="0.8" fill="currentColor"/>
      </svg>
    ),
  },
  {
    label: 'WhatsApp',
    href: 'https://wa.me/919811818950',
    icon: (
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
        <path d="M8 1.5a6.5 6.5 0 015.5 9.9L14.5 14.5l-3.1-.9A6.5 6.5 0 118 1.5z"
              stroke="currentColor" strokeWidth="1.4" fill="none"/>
        <path d="M5.5 6.5c.4.8 1.2 1.6 2 2" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    label: 'Facebook',
    href: 'https://www.facebook.com/profile.php?id=61587769965156',
    icon: (
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
        <circle cx="8" cy="8" r="6.5" stroke="currentColor" strokeWidth="1.4"/>
        <path d="M9 5H7.5A.5.5 0 007 5.5V7H5.5v2H7v5h2V9h1.5l.5-2H9V6a1 1 0 011-1"
              stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
]

function BackToTop() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 600)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div
      className={`fixed bottom-8 right-6 z-40 flex flex-col items-center gap-2
                  transition-all duration-400
                  ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'}`}
    >
      {/* Social icons */}
      {SOCIALS.map(({ label, href, icon }) => (
        <a
          key={label}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={label}
          className="w-9 h-9 flex items-center justify-center bg-white text-bark/60
                     border border-cream shadow-sm hover:text-gold hover:border-gold/50
                     transition-colors duration-200"
        >
          {icon}
        </a>
      ))}

      {/* Divider */}
      <div className="w-px h-4 bg-bark/20" />

      {/* Back to top */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        aria-label="Back to top"
        className="w-11 h-11 flex items-center justify-center
                   bg-indigo-deep text-ivory shadow-gold border border-gold/30
                   hover:bg-gold hover:border-gold transition-colors duration-200"
      >
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
          <path d="M8 12V4M4 8l4-4 4 4" stroke="currentColor" strokeWidth="1.5"
                strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>
    </div>
  )
}

/* ─────────────────────────────────────────────────
   Root App
───────────────────────────────────────────────── */
export default function App() {
  const [inquiryProduct, setInquiryProduct] = useState(null)

  const handleInquire = useCallback((product) => {
    setInquiryProduct(product)
  }, [])

  const handleModalClose = useCallback(() => {
    setInquiryProduct(null)
  }, [])

  return (
    <>
      <Header />
      <main>
        <Hero />
        <Products onInquire={handleInquire} />
        <About />
        <Contact />
      </main>
      <Footer />

      {/* Product Inquiry Modal */}
      {inquiryProduct && (
        <InquiryModal
          product={inquiryProduct}
          onClose={handleModalClose}
        />
      )}

      {/* Back to top */}
      <BackToTop />
    </>
  )
}
