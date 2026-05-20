import { motion } from 'framer-motion'
import { ArrowRight, MessageSquare, ClipboardCheck, Store } from 'lucide-react'

export default function Collab() {
  const steps = [
    {
      id: 1,
      title: 'Inquire',
      label: '01. First Touch',
      desc: 'Submit your shop details, GST registration, and city region through our simple partnership form.',
      icon: <MessageSquare className="w-6 h-6 text-gold" />
    },
    {
      id: 2,
      title: 'Sample Order',
      label: '02. Fabric Check',
      desc: 'Receive our premium tactile fabric swatch booklet and standard sizing trial trousers for inspection.',
      icon: <ClipboardCheck className="w-6 h-6 text-gold" />
    },
    {
      id: 3,
      title: 'Onboard',
      label: '03. Delivery & Exclusivity',
      desc: 'Confirm your custom billing account, check region availability, and unlock direct wholesale dispatch.',
      icon: <Store className="w-6 h-6 text-gold" />
    }
  ]

  const handleScrollToContact = (e) => {
    e.preventDefault()
    const element = document.querySelector('#contact')
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
    <section id="collab" className="py-24 md:py-32 bg-dark-950 text-white relative overflow-hidden">
      
      {/* Background soft lighting */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-gold/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 text-center">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto mb-20">
          <span className="font-sans text-xs uppercase tracking-[0.3em] text-gold font-semibold">
            Seamless Retail Partnership
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-white font-medium tracking-tight mt-3 mb-6">
            Grow Your Store's Formal Category
          </h2>
          <div className="w-12 h-[1px] bg-gold mx-auto mb-6"></div>
          <p className="font-sans text-sm text-gray-400 font-light leading-relaxed max-w-xl mx-auto">
            Our onboarding structure is designed to be completely frictionless. From standard sampling to catalog restocking, we co-pilot your showroom's success.
          </p>
        </div>

        {/* Steps Showcase Container */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-8 items-stretch mb-20 relative">
          {steps.map((step, idx) => (
            <motion.div
              key={step.id}
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              className="relative flex flex-col items-center p-8 bg-dark-900 border border-white/5 group hover:border-gold/30 transition-all duration-300"
            >
              
              {/* Step number badge */}
              <span className="font-mono text-[10px] text-gold uppercase tracking-[0.25em] font-semibold mb-6">
                {step.label}
              </span>

              {/* Icon Container */}
              <div className="w-14 h-14 bg-dark-800 border border-white/5 flex items-center justify-center mb-6 group-hover:bg-gold/10 group-hover:border-gold/20 transition-all duration-300">
                {step.icon}
              </div>

              {/* Title */}
              <h3 className="font-serif text-xl text-white font-medium mb-3">
                {step.title}
              </h3>

              {/* Desc */}
              <p className="font-sans text-xs md:text-sm text-gray-400 font-light leading-relaxed max-w-xs">
                {step.desc}
              </p>

              {/* Connection Indicator Arrow (Except last step) */}
              {idx < 2 && (
                <div className="hidden lg:block absolute right-[-16px] top-1/2 -translate-y-1/2 z-20">
                  <ArrowRight className="w-8 h-8 text-gold/30 group-hover:text-gold transition-colors duration-500" />
                </div>
              )}

            </motion.div>
          ))}
        </div>

        {/* Action CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center gap-4"
        >
          <a
            href="#contact"
            onClick={handleScrollToContact}
            className="px-10 py-4 bg-gold text-black text-xs uppercase tracking-[0.2em] font-bold hover:bg-gold-light transition-all duration-300 shadow-xl shadow-gold/5 group"
          >
            Start Your Partnership
          </a>
          <span className="font-sans text-[10px] text-gray-500 uppercase tracking-widest mt-2">
            No upfront registration fee | Response within 24 business hours
          </span>
        </motion.div>

      </div>
    </section>
  )
}
