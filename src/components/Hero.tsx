import { ArrowRight, Zap } from 'lucide-react'
import AnimateOnScroll from './AnimateOnScroll'

export default function Hero() {

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="hero" className="relative min-h-screen bg-slate-950 text-white flex items-center pt-20 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-20 right-10 w-96 h-96 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl opacity-5 animate-pulse"></div>
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-5 animate-pulse animation-delay-2000"></div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10 w-full">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Column */}
          <div>
            <AnimateOnScroll>
              <div className="inline-block mb-4 px-4 py-2 bg-slate-800 rounded-full border border-slate-700">
                <span className="text-cyan-400 text-sm font-semibold flex items-center gap-2">
                  <Zap size={16} /> Digital Builder & Growth Engineer
                </span>
              </div>

              <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                I Build <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Websites & AI Systems</span> That Make Businesses Money
              </h1>

              <p className="text-xl text-slate-400 mb-8 leading-relaxed">
                Custom websites, AI automation, and conversion-focused solutions. I don't build digital decorations — I build revenue engines.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg hover:shadow-lg hover:shadow-cyan-500/50 transition font-semibold flex items-center justify-center gap-2"
                >
                  Book Call <ArrowRight size={20} />
                </button>
                <button 
                  onClick={() => scrollToSection('work')}
                  className="px-8 py-4 border border-slate-600 text-white rounded-lg hover:border-cyan-400 hover:text-cyan-400 transition font-semibold"
                >
                  View Work
                </button>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-6">
                <div>
                  <div className="text-3xl font-bold text-cyan-400">50+</div>
                  <p className="text-slate-400 text-sm">Projects</p>
                </div>
                <div>
                  <div className="text-3xl font-bold text-cyan-400">$5M+</div>
                  <p className="text-slate-400 text-sm">Revenue</p>
                </div>
                <div>
                  <div className="text-3xl font-bold text-cyan-400">98%</div>
                  <p className="text-slate-400 text-sm">Satisfaction</p>
                </div>
              </div>
            </AnimateOnScroll>
          </div>

          {/* Right Column - Visual Element */}
          <div className="hidden md:block relative">
            <AnimateOnScroll>
              <div className="relative w-full h-96 bg-gradient-to-br from-slate-800 to-slate-900 rounded-3xl border border-slate-700 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-6xl font-bold text-cyan-500 mb-4">→</div>
                    <p className="text-slate-400">Revenue Growth Systems</p>
                  </div>
                </div>
                <div className="absolute top-0 right-0 w-40 h-40 bg-cyan-500 rounded-full mix-blend-multiply filter blur-2xl opacity-10 animate-pulse"></div>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </div>
    </section>
  )
}
