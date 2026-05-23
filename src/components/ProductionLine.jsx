import { useRef } from 'react'
import { motion, useScroll, useTransform, useSpring } from 'framer-motion'
import { Scissors, CheckCircle2, Layers, Shirt } from 'lucide-react'

export default function ProductionLine() {
  const anatomyRef = useRef(null)

  const { scrollYProgress: anatomyProgress } = useScroll({
    target: anatomyRef,
    offset: ['start start', 'end end'],
  })

  const smoothProgress = useSpring(anatomyProgress, {
    stiffness: 60,
    damping: 20,
    restDelta: 0.001,
  })

  // Translate 5 cards: card width = 420px, gap = 32px, so step = 452px
  // But we use percentage of total track width to keep it responsive
  const slideX = useTransform(smoothProgress, [0, 1], ['0%', '-80%'])

  const trackStitchWidth = useTransform(smoothProgress, [0, 1], ['0%', '80vw'])
  const bottomStitchWidth = useTransform(smoothProgress, [0, 1], ['0%', '100%'])

  const steps = [
    {
      id: 1,
      title: 'Raw Fabric Selection',
      desc: 'Sourcing extra-long staple cotton & premium viscose fibers for our custom-developed high-density weave.',
      badge: 'Grade A+ Imports',
      icon: () => <Layers className="w-8 h-8 text-gold" />,
      detail: '240 GSM | Breathable Viscose | Wrinkle Resistance',
    },
    {
      id: 2,
      title: 'Precision Laser Cutting',
      desc: 'Computerized CNC cutters scan every fabric centimeter to ensure sub-millimeter precision for perfect templates.',
      badge: 'CNC Micro-Control',
      icon: () => <Scissors className="w-8 h-8 text-gold" />,
      detail: '0.2mm tolerance | Digital sizing matching',
    },
    {
      id: 3,
      title: 'Artisanal Stitching',
      desc: 'Duo-locked reinforced seams tailored using German high-tensile threads and premium machines.',
      badge: '12 Stitches/Inch',
      icon: () => (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
          strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8 text-gold">
          <line x1="5" y1="19" x2="19" y2="5" />
          <circle cx="17.5" cy="6.5" r="0.75" fill="currentColor" />
          <path d="M19 5c2 2 1 5-2 6s-6-1-8 2-2 4-5 4" />
        </svg>
      ),
      detail: 'Gutterman threads | Flexi-waistband tech',
    },
    {
      id: 4,
      title: '18-Point Quality Check',
      desc: '100% inspection under high-lumen lamps covering rise, pockets, zip durability, and alignment stress-points.',
      badge: 'Zero Defect Policy',
      icon: () => <CheckCircle2 className="w-8 h-8 text-gold" />,
      detail: 'Zero deviation tolerance | Active inspection',
    },
    {
      id: 5,
      title: 'The Final Trouser',
      desc: 'Vacuum press-ironing, sleek brand-tags styling, and eco-friendly protective packaging, ready for nationwide dispatch.',
      badge: 'Retail Ready',
      icon: () => <Shirt className="w-8 h-8 text-gold" />,
      detail: 'Hanger-packed | Barcoded dispatch routing',
    },
  ]

  return (
    <section ref={anatomyRef} style={{ height: '500vh', position: 'relative' }}>
      {/* Sticky viewport */}
      <div
        style={{
          position: 'sticky',
          top: 0,
          height: '100vh',
          overflow: 'hidden',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          paddingTop: '2.5rem',
          paddingBottom: '2rem',
        }}
        className="bg-dark-950"
      >
        {/* ── Header ── */}
        <div className="max-w-7xl mx-auto px-6 md:px-12 w-full">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <span className="font-sans text-xs uppercase tracking-[0.3em] text-gold font-semibold">
                Tailoring Excellence
              </span>
              <h2 className="font-serif text-3xl md:text-5xl font-medium text-white tracking-tight mt-2">
                The Anatomy of Perfection
              </h2>
            </div>
            <p className="font-sans text-sm text-gray-400 font-light max-w-md md:text-right">
              Scroll to watch our production floor in action. Raw fibers transformed into India's finest formal trousers.
            </p>
          </div>
        </div>

        {/* ── Card Track ── */}
        <div
          className="relative w-full overflow-hidden"
          style={{ height: '340px' }}
        >
          {/* Background track line */}
          <div className="absolute left-[8vw] right-[8vw] h-[1px] bg-white/5 top-1/2 -translate-y-1/2 z-0" />

          {/* Animated gold stitch line */}
          <motion.div
            style={{ width: trackStitchWidth }}
            className="absolute left-[8vw] h-[1px] bg-gradient-to-r from-gold/30 to-gold top-1/2 -translate-y-1/2 z-0 origin-left"
          />

          {/* Sliding strip: 5 cards × 20% = 500% total */}
          <motion.div
            style={{
              display: 'flex',
              width: '500%',
              height: '100%',
              x: slideX,
            }}
          >
            {steps.map((step) => (
              <div
                key={step.id}
                style={{
                  width: '20%',
                  height: '100%',
                  flexShrink: 0,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  padding: '0 5vw',
                }}
              >
                {/* ── Card ── fixed 320px wide, 300px tall — uniform for all 5 */}
                <motion.div
                  whileHover={{ y: -4, borderColor: 'rgba(201,168,76,0.35)' }}
                  transition={{ duration: 0.25 }}
                  style={{
                    width: '340px',
                    height: '300px',
                    flexShrink: 0,
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    padding: '28px 28px 22px',
                    backgroundColor: '#111111',
                    border: '1px solid rgba(255,255,255,0.06)',
                    position: 'relative',
                    cursor: 'default',
                  }}
                >
                  {/* Corner accent */}
                  <div style={{
                    position: 'absolute', top: 0, right: 0,
                    width: 40, height: 40, overflow: 'hidden',
                  }}>
                    <div style={{
                      position: 'absolute', top: -8, right: -8,
                      width: 60, height: 60,
                      background: 'rgba(201,168,76,0.06)',
                      transform: 'rotate(45deg)',
                    }} />
                  </div>

                  {/* Top row: icon + step number */}
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <div style={{
                      padding: '10px',
                      background: '#1a1a1a',
                      border: '1px solid rgba(255,255,255,0.05)',
                      display: 'inline-flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}>
                      {step.icon()}
                    </div>
                    <span style={{
                      fontFamily: 'Playfair Display, serif',
                      fontSize: '52px',
                      color: 'rgba(255,255,255,0.04)',
                      fontWeight: 800,
                      lineHeight: 1,
                      userSelect: 'none',
                    }}>
                      0{step.id}
                    </span>
                  </div>

                  {/* Middle: badge + title + desc */}
                  <div style={{ flex: 1, marginTop: '14px', overflow: 'hidden' }}>
                    <span style={{
                      display: 'inline-block',
                      fontSize: '9px',
                      textTransform: 'uppercase',
                      letterSpacing: '0.2em',
                      padding: '3px 10px',
                      background: 'rgba(201,168,76,0.08)',
                      border: '1px solid rgba(201,168,76,0.2)',
                      color: '#c9a84c',
                      fontWeight: 600,
                      marginBottom: '10px',
                    }}>
                      {step.badge}
                    </span>

                    <h3 style={{
                      fontFamily: 'Playfair Display, serif',
                      fontSize: '17px',
                      color: '#ffffff',
                      fontWeight: 500,
                      marginBottom: '8px',
                      lineHeight: 1.3,
                    }}>
                      {step.title}
                    </h3>

                    <p style={{
                      fontFamily: 'Inter, sans-serif',
                      fontSize: '12px',
                      color: '#888888',
                      fontWeight: 300,
                      lineHeight: 1.65,
                      display: '-webkit-box',
                      WebkitLineClamp: 3,
                      WebkitBoxOrient: 'vertical',
                      overflow: 'hidden',
                    }}>
                      {step.desc}
                    </p>
                  </div>

                  {/* Bottom: specs */}
                  <div style={{
                    borderTop: '1px solid rgba(255,255,255,0.05)',
                    paddingTop: '12px',
                    marginTop: '4px',
                  }}>
                    <span style={{
                      fontFamily: 'monospace',
                      fontSize: '10px',
                      letterSpacing: '0.05em',
                      color: '#555',
                      textTransform: 'uppercase',
                    }}>
                      {step.detail}
                    </span>
                  </div>
                </motion.div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* ── Footer progress bar ── */}
        <div className="max-w-7xl mx-auto px-6 md:px-12 w-full flex items-center justify-between border-t border-white/5 pt-5">
          <div className="flex items-center gap-4">
            <span className="font-mono text-[10px] text-gold uppercase tracking-widest">
              Scroll Progress
            </span>
            <div className="w-32 h-[2px] bg-white/5 relative overflow-hidden">
              <motion.div
                style={{ width: bottomStitchWidth }}
                className="absolute inset-y-0 left-0 bg-gold"
              />
            </div>
          </div>
          <span className="font-sans text-[10px] uppercase tracking-[0.25em] text-gray-600 animate-pulse">
            Dispatch Ready System
          </span>
        </div>
      </div>
    </section>
  )
}
