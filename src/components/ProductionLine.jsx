import { useRef } from 'react'
import { motion, useScroll, useTransform, useSpring } from 'framer-motion'
import { Scissors, CheckCircle2, Layers, Shirt } from 'lucide-react'

export default function ProductionLine() {
  const anatomyRef = useRef(null)
  
  // Track scroll position of the entire section
  const { scrollYProgress: anatomyProgress } = useScroll({
    target: anatomyRef,
    offset: ['start start', 'end end']
  })

  // Smooth out the scroll animation values
  const smoothProgress = useSpring(anatomyProgress, {
    stiffness: 60,
    damping: 20,
    restDelta: 0.001
  })

  // 5 slides: translate from 0% to -80%
  const slideX = useTransform(smoothProgress, [0, 1], ['0%', '-80%'])

  // Gold stitch progress bar running horizontally across the track
  const trackStitchWidth = useTransform(smoothProgress, [0, 1], ['0%', '80vw'])

  // Bottom scroll value progress bar
  const bottomStitchWidth = useTransform(smoothProgress, [0, 1], ['0%', '100%'])

  const steps = [
    {
      id: 1,
      title: 'Raw Fabric Selection',
      desc: 'Sourcing extra-long staple cotton & premium viscose fibers for our custom-developed high-density weave.',
      badge: 'Grade A+ Imports',
      icon: (props) => <Layers {...props} className="w-10 h-10 text-gold" />,
      detail: '240 GSM | Breathable Viscose | Wrinkle Resistance'
    },
    {
      id: 2,
      title: 'Precision Laser Cutting',
      desc: 'Computerized CNC cutters scan every fabric centimeter to ensure sub-millimeter precision for perfect templates.',
      badge: 'CNC Micro-Control',
      icon: (props) => <Scissors {...props} className="w-10 h-10 text-gold" />,
      detail: '0.2mm tolerance | Digital sizing matching'
    },
    {
      id: 3,
      title: 'Artisanal Stitching',
      desc: 'Duo-locked reinforced seams tailored using German high-tensile threads and premium machines.',
      badge: '12 Stitches/Inch',
      icon: (props) => (
        <svg 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="2" 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          className="w-10 h-10 text-gold"
        >
          <line x1="5" y1="19" x2="19" y2="5" />
          <circle cx="17.5" cy="6.5" r="0.75" fill="currentColor" />
          <path d="M19 5c2 2 1 5-2 6s-6-1-8 2-2 4-5 4" />
        </svg>
      ),
      detail: 'Gutterman threads | Flexible flexi-waistband technology'
    },
    {
      id: 4,
      title: '18-Point Quality Check',
      desc: '100% inspection under high-lumen lamps covering rise, pockets, zip durability, and alignment stress-points.',
      badge: 'Zero Defect Policy',
      icon: (props) => <CheckCircle2 {...props} className="w-10 h-10 text-gold" />,
      detail: 'Zero deviation tolerance | Active inspection'
    },
    {
      id: 5,
      title: 'The Final Trouser',
      desc: 'Vacuum press-ironing, sleek brand-tags styling, and eco-friendly protective packaging, ready for nationwide dispatch.',
      badge: 'Retail Ready',
      icon: (props) => <Shirt {...props} className="w-10 h-10 text-gold" />,
      detail: 'Hanger-packed | Barcoded dispatch routing'
    }
  ]

  return (
    <section ref={anatomyRef} style={{ height: '500vh', position: 'relative' }}>
      {/* Sticky container that keeps elements in screen space */}
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
          paddingTop: '3rem',
          paddingBottom: '3rem'
        }} 
        className="bg-dark-950 z-10"
      >
        
        {/* Top Header Section */}
        <div className="max-w-7xl mx-auto px-6 md:px-12 w-full text-center md:text-left z-20">
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
              Scroll down to watch our production floor in action. See how raw fibers transform into India's finest formal trousers.
            </p>
          </div>
        </div>

        {/* Horizontal Moving Scroll Track */}
        <div className="relative w-full flex items-center overflow-hidden my-auto py-8 h-[60vh]">
          
          {/* Background Stitch Line Track */}
          <div className="absolute left-[10vw] right-[10vw] h-[2px] bg-white/5 top-1/2 -translate-y-1/2 z-0" />
          
          {/* Animated Gold Stitch Progress Line */}
          <motion.div 
            style={{ width: trackStitchWidth }}
            className="absolute left-[10vw] h-[2px] bg-gradient-to-r from-gold/40 to-gold top-1/2 -translate-y-1/2 z-0 origin-left"
          />

          {/* Movable Component Slider */}
          <motion.div 
            style={{ 
              display: 'flex',
              width: '500%',  // 5 slides × 100%
              height: '100%',
              x: slideX 
            }} 
            className="items-center z-10"
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
                  padding: '0 4vw'
                }}
              >
                <motion.div 
                  whileHover={{ y: -6 }}
                  style={{ cursor: 'pointer' }}
                  className="w-full max-w-[550px] group relative p-8 md:p-10 bg-dark-900 border border-white/5 hover:border-gold/30 transition-colors duration-500 rounded-none shadow-2xl"
                >
                  {/* Step Corner Accent */}
                  <div className="absolute top-0 right-0 w-12 h-12 overflow-hidden">
                    <div className="absolute top-[-10px] right-[-10px] w-20 h-20 bg-gold/5 rotate-45" />
                  </div>

                  {/* Step Number Badge */}
                  <div className="flex items-center justify-between mb-8">
                    <div className="p-3 bg-dark-800 border border-white/5 inline-flex items-center justify-center rounded-none shadow-inner">
                      {step.icon()}
                    </div>
                    <span className="font-serif text-5xl md:text-6xl text-white/5 font-extrabold tracking-tighter select-none">
                      0{step.id}
                    </span>
                  </div>

                  {/* Step Info Badge */}
                  <span className="inline-block text-[10px] uppercase tracking-[0.2em] px-3 py-1 bg-gold/10 text-gold border border-gold/20 font-semibold mb-4">
                    {step.badge}
                  </span>

                  {/* Step Name */}
                  <h3 className="font-serif text-xl md:text-2xl text-white font-medium mb-3">
                    {step.title}
                  </h3>

                  {/* Step Description */}
                  <p className="font-sans text-sm text-gray-400 font-light leading-relaxed mb-6">
                    {step.desc}
                  </p>

                  {/* Specs / Details */}
                  <div className="pt-4 border-t border-white/5">
                    <span className="text-[11px] font-mono tracking-wider text-gray-500 uppercase">
                      Specs: {step.detail}
                    </span>
                  </div>
                </motion.div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Bottom Interactive Progress Info */}
        <div className="max-w-7xl mx-auto px-6 md:px-12 w-full flex items-center justify-between border-t border-white/5 pt-8 z-20">
          <div className="flex items-center gap-4">
            <span className="font-mono text-xs text-gold">SCROLL VALUE</span>
            <div className="w-24 h-1 bg-white/5 relative overflow-hidden">
              <motion.div 
                style={{ width: bottomStitchWidth }} 
                className="absolute inset-y-0 left-0 bg-gold"
              />
            </div>
          </div>
          <span className="font-sans text-xs uppercase tracking-[0.25em] text-gray-500 animate-pulse">
            DISPATCH READY SYSTEM
          </span>
        </div>

      </div>
    </section>
  )
}
