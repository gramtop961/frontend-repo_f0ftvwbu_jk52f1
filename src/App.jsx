import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import Footer from './components/Footer'
import Stats from './components/Stats'
import HowItWorks from './components/HowItWorks'
import Showcase3D from './components/Showcase3D'
import CTA from './components/CTA'
import Testimonials from './components/Testimonials'
import ScrollingMarquee from './components/ScrollingMarquee'
import GradientDivider from './components/GradientDivider'

function App() {
  return (
    <div className="min-h-screen bg-slate-900">
      <Navbar />
      <Hero />
      <ScrollingMarquee />
      <GradientDivider />
      <Stats />
      <Features />
      <Showcase3D />
      <HowItWorks />
      <Testimonials />
      <CTA />
      <Footer />
    </div>
  )
}

export default App
