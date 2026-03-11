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
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <radialGradient id="ig-grad" cx="30%" cy="107%" r="150%">
            <stop offset="0%" stopColor="#fdf497"/>
            <stop offset="5%" stopColor="#fdf497"/>
            <stop offset="45%" stopColor="#fd5949"/>
            <stop offset="60%" stopColor="#d6249f"/>
            <stop offset="90%" stopColor="#285AEB"/>
          </radialGradient>
        </defs>
        <rect x="2" y="2" width="20" height="20" rx="6" fill="url(#ig-grad)"/>
        <circle cx="12" cy="12" r="4.5" stroke="white" strokeWidth="1.8" fill="none"/>
        <circle cx="17.5" cy="6.5" r="1.2" fill="white"/>
      </svg>
    ),
  },
  {
    label: 'WhatsApp',
    href: 'https://wa.me/919811818950',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="12" cy="12" r="12" fill="#25D366"/>
        <path d="M17.5 14.4c-.3-.1-1.7-.8-1.9-.9-.3-.1-.5-.1-.7.1-.2.3-.7.9-.9 1.1-.2.2-.3.2-.6.1-.3-.2-1.3-.5-2.4-1.5-.9-.8-1.5-1.8-1.7-2.1-.2-.3 0-.5.1-.6l.4-.5c.1-.2.2-.3.3-.5.1-.2 0-.4 0-.5-.1-.2-.7-1.6-.9-2.2-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4C8 9.3 7.4 10 7.4 11.4s1.1 2.8 1.2 3c.1.2 2 3.1 5 4.3.7.3 1.2.4 1.7.5.7.2 1.3.1 1.8-.1.5-.3 1.7-1.1 1.9-2.2.2-.9.2-1.6.1-1.7-.1-.1-.3-.2-.6-.3z" fill="white"/>
      </svg>
    ),
  },
  {
    label: 'Facebook',
    href: 'https://www.facebook.com/profile.php?id=61587769965156',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="12" cy="12" r="12" fill="#1877F2"/>
        <path d="M15.5 8H13.5C13.2 8 13 8.2 13 8.5V10H15.5L15.2 12.5H13V19H10.5V12.5H9V10H10.5V8.5C10.5 6.6 11.6 5.5 13.5 5.5H15.5V8Z" fill="white"/>
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
          className="w-9 h-9 flex items-center justify-center bg-white
                     border border-cream shadow-sm hover:scale-110
                     transition-transform duration-200"
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
