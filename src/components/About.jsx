import { motion } from 'framer-motion'
import { Sparkles, Landmark, Users, Calendar } from 'lucide-react'

export default function About() {
  const stats = [
    {
      id: 1,
      number: '15+',
      label: 'Years of Experience',
      desc: 'Refining the perfect formal fit.',
      icon: <Calendar className="w-5 h-5 text-gold" />
    },
    {
      id: 2,
      number: '10,000+',
      label: 'Retailers Nationwide',
      desc: 'Trusted by premium shops pan-India.',
      icon: <Users className="w-5 h-5 text-gold" />
    },
    {
      id: 3,
      number: '100%',
      label: 'Direct-to-Store Model',
      desc: 'No middlemen. Maximized margins for you.',
      icon: <Landmark className="w-5 h-5 text-gold" />
    }
  ]

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15
      }
    }
  }

  const childVariants = {
    hidden: { y: 40, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: 'easeOut' }
    }
  }

  return (
    <section id="about" className="py-24 md:py-32 bg-dark-900 relative overflow-hidden">
      
      {/* Background Soft Gradients */}
      <div className="absolute right-0 top-0 w-[400px] h-[400px] bg-gold/5 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute left-0 bottom-0 w-[400px] h-[400px] bg-white/2 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center"
        >
          
          {/* Left Column: Bold Slogan, Description & Metrics */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <motion.div variants={childVariants} className="flex items-center gap-2 mb-4">
              <span className="w-2.5 h-[1px] bg-gold"></span>
              <span className="font-sans text-xs uppercase tracking-[0.3em] text-gold font-semibold">
                Direct Mill to Retailer
              </span>
            </motion.div>

            <motion.h2 
              variants={childVariants}
              className="font-serif text-3xl sm:text-4xl md:text-5xl text-white font-medium tracking-tight mb-8 leading-tight"
            >
              Exquisite Craftsmanship. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">
                Direct to Your Showroom.
              </span>
            </motion.h2>

            <motion.p 
              variants={childVariants}
              className="font-sans text-base md:text-lg text-gray-300 font-light leading-relaxed mb-8"
            >
              We manufacture and brand premium men's formal trousers, supplying directly to retail stores across India. By eliminating middlemen and distributing straight from our modern production facility, we guarantee premium luxury quality at unmatched wholesale value.
            </motion.p>

            <motion.p 
              variants={childVariants}
              className="font-sans text-sm text-gray-400 font-light leading-relaxed mb-12"
            >
              Every pattern we cut is tailored specifically for the Indian body shape, balancing classic drape aesthetics with modern athletic comfort. Our garments cater specifically to professionals, entrepreneurs, and wedding buyers who appreciate silent luxury.
            </motion.p>

            {/* Stat Boxes */}
            <motion.div 
              variants={childVariants}
              className="grid grid-cols-1 sm:grid-cols-3 gap-6"
            >
              {stats.map((stat) => (
                <div 
                  key={stat.id} 
                  className="p-5 bg-dark-950 border border-white/5 relative overflow-hidden group hover:border-gold/30 transition-all duration-300"
                >
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-serif text-2xl md:text-3xl text-gold font-semibold">
                      {stat.number}
                    </span>
                    {stat.icon}
                  </div>
                  <h4 className="font-sans text-xs uppercase tracking-wider text-white font-semibold mb-1">
                    {stat.label}
                  </h4>
                  <p className="font-sans text-[11px] text-gray-500 font-light leading-snug">
                    {stat.desc}
                  </p>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right Column: Premium Interactive CSS Texture Visual Block */}
          <motion.div 
            variants={childVariants}
            className="lg:col-span-5 relative"
          >
            {/* Outline Decorative border */}
            <div className="absolute -inset-4 border border-gold/15 pointer-events-none translate-x-2 translate-y-2 z-0" />

            {/* Primary Visual Block */}
            <div className="relative z-10 w-full aspect-[4/5] bg-dark-950 border border-white/10 p-6 flex flex-col justify-between overflow-hidden group">
              
              {/* Animated weave background pattern */}
              <div className="absolute inset-0 fabric-weave-pattern opacity-60 group-hover:scale-105 transition-transform duration-1000 ease-out" />
              
              {/* Visual overlay gradient to ensure text readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-dark-950 via-dark-950/20 to-transparent z-0" />

              {/* IMAGE PLACEHOLDER COMMENT - User can place a gorgeous clothing catalog image here */}
              {/* 
                IMAGE: Premium close-up fabric texture or model wearing formal trousers.
                To drop real image:
                <img 
                  src="/your-image-path.jpg" 
                  alt="Premium formal trouser close up" 
                  className="absolute inset-0 w-full h-full object-cover z-0 group-hover:scale-105 transition-transform duration-1000 ease-out"
                />
              */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-20 group-hover:opacity-40 transition-opacity">
                <span className="font-mono text-xs text-white tracking-[0.3em] uppercase bg-black/60 px-4 py-2 border border-white/10">
                  [ CATALOG IMAGE PLACEHOLDER ]
                </span>
              </div>

              {/* Top Details */}
              <div className="relative z-10 flex justify-between items-start">
                <span className="font-mono text-[10px] text-gold tracking-widest uppercase">
                  BATCH NO. T-792
                </span>
                <span className="font-mono text-[10px] text-white/40">
                  55% VISCOSE / 45% POLYESTER
                </span>
              </div>

              {/* Center Text Graphic */}
              <div className="relative z-10 text-center my-auto flex flex-col items-center">
                <span className="font-serif text-5xl italic text-gold/25 font-light block mb-2">Purity</span>
                <span className="w-12 h-[1px] bg-gold/30 my-2"></span>
                <p className="font-sans text-[11px] uppercase tracking-[0.2em] text-white/50">
                  12,000+ Weave Matrix Density
                </p>
              </div>

              {/* Bottom Details */}
              <div className="relative z-10">
                <div className="flex items-center gap-2 mb-2">
                  <Sparkles className="w-3.5 h-3.5 text-gold" />
                  <span className="font-sans text-[11px] text-white uppercase tracking-widest font-semibold">
                    Signature Finish
                  </span>
                </div>
                <p className="font-sans text-xs text-gray-400 font-light leading-relaxed">
                  Anti-pilling, crease-resistant, four-way weave with a soft matte luster that speaks luxury without shouting.
                </p>
              </div>

            </div>
          </motion.div>

        </motion.div>
      </div>
    </section>
  )
}
