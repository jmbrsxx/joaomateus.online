import './App.css'
import Header from './components/Header'
import Hero from './components/Hero'
import Services from './components/Services'
import Projects from './components/Projects'
import HowIWork from './components/HowIWork'
import Testimonials from './components/Testimonials'
import About from './components/About'
import FAQ from './components/FAQ'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="bg-slate-950 text-white overflow-hidden">
      <Header />
      <Hero />
      <Services />
      <Projects />
      <HowIWork />
      <Testimonials />
      <About />
      <FAQ />
      <Contact />
      <Footer />
    </div>
  )
}
