import { ArrowUp, Mail, ShieldAlert } from 'lucide-react'
import Logo from './Logo'

export default function Footer() {
  const quickLinks = [
    { name: 'Manifesto', href: '#about' },
    { name: 'The Fits', href: '#products' },
    { name: 'Wholesale Pros', href: '#why-us' },
    { name: 'Collab Process', href: '#collab' },
    { name: 'Contact Sales', href: '#contact' }
  ]

  const handleScrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  return (
    <footer className="bg-dark-950 text-white border-t border-white/5 py-16 relative overflow-hidden">
      
      {/* Decorative vertical lines */}
      <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-[1px] bg-white/[0.02] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          
          {/* Brand Info */}
          <div className="md:col-span-2 space-y-6">
            <div className="flex items-center">
              <Logo height={36} textColor="text-white" />
            </div>
            <p className="font-sans text-xs text-gray-500 font-light leading-relaxed max-w-sm">
              India's premier high-precision manufacturing brand for men's formal trousers. Supplying elite showrooms, clothing chains, and corporate brands nationwide since 2011.
            </p>
            
            {/* Warning tag */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-gold/5 border border-gold/15 text-gold text-[10px] uppercase tracking-wider font-semibold">
              <ShieldAlert className="w-3.5 h-3.5" />
              <span>Strictly B2B inquiries Only</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-sans text-[10px] uppercase tracking-[0.25em] text-white font-bold mb-6">
              Navigation
            </h4>
            <ul className="space-y-3 font-sans text-xs text-gray-400">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault()
                      const element = document.querySelector(link.href)
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
                    }}
                    className="hover:text-gold transition-colors duration-300"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Socials / Channels */}
          <div>
            <h4 className="font-sans text-[10px] uppercase tracking-[0.25em] text-white font-bold mb-6">
              Official Media Channels
            </h4>
            <ul className="space-y-3 font-sans text-xs text-gray-400">
              <li>
                <a href="#" className="hover:text-gold transition-colors duration-300 flex items-center gap-2">
                  <span>LinkedIn Professional</span>
                  <span className="text-[9px] text-gray-600 font-mono">[Corporate]</span>
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gold transition-colors duration-300 flex items-center gap-2">
                  <span>Instagram Gallery</span>
                  <span className="text-[9px] text-gray-600 font-mono">[Catalog Showcase]</span>
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gold transition-colors duration-300 flex items-center gap-2">
                  <span>WhatsApp Catalog Channel</span>
                  <span className="text-[9px] text-gray-600 font-mono">[New Stock Alerts]</span>
                </a>
              </li>
              <li className="pt-2">
                <a href="mailto:partner@topller.com" className="inline-flex items-center gap-2 px-3 py-1.5 bg-dark-900 border border-white/5 text-white hover:border-gold hover:text-gold transition-colors text-[10px] uppercase tracking-wider font-semibold">
                  <Mail className="w-3.5 h-3.5" />
                  <span>Mail Support</span>
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Copyright & Up Arrow */}
        <div className="pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-6">
          <span className="font-sans text-[10px] text-gray-500 uppercase tracking-widest">
            © {new Date().getFullYear()} TOPLLER WEAVES PVT. LTD. ALL RIGHTS RESERVED.
          </span>
          <div className="flex items-center gap-6">
            <span className="font-sans text-[9px] text-gray-600 uppercase tracking-wider">
              Designed for Quiet Luxury & Tailoring Precision
            </span>
            <button
              onClick={handleScrollTop}
              className="p-3 bg-dark-900 border border-white/5 text-gray-400 hover:text-gold hover:border-gold/30 transition-all duration-300 group"
              aria-label="Scroll to top"
            >
              <ArrowUp className="w-4 h-4 transition-transform group-hover:-translate-y-0.5" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  )
}
