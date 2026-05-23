import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Mail, Phone, MapPin, Send, CheckCircle2, Sparkles } from 'lucide-react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    businessName: '',
    city: '',
    phone: '',
    message: ''
  })
  const [status, setStatus] = useState('idle') // idle | submitting | success
  const [errors, setErrors] = useState({})

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    // Clear error
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }))
    }
  }

  const validate = () => {
    const tempErrors = {}
    if (!formData.name.trim()) tempErrors.name = 'Name is required'
    if (!formData.businessName.trim()) tempErrors.businessName = 'Business/Store Name is required'
    if (!formData.city.trim()) tempErrors.city = 'City is required'
    if (!formData.phone.trim()) {
      tempErrors.phone = 'Phone number is required'
    } else if (!/^\d{10}$/.test(formData.phone.replace(/[^0-9]/g, ''))) {
      tempErrors.phone = 'Please enter a valid 10-digit number'
    }
    setErrors(tempErrors)
    return Object.keys(tempErrors).length === 0
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!validate()) return

    setStatus('submitting')
    // Simulate API call
    setTimeout(() => {
      setStatus('success')
    }, 1500)
  }

  return (
    <section id="contact" className="py-24 md:py-32 bg-dark-900 text-white relative overflow-hidden">
      
      {/* Decorative side mesh */}
      <div className="absolute right-0 top-0 w-96 h-96 bg-gold/5 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute left-0 bottom-0 w-96 h-96 bg-white/2 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
          
          {/* Left Column: Brand Message & Contact Info */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <span className="w-2.5 h-[1px] bg-gold"></span>
                <span className="font-sans text-xs uppercase tracking-[0.3em] text-gold font-semibold">
                  Direct Partner Channels
                </span>
              </div>

              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-white font-medium tracking-tight mb-6 leading-tight">
                Let's Build <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">
                  Something Great.
                </span>
              </h2>

              <p className="font-sans text-sm md:text-base text-gray-400 font-light leading-relaxed mb-12 max-w-sm">
                Unlock competitive factory wholesale pricing and secure geographic territory distribution exclusivity for your store. Contact our corporate partnerships team today.
              </p>
            </div>

            {/* Direct Contact Coordinates */}
            <div className="space-y-8 pt-8 border-t border-white/5">
              
              {/* WhatsApp & Phone */}
              <div className="flex items-start gap-4">
                <div className="p-3 bg-dark-950 border border-white/5 text-gold">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="block font-mono text-[9px] text-gray-500 uppercase tracking-widest mb-1">
                    WhatsApp & Hotline
                  </span>
                  <a href="https://wa.me/+919820013539" target="_blank" rel="noreferrer" className="block font-sans text-sm text-white hover:text-gold transition-colors font-medium">
                    +91 98765 43210
                  </a>
                  <span className="block font-sans text-[11px] text-gray-500 font-light mt-0.5">
                    (Direct retail sales coordination)
                  </span>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-4">
                <div className="p-3 bg-dark-950 border border-white/5 text-gold">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="block font-mono text-[9px] text-gray-500 uppercase tracking-widest mb-1">
                    Partnership Inquiries
                  </span>
                  <a href="mailto:partner@topller.com" className="block font-sans text-sm text-white hover:text-gold transition-colors font-medium">
                    partner@topller.com
                  </a>
                  <span className="block font-sans text-[11px] text-gray-500 font-light mt-0.5">
                    (Catalogs & pricing sheets requests)
                  </span>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-start gap-4">
                <div className="p-3 bg-dark-950 border border-white/5 text-gold">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="block font-mono text-[9px] text-gray-500 uppercase tracking-widest mb-1">
                    Corporate Headquarters
                  </span>
                  <p className="font-sans text-sm text-white font-medium leading-relaxed">
                    Vardhaman Textiles Tower, Sector 3,<br />
                    Rohini, New Delhi - 110085, India
                  </p>
                </div>
              </div>

            </div>
          </div>

          {/* Right Column: Premium Active Contact Form / Success Onboarding */}
          <div className="lg:col-span-7">
            <div className="p-8 md:p-10 bg-dark-950 border border-white/5 shadow-2xl relative">
              
              <AnimatePresence mode="wait">
                {status !== 'success' ? (
                  <motion.form
                    key="contact-form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={handleSubmit}
                    className="space-y-6"
                  >
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      {/* Name */}
                      <div>
                        <label className="block font-sans text-xs uppercase tracking-widest text-gray-400 font-medium mb-2">
                          Your Name *
                        </label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          className="w-full px-4 py-3 bg-dark-900 border border-white/10 text-white rounded-none focus:outline-none focus:border-gold transition-colors text-sm"
                          placeholder="e.g., Rajesh Kumar"
                        />
                        {errors.name && (
                          <span className="text-[10px] text-red-500 font-medium mt-1 block">{errors.name}</span>
                        )}
                      </div>

                      {/* Business Name */}
                      <div>
                        <label className="block font-sans text-xs uppercase tracking-widest text-gray-400 font-medium mb-2">
                          Business / Store Name *
                        </label>
                        <input
                          type="text"
                          name="businessName"
                          value={formData.businessName}
                          onChange={handleChange}
                          className="w-full px-4 py-3 bg-dark-900 border border-white/10 text-white rounded-none focus:outline-none focus:border-gold transition-colors text-sm"
                          placeholder="e.g., Raymond Retailer Store"
                        />
                        {errors.businessName && (
                          <span className="text-[10px] text-red-500 font-medium mt-1 block">{errors.businessName}</span>
                        )}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      {/* City */}
                      <div>
                        <label className="block font-sans text-xs uppercase tracking-widest text-gray-400 font-medium mb-2">
                          City / State *
                        </label>
                        <input
                          type="text"
                          name="city"
                          value={formData.city}
                          onChange={handleChange}
                          className="w-full px-4 py-3 bg-dark-900 border border-white/10 text-white rounded-none focus:outline-none focus:border-gold transition-colors text-sm"
                          placeholder="e.g., Mumbai, Maharashtra"
                        />
                        {errors.city && (
                          <span className="text-[10px] text-red-500 font-medium mt-1 block">{errors.city}</span>
                        )}
                      </div>

                      {/* Phone */}
                      <div>
                        <label className="block font-sans text-xs uppercase tracking-widest text-gray-400 font-medium mb-2">
                          Contact Phone Number *
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full px-4 py-3 bg-dark-900 border border-white/10 text-white rounded-none focus:outline-none focus:border-gold transition-colors text-sm"
                          placeholder="10-digit mobile number"
                        />
                        {errors.phone && (
                          <span className="text-[10px] text-red-500 font-medium mt-1 block">{errors.phone}</span>
                        )}
                      </div>
                    </div>

                    {/* Message */}
                    <div>
                      <label className="block font-sans text-xs uppercase tracking-widest text-gray-400 font-medium mb-2">
                        Your Inquiry Message (Optional)
                      </label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={4}
                        className="w-full px-4 py-3 bg-dark-900 border border-white/10 text-white rounded-none focus:outline-none focus:border-gold transition-colors text-sm resize-none"
                        placeholder="Tell us about your monthly stock requirements, preferred fits, or requested swatch patterns..."
                      />
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={status === 'submitting'}
                      className="w-full py-4 bg-gold text-black text-xs uppercase tracking-[0.25em] font-bold hover:bg-gold-light transition-all duration-300 flex items-center justify-center gap-2 group-btn"
                    >
                      {status === 'submitting' ? (
                        <>
                          <div className="w-4 h-4 border-2 border-black border-t-transparent rounded-full animate-spin" />
                          <span>Processing Inquiry...</span>
                        </>
                      ) : (
                        <>
                          <span>Submit Partnership Request</span>
                          <Send className="w-3.5 h-3.5" />
                        </>
                      )}
                    </button>
                  </motion.form>
                ) : (
                  <motion.div
                    key="success-message"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-10"
                  >
                    <div className="w-16 h-16 bg-gold/10 border border-gold/30 text-gold flex items-center justify-center mx-auto mb-6">
                      <CheckCircle2 className="w-8 h-8" />
                    </div>

                    <h3 className="font-serif text-2xl md:text-3xl text-white font-medium mb-3">
                      Partnership Initiated
                    </h3>
                    <p className="font-sans text-sm text-gray-400 font-light max-w-md mx-auto mb-10">
                      Thank you, <strong className="text-white">{formData.name}</strong>. Your inquiry for <strong className="text-white">{formData.businessName}</strong> has been logged in our manufacturing CRM.
                    </p>

                    {/* Next Steps Onboarding Timeline */}
                    <div className="bg-dark-900 border border-white/5 p-6 text-left max-w-lg mx-auto space-y-4">
                      <div className="flex items-center gap-2 mb-2 pb-2 border-b border-white/5">
                        <Sparkles className="w-4 h-4 text-gold" />
                        <span className="font-sans text-[10px] text-gold uppercase tracking-[0.2em] font-semibold">
                          What happens next?
                        </span>
                      </div>

                      <div className="flex items-start gap-3">
                        <span className="font-mono text-xs text-gold font-bold">1.</span>
                        <p className="font-sans text-xs text-gray-300 font-light">
                          Our WhatsApp representative will send a digital catalog and wholesales rate card directly to <strong className="text-white">{formData.phone}</strong> in 10 minutes.
                        </p>
                      </div>

                      <div className="flex items-start gap-3">
                        <span className="font-mono text-xs text-gold font-bold">2.</span>
                        <p className="font-sans text-xs text-gray-300 font-light">
                          A regional sales director will contact you to verify GST/business details and arrange a physical textile swatch kit dispatch.
                        </p>
                      </div>

                      <div className="flex items-start gap-3">
                        <span className="font-mono text-xs text-gold font-bold">3.</span>
                        <p className="font-sans text-xs text-gray-300 font-light">
                          Once sample trousers are approved, your territory manager will finalize territory exclusivity details.
                        </p>
                      </div>
                    </div>

                    <button
                      onClick={() => {
                        setStatus('idle')
                        setFormData({ name: '', businessName: '', city: '', phone: '', message: '' })
                      }}
                      className="mt-8 px-6 py-2.5 border border-white/10 hover:border-gold hover:text-gold text-white text-xs uppercase tracking-wider transition-colors"
                    >
                      Submit Another Inquiry
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>

            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
