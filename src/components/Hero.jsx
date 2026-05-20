import { motion } from 'framer-motion'
import { ArrowRight, Sparkles } from 'lucide-react'

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
    }
  }

  const handleScrollTo = (e, id) => {
    e.preventDefault()
    const element = document.querySelector(id)
    if (element) {
      const offset = 80
      const bodyRect = document.body.getBoundingClientRect().top
      const elementRect = element.getBoundingClientRect().top
      const elementPosition = elementRect - bodyRect
      const offsetPosition = elementPosition - offset

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      })
    }
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-dark-950 pt-20">
      {/* Weaving Threads SVG Background (Warp and Weft) */}
      <div className="absolute inset-0 z-0 opacity-40">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="weaving-grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(201, 168, 76, 0.08)" strokeWidth="0.5" />
              <path d="M 0 20 L 40 20" fill="none" stroke="rgba(255, 255, 255, 0.02)" strokeWidth="0.5" />
              <path d="M 20 0 L 20 40" fill="none" stroke="rgba(255, 255, 255, 0.02)" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#weaving-grid)" />
        </svg>
      </div>

      {/* Animated Glowing Tailor Thread Lines */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            x: ['-100%', '100%'],
          }}
          transition={{
            repeat: Infinity,
            duration: 15,
            ease: 'linear',
          }}
          className="absolute top-[30%] left-0 w-full h-[1px] bg-gradient-to-right from-transparent via-gold/15 to-transparent"
        />
        <motion.div
          animate={{
            x: ['100%', '-100%'],
          }}
          transition={{
            repeat: Infinity,
            duration: 20,
            ease: 'linear',
          }}
          className="absolute bottom-[25%] left-0 w-full h-[1px] bg-gradient-to-right from-transparent via-gold/10 to-transparent"
        />
        <motion.div
          animate={{
            y: ['-100%', '100%'],
          }}
          transition={{
            repeat: Infinity,
            duration: 18,
            ease: 'linear',
          }}
          className="absolute top-0 left-[20%] w-[1px] h-full bg-gradient-to-bottom from-transparent via-gold/10 to-transparent"
        />
        <motion.div
          animate={{
            y: ['100%', '-100%'],
          }}
          transition={{
            repeat: Infinity,
            duration: 22,
            ease: 'linear',
          }}
          className="absolute top-0 right-[25%] w-[1px] h-full bg-gradient-to-bottom from-transparent via-gold/15 to-transparent"
        />
      </div>

      {/* Radial soft gold glow in center */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gold/5 rounded-full blur-[120px] pointer-events-none z-0" />

      {/* Hero Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 w-full text-center flex flex-col items-center">
        
        {/* Top Minimal Label */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: 'easeOut' }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-dark-800/80 border border-gold/20 text-gold text-xs uppercase tracking-[0.25em] mb-8"
        >
          <Sparkles className="w-3.5 h-3.5" />
          <span>ESTD 2011 | Quiet Luxury manufacturing</span>
        </motion.div>

        {/* Brand Main Slogan */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center max-w-4xl"
        >
          <motion.h1
            variants={itemVariants}
            className="font-serif text-4xl sm:text-6xl md:text-7xl font-medium text-white tracking-tight leading-[1.1] mb-6"
          >
            Crafted for the <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-gold">
              Modern Professional
            </span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="font-sans text-base sm:text-lg md:text-xl text-gray-400 font-light tracking-wide max-w-2xl leading-relaxed mb-12"
          >
            India's B2B men's formal trouser brand — supplying elite retailers nationwide with precision fit, premium fabrics, and unmatched durability.
          </motion.p>

          {/* Action CTAs */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-center gap-5 w-full sm:w-auto"
          >
            {/* CTA 1: View Collection */}
            <a
              href="#products"
              onClick={(e) => handleScrollTo(e, '#products')}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 bg-gold text-black text-xs uppercase tracking-[0.2em] font-semibold hover:bg-gold-light transition-all duration-300 shadow-lg shadow-gold/10 group"
            >
              View Collection
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>

            {/* CTA 2: Partner With Us */}
            <a
              href="#contact"
              onClick={(e) => handleScrollTo(e, '#contact')}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 border border-white/20 text-white hover:border-gold hover:text-gold text-xs uppercase tracking-[0.2em] font-medium transition-all duration-300 bg-white/5 backdrop-blur-sm"
            >
              Partner With Us
            </a>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator Down */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 cursor-pointer"
          onClick={(e) => handleScrollTo(e, '#about')}
        >
          <span className="text-[10px] uppercase tracking-[0.3em] text-gray-500 font-medium">Scroll to Discover</span>
          <motion.div
            animate={{
              y: [0, 8, 0],
            }}
            transition={{
              repeat: Infinity,
              duration: 2,
              ease: 'easeInOut',
            }}
            className="w-[1.5px] h-6 bg-gold/50"
          />
        </motion.div>
      </div>

      {/* Decorative vertical lines on sides to feel like a high-end catalogue */}
      <div className="absolute left-10 top-0 bottom-0 w-[1px] bg-white/[0.02] hidden xl:block" />
      <div className="absolute right-10 top-0 bottom-0 w-[1px] bg-white/[0.02] hidden xl:block" />
    </section>
  )
}
