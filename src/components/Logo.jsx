import React from 'react'

/**
 * Premium TOPLLER SVG Vector Logo Component
 * Recreates the exact brand logo with the signature red circular 'T' icon,
 * custom-aligned condensed lettering, and B2B formal trouser subtitle.
 * 
 * Supports dynamic scaling via height prop and color matching via currentColor.
 */
export default function Logo({ height = 40, textColor = 'text-white', className = '' }) {
  return (
    <div className={`inline-flex items-center ${className}`} style={{ height }}>
      <svg
        viewBox="0 0 460 120"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-auto h-full"
      >
        {/* Stylized Red Brand Emblem (Circle wrapping 'T') */}
        <g id="brand-icon">
          {/* Main open-ring wrapping circle in brand red */}
          <path
            d="M 52.8 28.5 A 28 28 0 1 0 79 56"
            stroke="#e1251b"
            strokeWidth="7"
            strokeLinecap="round"
            fill="none"
          />
          {/* T Horizontal Bar merging with left edge */}
          <path
            d="M 28 42 L 72 42"
            stroke="#e1251b"
            strokeWidth="7.5"
            strokeLinecap="butt"
          />
          {/* T Vertical Stem */}
          <path
            d="M 50 42 L 50 78"
            stroke="#e1251b"
            strokeWidth="9"
            strokeLinecap="butt"
          />
        </g>

        {/* Brand Typography Group */}
        <g id="brand-text" className={textColor === 'text-white' ? 'fill-white' : 'fill-dark-900'}>
          {/* TOPLLER - High-strength condensed sans-serif */}
          <text
            x="105"
            y="65"
            fontSize="54"
            fontWeight="800"
            letterSpacing="0.04em"
            fontFamily="'Inter', system-ui, -apple-system, sans-serif"
            className="tracking-tight"
          >
            TOPLLER
          </text>
          
          {/* Registered Trade Mark Symbol */}
          <text
            x="368"
            y="32"
            fontSize="18"
            fontWeight="600"
            fontFamily="'Inter', system-ui, sans-serif"
          >
            ®
          </text>

          {/* Subtitle - MEN'S FORMAL TROUSERS - Wide letter spacing */}
          <text
            x="106"
            y="94"
            fontSize="18.5"
            fontWeight="700"
            letterSpacing="0.18em"
            fontFamily="'Inter', system-ui, -apple-system, sans-serif"
          >
            MEN’S FORMAL TROUSERS
          </text>
        </g>
      </svg>
    </div>
  )
}
