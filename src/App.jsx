import React, { useState, useEffect, useCallback } from 'react'
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

  const scrollToContact = () => {
    onClose()
    setTimeout(() => {
      const el = document.getElementById('contact')
      if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 72, behavior: 'smooth' })
    }, 300)
  }

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
              <button className="btn-primary w-full justify-center text-xs" onClick={scrollToContact}>
                Request a Quote
              </button>
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
   Back-to-top button
───────────────────────────────────────────────── */
function BackToTop() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 600)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      aria-label="Back to top"
      className={`fixed bottom-8 right-6 z-40 w-11 h-11 flex items-center justify-center
                  bg-indigo-deep text-ivory shadow-gold border border-gold/30
                  transition-all duration-400 hover:bg-gold hover:border-gold
                  ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'}`}
    >
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
        <path d="M8 12V4M4 8l4-4 4 4" stroke="currentColor" strokeWidth="1.5"
              strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    </button>
  )
}

/* ─────────────────────────────────────────────────
   Root App
───────────────────────────────────────────────── */
export default function App() {
  const [inquiryProduct,   setInquiryProduct]   = useState(null)
  const [contactPrefill,   setContactPrefill]   = useState('')

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
        <Contact prefillProduct={contactPrefill} />
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
