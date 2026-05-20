import { useRef } from 'react'
import { useScroll, useSpring } from 'framer-motion'
import ScrollBackground from './ScrollBackground'
import HeroOverlay from './HeroOverlay'

/**
 * Hero — Cinematic Scroll Documentary Section
 *
 * Structure:
 *   ┌─ <section> h-[400vh]  (tall, gives scroll room) ──────────────────┐
 *   │  ┌─ sticky h-screen ────────────────────────────────────────────┐  │
 *   │  │  <ScrollBackground />  ← 5 cross-dissolving photo frames    │  │
 *   │  │  <HeroOverlay />       ← text floating above frames         │  │
 *   │  └──────────────────────────────────────────────────────────────┘  │
 *   └────────────────────────────────────────────────────────────────────┘
 *
 * The section ref is passed into both children so they share the same
 * useScroll context and stay perfectly in sync.
 *
 * Mobile: On screens < md, the section collapses to h-[250vh] to keep
 * the experience tight without requiring excessive scrolling on small devices.
 */
export default function Hero() {
  const sectionRef = useRef(null)

  // Shared scroll progress for this section (0 → 1)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end end'],
  })

  // Spring-smoothed for 60fps feel — passed down to both children
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 60,
    damping: 20,
    restDelta: 0.001,
  })

  return (
    <section
      id="hero"
      ref={sectionRef}
      // 400vh on desktop → smooth 5-frame journey; 300vh on mobile
      className="relative h-[300vh] md:h-[400vh]"
    >
      {/* Sticky viewport container — everything inside stays on screen */}
      <div className="sticky top-0 h-screen w-full overflow-hidden">

        {/* Layer 1 — Cinematic background frames (bottom-most) */}
        <ScrollBackground sectionRef={sectionRef} />

        {/* Layer 2 — Text overlay (floats above frames, never scrolls away) */}
        <HeroOverlay scrollProgress={smoothProgress} />

      </div>
    </section>
  )
}
