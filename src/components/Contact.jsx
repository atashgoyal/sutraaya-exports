import React, { useState } from 'react'
import { products } from '../data/products'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

const INITIAL_FORM = {
  name:    '',
  email:   '',
  country: '',
  product: '',
  message: '',
}

export default function Contact({ prefillProduct = '' }) {
  const [form,     setForm]     = useState({ ...INITIAL_FORM, product: prefillProduct })
  const [errors,   setErrors]   = useState({})
  const [status,   setStatus]   = useState('idle') // idle | submitting | success | error
  const sectionRef = useScrollAnimation()

  /* ── Update prefill when modal triggers ────── */
  React.useEffect(() => {
    if (prefillProduct) setForm((f) => ({ ...f, product: prefillProduct }))
  }, [prefillProduct])

  const validate = () => {
    const e = {}
    if (!form.name.trim())                   e.name    = 'Please enter your name.'
    if (!form.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) e.email   = 'Please enter a valid email.'
    if (!form.message.trim())                e.message = 'Please add a message.'
    return e
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((f) => ({ ...f, [name]: value }))
    if (errors[name]) setErrors((err) => ({ ...err, [name]: undefined }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const errs = validate()
    if (Object.keys(errs).length) { setErrors(errs); return }
    setStatus('submitting')

    // Simulate API call — replace with actual endpoint
    await new Promise((r) => setTimeout(r, 1400))
    setStatus('success')
    setForm(INITIAL_FORM)
  }

  return (
    <section id="contact" className="py-24 bg-ivory" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

          {/* ── Left: Info & Contact details ──────── */}
          <div>
            <p className="reveal section-eyebrow mb-3">Get in Touch</p>
            <h2 className="reveal section-title reveal-delay-1 mb-6">
              Let's Build Something
              <span className="block italic font-light text-terracotta">Beautiful Together</span>
            </h2>
            <div className="reveal reveal-delay-2 gold-divider mb-8" />

            <div className="reveal reveal-delay-2 space-y-4 font-inter text-sm text-bark/70 leading-relaxed mb-10">
              <p>
                Whether you're a boutique retailer, interior designer, hotel buyer, or a
                thoughtful individual looking for unique pieces — we'd love to hear from you.
              </p>
              <p>
                We handle export logistics end-to-end: quality inspection, custom packaging,
                insured shipping, and paperwork for US, UK, Canada & EU customs.
              </p>
            </div>

            {/* Contact details */}
            <div className="reveal reveal-delay-3 space-y-5">
              {[
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
              ].map(({ icon, label, value, href }) => (
                <div key={label} className="flex items-start gap-4">
                  <div className="mt-0.5 w-8 h-8 flex-shrink-0 flex items-center justify-center bg-cream border border-gold/30">
                    {icon}
                  </div>
                  <div>
                    <p className="font-inter text-xs text-bark/40 tracking-wider uppercase mb-0.5"
                       style={{ fontSize: '10px', letterSpacing: '0.18em' }}>
                      {label}
                    </p>
                    {href ? (
                      <a href={href}
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

          </div>

          {/* ── Right: Contact form ────────────────── */}
          <div className="reveal reveal-delay-2">
            <div className="bg-white border border-cream p-8 md:p-10">
              <h3 className="font-cormorant text-2xl font-medium text-indigo-deep mb-2">
                Request a Quote
              </h3>
              <p className="font-inter text-xs text-bark/50 mb-8 leading-relaxed">
                Tell us what you're looking for and we'll get back to you with pricing,
                availability and shipping options.
              </p>

              {status === 'success' ? (
                <div className="text-center py-12">
                  <div className="w-14 h-14 mx-auto mb-6 flex items-center justify-center bg-cream border border-gold/40">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path d="M5 12l5 5 9-9" stroke="#B8962E" strokeWidth="2"
                            strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <h4 className="font-cormorant text-2xl font-medium text-indigo-deep mb-3">
                    Thank you!
                  </h4>
                  <p className="font-inter text-sm text-bark/60 leading-relaxed mb-6">
                    We've received your inquiry and will respond within 24 hours.
                  </p>
                  <button
                    className="btn-outline text-xs"
                    onClick={() => setStatus('idle')}
                  >
                    Send Another
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="space-y-5">
                  {/* Name + Email row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block font-inter text-xs text-bark/60 mb-1.5 tracking-wide"
                             htmlFor="name">
                        Full Name <span className="text-terracotta">*</span>
                      </label>
                      <input
                        id="name" name="name" type="text"
                        value={form.name}
                        onChange={handleChange}
                        placeholder="Jane Smith"
                        className={`form-input ${errors.name ? 'border-terracotta' : ''}`}
                        autoComplete="name"
                      />
                      {errors.name && (
                        <p className="mt-1 font-inter text-xs text-terracotta">{errors.name}</p>
                      )}
                    </div>
                    <div>
                      <label className="block font-inter text-xs text-bark/60 mb-1.5 tracking-wide"
                             htmlFor="email">
                        Email Address <span className="text-terracotta">*</span>
                      </label>
                      <input
                        id="email" name="email" type="email"
                        value={form.email}
                        onChange={handleChange}
                        placeholder="jane@example.com"
                        className={`form-input ${errors.email ? 'border-terracotta' : ''}`}
                        autoComplete="email"
                      />
                      {errors.email && (
                        <p className="mt-1 font-inter text-xs text-terracotta">{errors.email}</p>
                      )}
                    </div>
                  </div>

                  {/* Country */}
                  <div>
                    <label className="block font-inter text-xs text-bark/60 mb-1.5 tracking-wide"
                           htmlFor="country">
                      Country / Region
                    </label>
                    <input
                      id="country" name="country" type="text"
                      value={form.country}
                      onChange={handleChange}
                      placeholder="United States"
                      className="form-input"
                      autoComplete="country-name"
                    />
                  </div>

                  {/* Product interest */}
                  <div>
                    <label className="block font-inter text-xs text-bark/60 mb-1.5 tracking-wide"
                           htmlFor="product">
                      Product Interest
                    </label>
                    <select
                      id="product" name="product"
                      value={form.product}
                      onChange={handleChange}
                      className="form-input bg-white appearance-none cursor-pointer"
                    >
                      <option value="">— Select a product (optional) —</option>
                      {products.map((p) => (
                        <option key={p.id} value={p.name}>{p.name}</option>
                      ))}
                      <option value="Bulk / Wholesale Order">Bulk / Wholesale Order</option>
                      <option value="Custom Commission">Custom Commission</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block font-inter text-xs text-bark/60 mb-1.5 tracking-wide"
                           htmlFor="message">
                      Message <span className="text-terracotta">*</span>
                    </label>
                    <textarea
                      id="message" name="message"
                      rows={4}
                      value={form.message}
                      onChange={handleChange}
                      placeholder="Tell us about your requirements — quantities, customisation, timeline, etc."
                      className={`form-input resize-none ${errors.message ? 'border-terracotta' : ''}`}
                    />
                    {errors.message && (
                      <p className="mt-1 font-inter text-xs text-terracotta">{errors.message}</p>
                    )}
                  </div>

                  {/* Submit */}
                  <button
                    type="submit"
                    disabled={status === 'submitting'}
                    className="btn-primary w-full justify-center disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {status === 'submitting' ? (
                      <>
                        <svg className="animate-spin" width="16" height="16" viewBox="0 0 16 16" fill="none">
                          <circle cx="8" cy="8" r="6" stroke="currentColor" strokeOpacity="0.25" strokeWidth="2"/>
                          <path d="M14 8a6 6 0 00-6-6" stroke="currentColor" strokeWidth="2"
                                strokeLinecap="round"/>
                        </svg>
                        Sending…
                      </>
                    ) : (
                      <>
                        Send Inquiry
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                          <path d="M2 8h12M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5"
                                strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </>
                    )}
                  </button>

                  <p className="font-inter text-xs text-bark/40 text-center leading-relaxed">
                    We respect your privacy. Your details will never be shared with third parties.
                  </p>
                </form>
              )}
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
