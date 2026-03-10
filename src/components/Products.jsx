import React, { useState, useEffect, useRef } from 'react'
import ProductCard from './ProductCard'
import { products, CATEGORIES } from '../data/products'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

export default function Products({ onInquire }) {
  const [activeCategory, setActiveCategory] = useState('All')
  const [displayed,      setDisplayed]      = useState(products)
  const [animKey,        setAnimKey]         = useState(0)
  const sectionRef = useScrollAnimation()
  const gridRef    = useRef(null)

  /* ── Filter logic with re-animation trigger ─ */
  useEffect(() => {
    const filtered =
      activeCategory === 'All'
        ? products
        : products.filter((p) => p.category === activeCategory)
    setDisplayed(filtered)
    setAnimKey((k) => k + 1)
  }, [activeCategory])

  /* ── Re-observe newly rendered cards ──────── */
  useEffect(() => {
    if (!gridRef.current) return
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.08, rootMargin: '0px 0px -40px 0px' }
    )
    const cards = gridRef.current.querySelectorAll('.reveal')
    // Reset first
    cards.forEach((c) => c.classList.remove('visible'))
    setTimeout(() => {
      cards.forEach((c) => observer.observe(c))
    }, 50)
    return () => cards.forEach((c) => observer.unobserve(c))
  }, [animKey])

  return (
    <section id="collection" className="py-24 bg-ivory" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-6">

        {/* ── Section Header ─────────────────────── */}
        <div className="text-center mb-16">
          <p className="reveal section-eyebrow mb-3">Our Collection</p>
          <h2 className="reveal section-title reveal-delay-1 mb-5">
            Artisan Blue Pottery
          </h2>
          <div className="reveal reveal-delay-2 gold-divider mx-auto mb-6" />
          <p className="reveal reveal-delay-3 font-inter text-sm text-bark/60 max-w-xl mx-auto leading-relaxed">
            Each piece is hand-thrown, hand-painted, and kiln-fired by master artisans in Jaipur,
            Rajasthan — carrying centuries of craft heritage into your home.
          </p>
        </div>

        {/* ── Category Filter Bar ─────────────────── */}
        <div id="categories" className="reveal reveal-delay-2 flex flex-wrap items-center justify-center gap-2 mb-12">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              className={`filter-tab ${activeCategory === cat ? 'active' : ''}`}
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* ── Product Count ───────────────────────── */}
        <p className="reveal font-inter text-xs text-bark/40 mb-8 tracking-wide">
          {displayed.length} {displayed.length === 1 ? 'piece' : 'pieces'} in collection
          {activeCategory !== 'All' && ` · ${activeCategory}`}
        </p>

        {/* ── Product Grid ────────────────────────── */}
        <div
          ref={gridRef}
          key={animKey}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        >
          {displayed.map((product, index) => (
            <ProductCard
              key={product.id}
              product={product}
              index={index}
              onInquire={onInquire}
            />
          ))}
        </div>

        {/* ── Empty state ─────────────────────────── */}
        {displayed.length === 0 && (
          <div className="text-center py-24">
            <p className="font-cormorant text-2xl text-bark/40 italic">
              No pieces found in this category.
            </p>
          </div>
        )}

        {/* ── Bottom CTA ──────────────────────────── */}
        <div className="reveal mt-16 text-center">
          <p className="font-cormorant italic text-xl text-bark/60 mb-6">
            Looking for a specific piece or bulk order?
          </p>
          <button
            className="btn-outline"
            onClick={() => {
              const el = document.getElementById('contact')
              if (el) {
                const top = el.getBoundingClientRect().top + window.scrollY - 72
                window.scrollTo({ top, behavior: 'smooth' })
              }
            }}
          >
            Request a Custom Quote
          </button>
        </div>
      </div>
    </section>
  )
}
