import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Shield, Sparkles, Wind, RefreshCw, Layers } from 'lucide-react'

// Import textile showcase images
import woolBlendImg from '../assets/wool-blend.png'
import polyViscoseImg from '../assets/poly-viscose.png'
import cottonBlendImg from '../assets/cotton-blend.png'
import lycraFlexImg from '../assets/lycra-flex.png'

export default function FabricShowcase() {
  const swatches = [
    {
      id: 'wool-blend',
      name: 'Royal Wool Blend',
      image: woolBlendImg,
      type: 'Mill Grade A-72',
      color: 'bg-dark-800 border border-white/10',
      specs: '70% Wool, 30% Silk-Viscose',
      weight: '260 GSM',
      properties: ['Thermo-regulating', 'Luxurious deep drape', 'Self-smoothing recovery'],
      accentColor: '#c9a84c',
      pattern: 'radial-gradient(circle, rgba(201,168,76,0.15) 1px, transparent 1px)'
    },
    {
      id: 'poly-viscose',
      name: 'Premium Polyester Viscose',
      image: polyViscoseImg,
      type: 'Executive Gabardine',
      color: 'bg-dark-700 border border-white/5',
      specs: '65% Viscose, 35% Polyester',
      weight: '245 GSM',
      properties: ['Ultra crease-resistant', 'Active moisture-wicking', 'Anti-pilling weave'],
      accentColor: '#dfc576',
      pattern: 'linear-gradient(45deg, rgba(255,255,255,0.03) 25%, transparent 25%)'
    },
    {
      id: 'cotton-blend',
      name: 'Long-Staple Cotton Blend',
      image: cottonBlendImg,
      type: 'Twill Weave Classic',
      color: 'bg-stone-900 border border-white/5',
      specs: '80% ELS Cotton, 20% Silk-blend',
      weight: '235 GSM',
      properties: ['Silky natural texture', 'Superior skin breathability', 'Elegant matte finish'],
      accentColor: '#ffffff',
      pattern: 'linear-gradient(to right, rgba(255,255,255,0.02) 1px, transparent 1px)'
    },
    {
      id: 'lycra-flex',
      name: 'Dynamic Stretch Weave',
      image: lycraFlexImg,
      type: 'Active Kinetic Comfort',
      color: 'bg-slate-900 border border-white/5',
      specs: '62% Poly, 33% Viscose, 5% Lycra',
      weight: '250 GSM',
      properties: ['4-way responsive flex', 'Active shape-retention', 'Reinforced tensile strength'],
      accentColor: '#c9a84c',
      pattern: 'radial-gradient(rgba(255,255,255,0.03) 1.5px, transparent 1.5px)'
    }
  ]

  return (
    <section className="py-24 md:py-32 bg-dark-900 relative overflow-hidden">
      
      {/* Background visual graphics */}
      <div className="absolute right-10 top-1/3 w-[300px] h-[300px] bg-gold/3 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute left-10 bottom-1/3 w-[300px] h-[300px] bg-white/2 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-20">
          <div>
            <span className="font-sans text-xs uppercase tracking-[0.3em] text-gold font-semibold">
              Material Library
            </span>
            <h2 className="font-serif text-3xl md:text-5xl font-medium text-white tracking-tight mt-3">
              The Textile Showcase
            </h2>
          </div>
          <p className="font-sans text-sm text-gray-400 font-light max-w-sm md:text-right">
            Touch and feel are everything. We weave only using Grade-A combed fibers engineered to maintain shape memory, color luster, and cool breathing comfort.
          </p>
        </div>

        {/* Swatch Deck Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {swatches.map((swatch, idx) => (
            <motion.div
              key={swatch.id}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="bg-dark-950 border border-white/5 p-6 hover:border-gold/30 transition-all duration-500 relative group flex flex-col justify-between"
            >
              
              {/* Swatch Color & Texture Preview Box */}
              <div className="relative aspect-square w-full mb-6 flex flex-col justify-between p-4 overflow-hidden shadow-inner border border-white/5">
                
                {/* Real Swatch / Process Image */}
                {swatch.image ? (
                  <img 
                    src={swatch.image} 
                    alt={swatch.name} 
                    className="absolute inset-0 w-full h-full object-cover z-0 group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                ) : (
                  <div 
                    className="absolute inset-0 z-0 opacity-40 group-hover:scale-105 transition-transform duration-700" 
                    style={{ 
                      backgroundColor: '#121212',
                      backgroundImage: swatch.pattern,
                      backgroundSize: '12px 12px'
                    }} 
                  />
                )}

                {/* Weave texture pattern overlay for depth */}
                <div className="absolute inset-0 fabric-weave-pattern opacity-10 pointer-events-none z-10" />

                {/* Swatch Color Overlay block */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-black/30 z-10 pointer-events-none" />

                {/* Top Label */}
                <div className="relative z-20 flex justify-between items-center">
                  <span className="font-mono text-[9px] text-white/70 tracking-widest uppercase bg-black/50 px-2 py-0.5 border border-white/5 backdrop-blur-[1px]">
                    {swatch.type}
                  </span>
                  <div className="w-2.5 h-2.5 rounded-full border border-white/10" style={{ backgroundColor: swatch.accentColor }} />
                </div>

                {/* Bottom Weight Tag */}
                <div className="relative z-20 flex justify-between items-end">
                  <span className="font-sans text-[10px] text-gold tracking-widest uppercase font-semibold bg-black/50 px-2 py-0.5 border border-white/5 backdrop-blur-[1px]">
                    {swatch.weight}
                  </span>
                  <Layers className="w-4 h-4 text-white/55 drop-shadow-md" />
                </div>

              </div>

              {/* Swatch Details */}
              <div className="flex-grow flex flex-col justify-between">
                <div className="mb-6">
                  <h3 className="font-serif text-xl text-white font-medium mb-1 group-hover:text-gold transition-colors duration-300">
                    {swatch.name}
                  </h3>
                  <span className="font-sans text-[10px] text-gray-500 tracking-wider">
                    {swatch.specs}
                  </span>
                </div>

                {/* Features Specs */}
                <div className="border-t border-white/5 pt-4 space-y-2">
                  {swatch.properties.map((prop, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-gold/50" />
                      <span className="font-sans text-[11px] text-gray-400 font-light">
                        {prop}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

            </motion.div>
          ))}
        </div>

        {/* Call to action for physical folders */}
        <div className="mt-16 text-center">
          <p className="font-sans text-xs text-gray-500 uppercase tracking-widest">
            * Complete physical swatch books with 40+ color variants dispatched to qualified wholesale clients.
          </p>
        </div>

      </div>
    </section>
  )
}
