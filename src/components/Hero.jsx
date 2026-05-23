import { useRef, useState, useEffect } from 'react'
import { useScroll } from 'framer-motion'
import ScrollBackground from './ScrollBackground'
import HeroOverlay from './HeroOverlay'

/**
 * Hero — Cinematic Scroll Documentary Section
 * 
 * KEY FIXES:
 * 1. Removed overflow-hidden from outer section — it was breaking sticky
 * 2. Section is position:relative only, zIndex: 0, no overflow clipping
 * 3. Sticky inner div handles its own overflow:hidden
 * 4. Mobile gets 250vh, desktop 500vh with explicit height to support sticky reliably
 */
export default function Hero() {
  const containerRef = useRef(null)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768)
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  })

  return (
    <section
      id="hero"
      ref={containerRef}
      style={{
        position: 'relative',
        zIndex: 0,
        height: isMobile ? '250vh' : '500vh',
      }}
    >
      {/* Sticky viewport — THIS is the only div allowed to have overflow:hidden */}
      <div
        style={{
          position: 'sticky',
          top: 0,
          height: '100vh',
          width: '100%',
          overflow: 'hidden',
        }}
      >
        {/* Background frames z-index: 1 */}
        <ScrollBackground scrollYProgress={scrollYProgress} isMobile={isMobile} />

        {/* Permanent dark overlay z-index: 5 */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: 'rgba(0,0,0,0.52)',
            zIndex: 5,
            pointerEvents: 'none',
          }}
        />

        {/* Hero text z-index: 10 */}
        <HeroOverlay scrollYProgress={scrollYProgress} />
      </div>
    </section>
  )
}
