import { useRef, useState, useEffect } from 'react'
import { useScroll, useSpring } from 'framer-motion'
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

  // Spring-smoothed scroll value for buttery-smooth animations
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 60,
    damping: 20,
    restDelta: 0.001,
  })

  return (
    <section
      id="hero"
      ref={containerRef}
      // BUG 1 & BUG 7: min-height 500vh on desktop / 250vh on mobile, z-index: 0
      className={`relative z-0 overflow-hidden ${isMobile ? 'min-h-[250vh]' : 'min-h-[500vh]'}`}
    >
      {/* BUG 1: Inner container sticky to top, taking full viewport height */}
      <div className="sticky top-0 h-screen w-full overflow-hidden">

        {/* Layer 1 — Background frames (Z-Index: 1 set inside TextureFrame) */}
        <ScrollBackground sectionRef={containerRef} isMobile={isMobile} />

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
        <HeroOverlay scrollProgress={smoothProgress} />

      </div>
    </section>
  )
}
