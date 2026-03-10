import React from 'react'

/**
 * Sutraaya Exports logo — Craft Heritage Style
 * Lotus motif with decorative scrolls in deep crimson & gold.
 *
 * Props:
 *   variant  — "dark" (default) for light backgrounds, "light" for dark backgrounds
 *   compact  — true = icon only (mobile / favicon usage)
 */
export default function Logo({ variant = 'dark', compact = false }) {
  const crimson = variant === 'light' ? '#F5E6E6' : '#8B1A1A'
  const gold    = '#B8962E'
  const goldL   = variant === 'light' ? '#D4AF5A' : '#B8962E'

  return (
    <div className="flex items-center gap-2.5 select-none">
      {/* ── Craft Heritage Icon Mark ───────────────── */}
      <svg
        width="46"
        height="40"
        viewBox="0 0 46 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        {/* Left decorative scroll */}
        <path d="M1 19 C4 11 9 13 8 18 C7 21 4 20 5 17 C6 14 9 15 9 18"
              stroke={gold} strokeWidth="1" fill="none" strokeLinecap="round" opacity="0.85"/>
        <path d="M1 19 C3 26 8 25 9 22"
              stroke={gold} strokeWidth="1" fill="none" strokeLinecap="round" opacity="0.85"/>
        <line x1="9" y1="19" x2="15" y2="19" stroke={gold} strokeWidth="0.8" opacity="0.6"/>

        {/* Right decorative scroll */}
        <path d="M45 19 C42 11 37 13 38 18 C39 21 42 20 41 17 C40 14 37 15 37 18"
              stroke={gold} strokeWidth="1" fill="none" strokeLinecap="round" opacity="0.85"/>
        <path d="M45 19 C43 26 38 25 37 22"
              stroke={gold} strokeWidth="1" fill="none" strokeLinecap="round" opacity="0.85"/>
        <line x1="37" y1="19" x2="31" y2="19" stroke={gold} strokeWidth="0.8" opacity="0.6"/>

        {/* Lotus — center petal */}
        <ellipse cx="23" cy="12" rx="3" ry="7.5" fill={crimson} opacity="0.95"/>

        {/* Lotus — inner left petal */}
        <ellipse
          cx="23" cy="12" rx="2.8" ry="7"
          fill={crimson} opacity="0.75"
          transform="rotate(-28 23 20)"
        />
        {/* Lotus — inner right petal */}
        <ellipse
          cx="23" cy="12" rx="2.8" ry="7"
          fill={crimson} opacity="0.75"
          transform="rotate(28 23 20)"
        />
        {/* Lotus — outer left petal */}
        <ellipse
          cx="23" cy="12" rx="2.3" ry="5.5"
          fill={crimson} opacity="0.45"
          transform="rotate(-58 23 20)"
        />
        {/* Lotus — outer right petal */}
        <ellipse
          cx="23" cy="12" rx="2.3" ry="5.5"
          fill={crimson} opacity="0.45"
          transform="rotate(58 23 20)"
        />

        {/* Lotus base curve */}
        <path d="M17 21 Q23 26 29 21" stroke={gold} strokeWidth="1.1" fill="none" strokeLinecap="round" opacity="0.9"/>
        {/* Stem */}
        <line x1="23" y1="21" x2="23" y2="25" stroke={gold} strokeWidth="1" strokeLinecap="round" opacity="0.7"/>
        {/* Small leaf left */}
        <path d="M23 24 Q20 23 19 26" stroke={gold} strokeWidth="0.9" fill="none" strokeLinecap="round" opacity="0.6"/>
        {/* Small leaf right */}
        <path d="M23 24 Q26 23 27 26" stroke={gold} strokeWidth="0.9" fill="none" strokeLinecap="round" opacity="0.6"/>
      </svg>

      {/* ── Wordmark ──────────────────────────────── */}
      {!compact && (
        <div className="flex flex-col leading-none">
          <span
            style={{
              fontFamily: '"Cormorant Garamond", Georgia, serif',
              fontSize: '22px',
              fontWeight: 700,
              letterSpacing: '0.18em',
              color: crimson,
              lineHeight: 1,
            }}
          >
            SUTRAAYA
          </span>
          {/* Dashed rule with EXPORTS */}
          <span
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '5px',
              margin: '4px 0 2px',
            }}
          >
            <span style={{ flex: 1, height: '1px', background: gold, opacity: 0.55 }} />
            <span
              style={{
                fontFamily: 'Inter, system-ui, sans-serif',
                fontSize: '7.5px',
                fontWeight: 500,
                letterSpacing: '0.38em',
                color: goldL,
                lineHeight: 1,
              }}
            >
              EXPORTS
            </span>
            <span style={{ flex: 1, height: '1px', background: gold, opacity: 0.55 }} />
          </span>
          <span
            style={{
              fontFamily: 'Inter, system-ui, sans-serif',
              fontSize: '6.5px',
              fontWeight: 400,
              letterSpacing: '0.25em',
              color: goldL,
              lineHeight: 1,
              opacity: 0.8,
            }}
          >
            CONNECTED BY THREAD
          </span>
        </div>
      )}
    </div>
  )
}
