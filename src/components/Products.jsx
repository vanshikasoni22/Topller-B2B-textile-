import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight, Eye, Sparkles, X } from 'lucide-react'

export default function Products() {
  const [activeModal, setActiveModal] = useState(null)

  const categories = [
    {
      id: 'executive-slim',
      name: 'The Executive Slim',
      tagline: 'Sleek Modern Profile',
      desc: 'Engineered with a streamlined modern silhouette that tapers cleanly at the ankle. Features our signature flexi-waistband and low-rise structure, perfect for the modern workspace leader.',
      fabric: '70% Polyester, 30% Viscose Premium Blend',
      keyProp: 'Wrinkle-resistant, double-creased, dry-clean recommended',
      colors: ['Midnight Charcoal', 'Sterling Grey', 'Imperial Black', 'Deep Navy'],
      features: ['Sleek tapered fit', 'Concealed coin pocket', 'Flexi-waist expander', 'Premium interior canvas lining']
    },
    {
      id: 'heritage-classic',
      name: 'The Heritage Classic',
      tagline: 'Timeless Premium Comfort',
      desc: 'A tribute to classical bespoke tailoring. With a standard mid-rise and straight leg drape, this fit provides maximum breathing space while maintaining an ultra-sharp, authoritative profile.',
      fabric: '65% Viscose, 35% Polyester High-Density Gabardine',
      keyProp: 'High-breathability, four-thread interlocked structure',
      colors: ['Oxford Slate', 'Camel Beige', 'Classic Navy', 'Forest Olive'],
      features: ['Classic regular fit', 'Traditional double-bar secure closure', 'Reinforced side pockets', 'Slightly wider cuff allowance']
    },
    {
      id: 'ceremonial-gold',
      name: 'The Ceremonial Line',
      tagline: 'Elite Royal Celebration',
      desc: 'Crafted for weddings, evening banquets, and high-profile social galas. Imbued with a subtle luxurious sheen that responds majestically under warm celebration lights.',
      fabric: '80% Polyester, 20% Wool-viscose Rich Sheen Weave',
      keyProp: 'Soft luxurious luster, premium anti-static satin pockets',
      colors: ['Royal Ivory', 'Champagne Gold Accent Charcoal', 'Deep Onyx Black', 'Rich Wine Navy'],
      features: ['Elegant clean drape', 'Gold-plated premium thread stitches', 'Satin-trimmed waistband interior', 'Zero-crease travel pack finish']
    },
    {
      id: 'kinetic-flex',
      name: 'The Kinetic Stretch',
      tagline: 'High-Performance Comfort',
      desc: 'Formals redefined for the high-octane modern entrepreneur. Uses ultra-resilient spandex integrated fibers to allow full 360-degree range of motion without losing its structured shape.',
      fabric: '62% Polyester, 33% Viscose, 5% Spandex Advanced Flex Weave',
      keyProp: 'Four-way extreme stretch, moisture-wicking cool technology',
      colors: ['Shadow Blue', 'Ash Grey', 'Basalt Black', 'Espresso Brown'],
      features: ['Active slim comfort fit', 'Anti-stretching knee structure', 'Hidden secure zipper pocket', 'Super-soft brushed interior']
    }
  ]

  return (
    <section id="products" className="py-24 md:py-32 bg-dark-950 relative overflow-hidden">
      
      {/* Decorative catalogue grids */}
      <div className="absolute left-0 top-1/4 w-[1px] h-96 bg-white/[0.03]" />
      <div className="absolute right-0 top-2/3 w-[1px] h-96 bg-white/[0.03]" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <span className="font-sans text-xs uppercase tracking-[0.3em] text-gold font-semibold">
            B2B Curated Catalog
          </span>
          <h2 className="font-serif text-3xl md:text-5xl font-medium text-white tracking-tight mt-3 mb-6">
            The Autumn/Winter Range
          </h2>
          <div className="w-12 h-[1px] bg-gold mx-auto mb-6"></div>
          <p className="font-sans text-sm text-gray-400 font-light leading-relaxed">
            Four distinct categories engineered to capture every consumer preference, from daily professional wear to grand ceremonial occasions.
          </p>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((cat, idx) => (
            <motion.div
              key={cat.id}
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              whileHover={{ y: -8 }}
              className="bg-dark-900 border border-white/5 p-6 flex flex-col justify-between group transition-all duration-300 relative"
            >
              
              {/* Image Area Placeholder */}
              <div className="relative aspect-[3/4] bg-dark-950 border border-white/5 mb-6 overflow-hidden flex items-center justify-center">
                
                {/* Visual grid backdrop to mimic premium empty slot */}
                <div className="absolute inset-0 fabric-grid-overlay opacity-30" />
                
                {/* Subtle dark pattern gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-dark-900/80 to-transparent" />

                {/* IMAGE PLACEHOLDER COMMENT - User can place a specific category fit model photo here */}
                {/* 
                  IMAGE: Photo of a model displaying {cat.name}.
                  To drop real image:
                  <img 
                    src={`/images/${cat.id}.jpg`} 
                    alt={cat.name} 
                    className="absolute inset-0 w-full h-full object-cover z-0 group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                */}
                <div className="relative z-10 flex flex-col items-center gap-3 opacity-25 group-hover:opacity-60 transition-opacity duration-300">
                  <span className="font-mono text-[10px] text-white tracking-widest uppercase">
                    [ {cat.name} IMAGE ]
                  </span>
                  <span className="text-[9px] font-sans text-gray-400 italic">
                    Aspect Ratio 3:4
                  </span>
                </div>

                {/* Subtle top tag */}
                <div className="absolute top-3 left-3 px-2 py-0.5 bg-dark-900 border border-white/10">
                  <span className="font-mono text-[9px] text-gold tracking-widest uppercase">
                    FIT 0{idx + 1}
                  </span>
                </div>

                {/* Interactive magnifying eye button */}
                <div 
                  onClick={() => setActiveModal(cat)}
                  className="absolute bottom-4 right-4 p-2 bg-gold/90 hover:bg-gold text-black rounded-none cursor-pointer translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 shadow-lg"
                >
                  <Eye className="w-4 h-4" />
                </div>
              </div>

              {/* Text Info */}
              <div className="mb-6">
                <span className="font-sans text-[10px] text-gold uppercase tracking-[0.2em] font-semibold block mb-1">
                  {cat.tagline}
                </span>
                <h3 className="font-serif text-lg md:text-xl text-white font-medium group-hover:text-gold transition-colors duration-300">
                  {cat.name}
                </h3>
                <div className="w-0 h-[1.5px] bg-gold mt-2 group-hover:w-full transition-all duration-500 ease-out" />
                <p className="font-sans text-xs text-gray-400 font-light mt-3 leading-relaxed line-clamp-2">
                  {cat.desc}
                </p>
              </div>

              {/* Action Button */}
              <button
                onClick={() => setActiveModal(cat)}
                className="w-full py-3 bg-white/5 border border-white/10 hover:border-gold hover:bg-gold hover:text-black text-white text-xs uppercase tracking-[0.2em] font-medium transition-all duration-300 inline-flex items-center justify-center gap-2 group-btn"
              >
                View Details
                <ArrowRight className="w-3.5 h-3.5" />
              </button>

            </motion.div>
          ))}
        </div>

        {/* Dynamic Catalog Specs Modal (Framer Motion Popup) */}
        <AnimatePresence>
          {activeModal && (
            <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
              
              {/* Backdrop */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setActiveModal(null)}
                className="absolute inset-0 bg-black/80 backdrop-blur-sm"
              />

              {/* Modal Container */}
              <motion.div
                initial={{ scale: 0.95, y: 30, opacity: 0 }}
                animate={{ scale: 1, y: 0, opacity: 1 }}
                exit={{ scale: 0.95, y: 30, opacity: 0 }}
                transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                className="relative z-10 w-full max-w-3xl bg-dark-900 border border-gold/20 p-8 md:p-10 text-white max-h-[90vh] overflow-y-auto"
              >
                
                {/* Close Button */}
                <button
                  onClick={() => setActiveModal(null)}
                  className="absolute top-6 right-6 p-2 text-gray-400 hover:text-white transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>

                {/* Modal Title */}
                <div className="mb-6 flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-gold" />
                  <span className="font-sans text-xs uppercase tracking-[0.25em] text-gold font-semibold">
                    {activeModal.tagline}
                  </span>
                </div>

                <h3 className="font-serif text-3xl md:text-4xl text-white font-medium mb-4">
                  {activeModal.name}
                </h3>

                <p className="font-sans text-sm md:text-base text-gray-300 font-light leading-relaxed mb-8">
                  {activeModal.desc}
                </p>

                {/* Specs Split Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8 border-t border-b border-white/5 py-8">
                  
                  {/* Textile Specs */}
                  <div>
                    <h4 className="font-sans text-xs uppercase tracking-widest text-gold font-semibold mb-4">
                      TEXTILE & FABRIC SPECS
                    </h4>
                    <ul className="space-y-3 font-sans text-xs text-gray-400">
                      <li>
                        <strong className="text-white">Composition: </strong>
                        {activeModal.fabric}
                      </li>
                      <li>
                        <strong className="text-white">Properties: </strong>
                        {activeModal.keyProp}
                      </li>
                      <li>
                        <strong className="text-white">Colors Available: </strong>
                        <div className="flex flex-wrap gap-2 mt-2">
                          {activeModal.colors.map((c) => (
                            <span key={c} className="px-2.5 py-1 bg-dark-950 border border-white/10 text-[10px] tracking-wider text-gray-300">
                              {c}
                            </span>
                          ))}
                        </div>
                      </li>
                    </ul>
                  </div>

                  {/* Tailoring details */}
                  <div>
                    <h4 className="font-sans text-xs uppercase tracking-widest text-gold font-semibold mb-4">
                      TAILORING & WORKMANSHIP
                    </h4>
                    <ul className="space-y-2.5 font-sans text-xs text-gray-400">
                      {activeModal.features.map((feature, i) => (
                        <li key={i} className="flex items-center gap-2.5">
                          <span className="w-1.5 h-1.5 bg-gold" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                </div>

                {/* Modal Actions */}
                <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                  <span className="font-mono text-[10px] text-gray-500 uppercase tracking-widest">
                    Available in sizes 28 to 44 | Direct wholesale pricing only
                  </span>
                  <a
                    href="#contact"
                    onClick={(e) => {
                      setActiveModal(null)
                      const element = document.querySelector('#contact')
                      if (element) {
                        element.scrollIntoView({ behavior: 'smooth' })
                      }
                    }}
                    className="w-full sm:w-auto px-6 py-3 bg-gold text-black text-xs uppercase tracking-[0.2em] font-semibold hover:bg-gold-light transition-all text-center"
                  >
                    Request Sample Swatches
                  </a>
                </div>

              </motion.div>
            </div>
          )}
        </AnimatePresence>

      </div>
    </section>
  )
}
