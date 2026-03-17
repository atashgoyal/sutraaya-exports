import React, { useState, useRef } from 'react'

const TAG_COLORS = {
  Bestseller: { bg: '#C4714A', text: '#FAF7F0' },
  Premium:    { bg: '#1A237E', text: '#FAF7F0' },
  Limited:    { bg: '#B8962E', text: '#FAF7F0' },
  Heritage:   { bg: '#2C1810', text: '#FAF7F0' },
  Artisan:    { bg: '#283593', text: '#FAF7F0' },
  Classic:    { bg: '#5C6BC0', text: '#FAF7F0' },
  Unique:     { bg: '#7B5EA7', text: '#FAF7F0' },
  Kitchen:    { bg: '#6D8B74', text: '#FAF7F0' },
  Curated:    { bg: '#A35A35', text: '#FAF7F0' },
}

export default function ProductCard({ product, index, onInquire }) {
  const [imgLoaded, setImgLoaded] = useState(false)
  const [imgError, setImgError]   = useState(false)
  const cardRef = useRef(null)

  const tagStyle = TAG_COLORS[product.tag] || TAG_COLORS.Classic

  return (
    <div
      ref={cardRef}
      className={`product-card reveal reveal-delay-${Math.min((index % 6) + 1, 6)} bg-white group cursor-pointer`}
      style={{ borderRadius: 0 }}
      onClick={() => onInquire(product)}
    >
      {/* ── Image ─────────────────────────────────── */}
      <div className="card-image relative aspect-square bg-cream overflow-hidden">
        {/* Skeleton loader */}
        {!imgLoaded && !imgError && (
          <div className="absolute inset-0 img-skeleton" />
        )}

        {/* Actual image */}
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          onLoad={() => setImgLoaded(true)}
          onError={() => { setImgLoaded(true); setImgError(true) }}
          className={`w-full h-full object-cover transition-opacity duration-500 ${
            imgLoaded ? 'opacity-100' : 'opacity-0'
          }`}
        />

        {/* Overlay on hover */}
        <div className="card-overlay absolute inset-0 bg-indigo-deep/70 flex flex-col items-center justify-center gap-3 p-6">
          <p className="font-inter text-xs text-ivory/70 text-center leading-relaxed">
            {product.description}
          </p>
          {product.size && (
            <p className="font-inter text-xs text-gold/80 text-center" style={{ fontSize: '10px', letterSpacing: '0.06em' }}>
              {product.size}
            </p>
          )}
          <button
            className="mt-2 px-5 py-2 border border-gold text-gold font-inter text-xs tracking-wider uppercase hover:bg-gold hover:text-ivory transition-all duration-200"
            style={{ letterSpacing: '0.14em' }}
            onClick={(e) => { e.stopPropagation(); onInquire(product) }}
          >
            Inquire
          </button>
        </div>

        {/* Tag badge */}
        <div
          className="absolute top-3 left-3 px-2.5 py-1 font-inter text-xs font-medium"
          style={{
            backgroundColor: tagStyle.bg,
            color: tagStyle.text,
            letterSpacing: '0.08em',
            fontSize: '10px',
          }}
        >
          {product.tag}
        </div>

        {/* Category pill */}
        <div className="absolute top-3 right-3 px-2.5 py-1 bg-ivory/90 backdrop-blur-sm font-inter font-medium"
             style={{ fontSize: '10px', letterSpacing: '0.06em', color: '#1A237E' }}>
          {product.category}
        </div>
      </div>

      {/* ── Card Body ─────────────────────────────── */}
      <div className="p-5 border-t border-cream">
        <h3
          className="font-cormorant text-lg font-medium text-bark leading-tight mb-1 group-hover:text-indigo-deep transition-colors duration-200"
          style={{ fontSize: '18px' }}
        >
          {product.name}
        </h3>
        {product.price && product.price !== 'POA' && (
          <p className="font-inter text-xs text-gold mt-1" style={{ letterSpacing: '0.04em' }}>
            {product.price}
          </p>
        )}
        <div className="flex items-center justify-between mt-3">
          <a
            href="https://deals.heartfulcraft.com/shruti-srivastava/"
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="font-inter text-xs text-bark/50 hover:text-gold transition-colors duration-200 tracking-wide"
          >
            Heartful Crafts ↗
          </a>
          <button
            onClick={(e) => { e.stopPropagation(); onInquire(product) }}
            className="flex items-center gap-1 font-inter text-xs text-gold hover:text-gold-dark transition-colors duration-200"
            style={{ letterSpacing: '0.08em' }}
          >
            <span>Request quote</span>
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
              <path d="M2 6h8M6 3l3 3-3 3" stroke="currentColor" strokeWidth="1.2"
                    strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  )
}
