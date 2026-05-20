import { motion, useTransform } from 'framer-motion'
import { ArrowRight, Sparkles } from 'lucide-react'

/**
 * HeroOverlay
 * The text content layer that floats above the scroll background.
 * Sits in a sticky container so it stays centered while background transitions.
 *
 * Behavior driven by scrollProgress (0→1 of the hero section):
 *  - Main content (headline, CTAs) fades out between 55%→75% scroll
 *  - Reveal line "From Thread to Trouser — Since 2011" fades in between 60%→80%
 *  - Frame label (bottom-left corner) updates per frame
 */
export default function HeroOverlay({ scrollProgress }) {
  // Main text fades out after halfway through the documentary
  const mainOpacity = useTransform(scrollProgress, [0, 0.50, 0.70], [1, 1, 0])
  const mainY = useTransform(scrollProgress, [0.50, 0.72], ['0px', '-24px'])

  // Reveal line fades in as main fades out
  const revealOpacity = useTransform(scrollProgress, [0.60, 0.78, 0.92, 1.0], [0, 1, 1, 0])

  // Payoff line fades in at the very end (Frame 5)
  const payoffOpacity = useTransform(scrollProgress, [0.88, 1.0], [0, 1])
  const payoffY = useTransform(scrollProgress, [0.88, 1.0], ['18px', '0px'])

  // Frame step indicator at bottom (0–4 maps to frames 1–5)
  const frameIndex = useTransform(scrollProgress,
    [0, 0.23, 0.46, 0.68, 0.88],
    [0, 1, 2, 3, 4]
  )

  const frameLabels = [
    'I — Raw Thread',
    'II — The Loom',
    'III — Cutting Table',
    'IV — Stitching',
    'V — The Trouser',
  ]

  const handleScrollTo = (id) => {
    const el = document.querySelector(id)
    if (!el) return
    const top = el.getBoundingClientRect().top + window.scrollY - 80
    window.scrollTo({ top, behavior: 'smooth' })
  }

  return (
    // Sticky wrapper — stays on screen while section scrolls behind it
    <div className="sticky top-0 h-screen w-full flex items-center justify-center z-20 pointer-events-none">

      {/* ── Main Headline Block ──────────────────────────────────────── */}
      <motion.div
        style={{ opacity: mainOpacity, y: mainY, willChange: 'opacity, transform' }}
        className="flex flex-col items-center text-center px-6 max-w-4xl pointer-events-auto"
      >
        {/* Brand label pill */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-dark-800/70 border border-gold/20 text-gold text-[10px] uppercase tracking-[0.28em] mb-8 backdrop-blur-sm"
        >
          <Sparkles className="w-3 h-3" />
          <span>Estd. 2011 · B2B Manufacturing</span>
        </motion.div>

        {/* Main Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="font-serif text-4xl sm:text-6xl md:text-7xl font-medium text-white tracking-tight leading-[1.08] mb-6"
        >
          Crafted for the <br className="hidden sm:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-gold">
            Modern Professional
          </span>
        </motion.h1>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6, ease: 'easeOut' }}
          className="font-sans text-base sm:text-lg text-gray-300 font-light tracking-wide max-w-xl leading-relaxed mb-10"
        >
          India's B2B men's formal trouser brand — supplying elite retailers nationwide with precision fit and unmatched craftsmanship.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-4"
        >
          <button
            onClick={() => handleScrollTo('#products')}
            className="inline-flex items-center gap-2.5 px-8 py-4 bg-gold text-black text-xs uppercase tracking-[0.2em] font-bold hover:bg-gold-light transition-all duration-300 shadow-lg shadow-gold/10 group"
          >
            View Collection
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </button>
          <button
            onClick={() => handleScrollTo('#contact')}
            className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-white/20 text-white hover:border-gold hover:text-gold text-xs uppercase tracking-[0.2em] font-medium transition-all duration-300 backdrop-blur-sm bg-white/5"
          >
            Partner With Us
          </button>
        </motion.div>
      </motion.div>

      {/* ── Mid-scroll Reveal Line ───────────────────────────────────── */}
      <motion.div
        style={{ opacity: revealOpacity, willChange: 'opacity' }}
        className="absolute inset-0 flex items-center justify-center pointer-events-none"
      >
        <div className="text-center px-6">
          <p className="font-serif text-2xl sm:text-4xl md:text-5xl text-white/80 italic font-light tracking-wide">
            From Thread to Trouser
          </p>
          <div className="w-16 h-[1px] bg-gold mx-auto my-4" />
          <p className="font-sans text-xs uppercase tracking-[0.35em] text-gold font-semibold">
            Since 2011
          </p>
        </div>
      </motion.div>

      {/* ── Frame 5 Payoff Line ──────────────────────────────────────── */}
      <motion.div
        style={{ opacity: payoffOpacity, y: payoffY, willChange: 'opacity, transform' }}
        className="absolute bottom-32 left-0 right-0 flex flex-col items-center pointer-events-auto"
      >
        <p className="font-sans text-[10px] uppercase tracking-[0.35em] text-gold/70 font-semibold mb-3">
          The Result
        </p>
        <p className="font-serif text-xl sm:text-2xl text-white/90 italic font-light">
          Precision. Every stitch.
        </p>
        <button
          onClick={() => handleScrollTo('#products')}
          className="mt-6 px-6 py-3 bg-gold/10 border border-gold/30 text-gold text-[10px] uppercase tracking-[0.2em] font-semibold hover:bg-gold hover:text-black transition-all duration-300"
        >
          Explore the Collection
        </button>
      </motion.div>

      {/* ── Scroll Indicator (visible only at top) ──────────────────── */}
      <motion.div
        style={{ opacity: useTransform(scrollProgress, [0, 0.08], [1, 0]) }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 pointer-events-none"
      >
        <span className="text-[9px] uppercase tracking-[0.32em] text-gray-500 font-medium">
          Scroll to discover
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
          className="w-[1.5px] h-6 bg-gold/40"
        />
      </motion.div>

      {/* ── Bottom-left: Live Frame Step Counter ────────────────────── */}
      <div className="absolute bottom-8 left-8 hidden md:flex items-center gap-3 pointer-events-none">
        <div className="w-[1px] h-8 bg-white/10" />
        <div>
          <span className="block font-mono text-[9px] text-gray-500 uppercase tracking-[0.2em] mb-0.5">
            Production Stage
          </span>
          <motion.span
            style={{ opacity: useTransform(scrollProgress, [0, 0.05], [0, 1]) }}
            className="font-sans text-[10px] text-gold uppercase tracking-wider font-semibold"
          >
            {frameLabels.map((label, i) => (
              <motion.span
                key={i}
                style={{
                  opacity: useTransform(
                    scrollProgress,
                    i === 0
                      ? [0, 0, 0.23]
                      : i === 1
                      ? [0.18, 0.23, 0.46]
                      : i === 2
                      ? [0.42, 0.52, 0.68]
                      : i === 3
                      ? [0.64, 0.72, 0.88]
                      : [0.84, 0.92, 1.0],
                    i === 0
                      ? [0, 1, 0]
                      : i < 4
                      ? [0, 1, 0]
                      : [0, 1, 1],
                  ),
                  position: 'absolute',
                }}
              >
                {label}
              </motion.span>
            ))}
            &nbsp;
          </motion.span>
        </div>
      </div>

      {/* ── Bottom-right: Progress Dots ───────────────────────────────── */}
      <div className="absolute bottom-8 right-8 hidden md:flex flex-col gap-2 items-center pointer-events-none">
        {[0, 0.23, 0.46, 0.68, 0.88].map((threshold, i) => (
          <motion.div
            key={i}
            style={{
              opacity: useTransform(
                scrollProgress,
                [Math.max(0, threshold - 0.04), threshold, threshold + 0.22],
                [0.2, 1, 0.2]
              ),
              scale: useTransform(
                scrollProgress,
                [Math.max(0, threshold - 0.04), threshold, threshold + 0.22],
                [0.7, 1.3, 0.7]
              ),
            }}
            className="w-1.5 h-1.5 rounded-full bg-gold"
          />
        ))}
      </div>

    </div>
  )
}
