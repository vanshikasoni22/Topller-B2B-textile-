import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import ProductionLine from './components/ProductionLine'
import Products from './components/Products'
import WhyPartner from './components/WhyPartner'
import Collab from './components/Collab'
import FabricShowcase from './components/FabricShowcase'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <div className="relative min-h-screen bg-dark-950 font-sans antialiased text-white selection:bg-gold selection:text-black">
      {/* Sticky top premium header */}
      <Navbar />

      <main className="relative z-10">
        {/* Section 2: Hero Section */}
        <Hero />

        {/* Section 4: About / What We Do Section */}
        <About />

        {/* Section 3: Scroll-Triggered Production Animation Section */}
        <ProductionLine />

        {/* Section 5: Product Range Section */}
        <Products />

        {/* Section 6: Why Partner With Us (B2B Value Props) */}
        <WhyPartner />

        {/* Section 7: Collab / Become a Retailer Section */}
        <Collab />

        {/* Section 8: Textile Detail Section (Fabric Showcase) */}
        <FabricShowcase />

        {/* Section 9: Contact Section */}
        <Contact />
      </main>

      {/* Section 10: Footer */}
      <Footer />
    </div>
  )
}

export default App
