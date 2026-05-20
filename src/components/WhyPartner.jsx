import { motion } from 'framer-motion'
import { ShieldCheck, Layers, Truck, Tag, HelpCircle } from 'lucide-react'

export default function WhyPartner() {
  const valueProps = [
    {
      id: 1,
      title: 'Consistent Quality',
      desc: 'Zero-defect high-precision stitching. Standardized fittings and perfect shade continuity guaranteed across all re-order batches.',
      icon: <ShieldCheck className="w-8 h-8 text-gold-dark" />
    },
    {
      id: 2,
      title: 'Competitive MOQ',
      desc: 'Flexible starting volume structures specifically optimized to benefit both local high-end boutiques and larger retail chains.',
      icon: <Layers className="w-8 h-8 text-gold-dark" />
    },
    {
      id: 3,
      title: 'Pan-India Delivery',
      desc: 'Strategic shipping integrations ensuring safe, fully-insured freight transit directly to over 350+ commercial cities nationwide.',
      icon: <Truck className="w-8 h-8 text-gold-dark" />
    },
    {
      id: 4,
      title: 'Private Label Options',
      desc: 'Available custom brand embroidery, customized barcode tags, and premium logo hangers for qualified regional networks.',
      icon: <Tag className="w-8 h-8 text-gold-dark" />
    }
  ]

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const cardVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: 'easeOut' }
    }
  }

  return (
    <section id="why-us" className="py-24 md:py-32 bg-gray-light text-dark-900 relative overflow-hidden">
      
      {/* Subtle Grid Pattern Overlay */}
      <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <pattern id="light-grid" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#000000" strokeWidth="0.5" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#light-grid)" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Title */}
        <div className="max-w-2xl mb-20 text-left">
          <span className="font-sans text-xs uppercase tracking-[0.3em] text-gold-dark font-bold">
            B2B Value Proposition
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-dark-900 font-medium tracking-tight mt-3 mb-6">
            Engineered for Retail Success
          </h2>
          <div className="w-12 h-[2px] bg-gold-dark mb-6"></div>
          <p className="font-sans text-sm text-dark-700 font-light leading-relaxed">
            Partnering with Topller means bringing unmatched precision to your shelves while enjoying frictionless manufacturing, logistics, and highly profitable margins.
          </p>
        </div>

        {/* 4-Column Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {valueProps.map((prop) => (
            <motion.div
              key={prop.id}
              variants={cardVariants}
              className="p-8 bg-white border border-black/[0.04] flex flex-col justify-between hover:shadow-xl hover:border-gold/30 transition-all duration-300 group"
            >
              <div>
                {/* Icon Circle */}
                <div className="w-16 h-16 bg-gray-light border border-black/[0.04] flex items-center justify-center mb-8 group-hover:bg-gold/10 transition-colors duration-300">
                  {prop.icon}
                </div>

                {/* Title */}
                <h3 className="font-serif text-lg md:text-xl text-dark-900 font-semibold mb-4 group-hover:text-gold-dark transition-colors duration-300">
                  {prop.title}
                </h3>

                {/* Description */}
                <p className="font-sans text-xs md:text-sm text-dark-700 font-light leading-relaxed">
                  {prop.desc}
                </p>
              </div>

              {/* Decorative base line */}
              <div className="w-6 h-[1.5px] bg-gold-dark mt-8 group-hover:w-full transition-all duration-500 ease-out" />
            </motion.div>
          ))}
        </motion.div>

        {/* Small Trust Seal Footer */}
        <div className="mt-16 pt-8 border-t border-black/[0.06] flex flex-col sm:flex-row items-center justify-between gap-4">
          <span className="font-sans text-xs text-dark-700 font-medium">
            * All textile batches come with official lab certification tests.
          </span>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-600"></span>
            <span className="font-sans text-xs text-dark-700 font-semibold tracking-wider uppercase">
              Operational & Shipping Nationwide
            </span>
          </div>
        </div>

      </div>
    </section>
  )
}
