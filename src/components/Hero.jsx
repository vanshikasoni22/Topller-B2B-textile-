import { useRef, useState, useEffect } from 'react'
import { useScroll } from 'framer-motion'
import ScrollBackground from './ScrollBackground'
import HeroOverlay from './HeroOverlay'

/**
 * Hero — Cinematic Scroll Documentary Section
 * Handles 5-frame scroll sequence with exact z-index layering and mobile safety guards.
 */
export default function Hero() {
  const containerRef = useRef(null)
  const [isMobile, setIsMobile] = useState(false)

  // Detect mobile width on mount and resize
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  // Shared scroll progress targeting the outer wrapper with custom offset ranges
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  })

  return (
    <section
      id="hero"
      ref={containerRef}
      style={{
        height: isMobile ? '250vh' : '500vh',
        position: 'relative'
      }}
    >
      {/* BUG 1: Inner container sticky to top, taking full viewport height */}
      <div
        style={{
          position: 'sticky',
          top: 0,
          height: '100vh',
          width: '100%',
          overflow: 'hidden'
        }}
      >
        {/* Layer 1 — Background frames (Z-Index: 1 set inside TextureFrame) */}
        <ScrollBackground scrollYProgress={scrollYProgress} isMobile={isMobile} />

        {/* BUG 6: Permanent dark overlay always active on top of background (Z-Index: 5) */}
        <div 
          style={{
            position: 'absolute',
            inset: 0,
            background: 'rgba(0,0,0,0.52)',
            zIndex: 5,
            pointerEvents: 'none'
          }} 
        />

        {/* Layer 2 — Interactive Text overlay (Z-Index: 10) */}
        <HeroOverlay scrollYProgress={scrollYProgress} />

      </div>
    </section>
  )
}
